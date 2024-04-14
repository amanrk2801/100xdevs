import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createTodo(userId:number) {
    const response = await prisma.todo.create({
        data:{
            title:"Learn Prisma",
            description:"Learn Prisma Today.",
            userId:1
        }
    })
    console.log(response);
}

createTodo(1);