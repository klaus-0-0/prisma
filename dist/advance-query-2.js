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
const prisma = new client_1.PrismaClient({ log: ['info', 'query'] });
// OFSET is like after reading the given number(0, 10, 20) then go to next page another 10 new questions
// SELECT * FROM questions OFSET 0 LIMIT 10     first 10 problems on page 1
// SELECT * FROM questions OFSET 10 LIMIT 10    after completing those 10 questions next 10 questions will render on next page
// SELECT * FROM questions OFSET 20 LIMIT 10
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield prisma.post.findMany({
            take: 1, // LIMIT  taking post data count 
            skip: 1 // OFSET  skiping post data count
        });
        console.log(res);
    });
}
main();
