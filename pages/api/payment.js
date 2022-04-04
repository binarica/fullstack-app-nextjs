import prisma from "../../lib/prisma";

// POST /api/payment
// Required fields in body: sessionId, amount
export default async function handle(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({
      error: `Method ${req.method} not allowed`,
    });
    return;
  }

  const { sessionId, amount } = req.body;

  if (amount <= 0) {
    res.status(400).json({
      error: "Amount must be greater than 0",
    });
    return;
  }

  const session = await prisma.session.findUnique({
    where: {
      id: sessionId,
    },
    include: {
      payments: true,
    },
  });

  if (!session) {
    res.status(404).json({
      error: "Session not found",
    });
    return;
  }

  const { fee, payments } = session;
  const totalPayments = payments.reduce((acc, p) => acc + p.amount, 0);
  const remainingFee = fee - totalPayments;

  if (amount > remainingFee) {
    res.status(400).json({
      error: "Amount exceeds remaining fee",
    });
    return;
  }

  const result = await prisma.payment.create({
    data: {
      sessionId,
      amount,
    },
  });
  res.json(result);
}
