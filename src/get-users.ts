// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

async function main2() {
    // const user = await prisma.user.findMany({});    // for all exesting user
    const user = await prisma.user.findMany({
        where: {                                       // where for specific email or id
            email: 'klaus@example.com'
        }
    })
    console.log(user)

        const users = await prisma.user.findUnique({
            where: {
                id: 1
            },
            include: {
                posts: true
            }
        })
        console.log(users);
    }


main2()
