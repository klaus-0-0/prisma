// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: 'klaus@example.com',
      name: 'klaus Doe',
    },
  });
  console.log('User created:', newUser);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
