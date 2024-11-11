import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ['info', 'query']})

// OFSET is like after reading the given number(0, 10, 20) then go to next page another 10 new questions
// SELECT * FROM questions OFSET 0 LIMIT 10     first 10 problems on page 1
// SELECT * FROM questions OFSET 10 LIMIT 10    after completing those 10 questions next 10 questions will render on next page
// SELECT * FROM questions OFSET 20 LIMIT 10
async function main() {
    let res = await prisma.post.findMany({
        take: 1, // LIMIT  taking post data count 
        skip: 1  // OFSET  skiping post data count
    })
    console.log(res);
}

main();