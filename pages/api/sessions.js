import prisma from "../../lib/prisma";

// GET /api/sessions
export default async function handle(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({
      error: `Method ${req.method} not allowed`,
    });
    return;
  }

  const result = await prisma.session.findMany({
    orderBy: [
      {
        date: "desc",
      },
    ],
  });
  res.json(result);
}
