import { PrismaClient } from '@prisma/client'

console.log("inside db.ts");

const prismaClientSingleton = () => {
    console.log("prisma client instantiated");
    
  return new PrismaClient()
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma