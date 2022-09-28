import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();

  const createUser = await prisma.user.create({
    data: {
      name: 'Eiji',
      email: 'eiji@mail.com',
      age: 29,
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    select: {
      name: true,
      userPreference: { select: { id: true } },
    },
  });

  const createUsers = await prisma.user.createMany({
    data: [
      {
        name: 'Fauji',
        email: 'fauji@mail.com',
        age: 28,
      },
      {
        name: 'Aji',
        email: 'aji@mail.com',
        age: 27,
      },
    ],
  });

  const allUsers = await prisma.user.findMany();

  const findUsersBy = await prisma.user.findFirst({
    where: {
      name: 'Eiji',
    },
  });

  const findUsersByUnique = await prisma.user.findUnique({
    where: {
      age_name: {
        age: 27,
        name: 'Aji',
      },
    },
  });

  const updateUser = await prisma.user.update({
    where: {
      name: 'Eiji',
    },
    data: {
      email: 'eijibon@mail.com',
    },
  });
}

main()
  .catch((e) => console.log(e.message))
  .finally(async () => {
    await prisma.$disconnect;
  });
