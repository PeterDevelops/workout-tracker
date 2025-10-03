import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: { email: "test@example.com", name: "Peter" },
  });
  console.log(user);
}

main();