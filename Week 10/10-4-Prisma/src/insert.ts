import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      email: username,
      password,
      firstName,
      lastName,
    },
    select:{
      id:true,
      firstName:true
    }
  });
  console.log(res);
}

insertUser("aman1234@gmail.com", "password", "aman", "kumbhalwar");