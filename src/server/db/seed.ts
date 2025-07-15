import { Prisma } from "@/generated/prisma";
import db from "../db";

import{fakerID_ID} from "@faker-js/faker"

export async function main(){
    for (let e = 0; e <= 300; e++) {
       await db.user.create({
        data : {
            name : fakerID_ID.person.fullName(),
            email : fakerID_ID.internet.email(),
        }
       });
    }
}

main();