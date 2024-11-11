const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({log: ['info', 'query', 'error']});                   // log what and how data moving in sql it it inbuild prisma keywork(feature)

async function main1() {
    const newPost = await prisma.post.create({
        data: {
            title: "14 id",
            content: "jinjin",
            published: true,
            // authorId: 1,
            author: {
                connect: {
                    id: 14
                }
            }
        },
    });
    console.log('Post created:', newPost);
}

main1()
    // .then(() => prisma.$disconnect())
    // .catch((e) => {
    //     console.error(e);
    //     prisma.$disconnect();
    // });
