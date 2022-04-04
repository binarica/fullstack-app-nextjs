const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const sessionsData = [
  {
    date: "2022-02-22T12:00:00Z",
    patient: "Alice Smith",
    fee: 100,
    payments: {
      create: [
        {
          amount: 100,
          createdAt: "2022-02-22T12:45:00Z",
        },
      ],
    },
  },
  {
    date: "2022-02-24T17:00:00Z",
    patient: "Bob Jones",
    fee: 150,
    payments: {
      create: [
        {
          amount: 100,
          createdAt: "2022-02-24T17:45:00Z",
        },
        {
          amount: 50,
          createdAt: "2022-02-26T08:00:00Z",
        },
      ],
    },
  },
  {
    date: "2022-02-26T16:00:00Z",
    patient: "Charlie Brown",
    fee: 200,
  },
];

const run = async () => {
  console.log(`Start seeding ...`);

  for (const s of sessionsData) {
    const session = await prisma.session.create({
      data: s,
    });
    console.log(`Created session with id: ${session.id}`);
  }

  console.log(`Seeding finished.`);
};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
