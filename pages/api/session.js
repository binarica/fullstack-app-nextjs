import prisma from "../../lib/prisma";

// POST /api/session
// Required fields in body: date, patient, fee
export default async function handle(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({
      error: `Method ${req.method} not allowed`,
    });
    return;
  }

  const { date, patient, fee } = req.body;

  if (fee <= 0) {
    res.status(400).json({
      error: "Fee must be greater than 0",
    });
    return;
  }

  const result = await prisma.session.create({
    data: {
      date,
      patient,
      fee,
    },
  });
  res.json(result);
}
