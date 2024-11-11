"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({ log: ['info', 'query', 'error'] }); // log what and how data moving in sql it it inbuild prisma keywork(feature)
function main1() {
    return __awaiter(this, void 0, void 0, function* () {
        const newPost = yield prisma.post.create({
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
    });
}
main1();
// .then(() => prisma.$disconnect())
// .catch((e) => {
//     console.error(e);
//     prisma.$disconnect();
// });
