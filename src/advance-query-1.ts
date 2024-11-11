import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


async function main() {
    let res = await prisma.user.findMany({
        where: {
            email: {
                endsWith: 'example.com'
            },
            posts: {
                // for searching certain specific emails
                // has atleast one post published those email will log
                some: {
                    published: true
                }
            }
        },
        include: {
            posts: {
                where: {
                    // for loging posts data of that certain specific emails
                    // this will log all the published user post data
                    published: true
                }
            }
        }
    })

    console.log("res" ,JSON.stringify(res));
}

main()