import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({ data: { name: 'Jibon' } });
  // const users = await prisma.user.findMany();

  await prisma.user.deleteMany();
}

main()
  .catch((e) => console.log(e.message))
  .finally(async () => {
    await prisma.$disconnect;
  });
