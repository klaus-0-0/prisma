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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield prisma.user.findMany({
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
        });
        console.log("res", JSON.stringify(res));
    });
}
main();
