"use strict";
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function main2() {
    return __awaiter(this, void 0, void 0, function* () {
        // const user = await prisma.user.findMany({});    // for all exesting user
        const user = yield prisma.user.findMany({
            where: {
                email: 'klaus@example.com'
            }
        });
        console.log(user);
        const users = yield prisma.user.findUnique({
            where: {
                id: 1
            },
            include: {
                posts: true
            }
        });
        console.log(users);
    });
}
main2();
