import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main3() {
    await prisma.user.update({
        where: {
            id: 1
        },
        data: {
            posts: {
                deleteMany: {
                    published: false
                }
            }
        }
    })
}

main3()