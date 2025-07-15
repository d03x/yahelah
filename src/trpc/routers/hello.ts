import db from "@/server/db";
import { baseProcedure, createTRPCRouter } from "../init";

export const hello = createTRPCRouter({
    world : baseProcedure.query(async ()=>{
        const user = await db.user.findMany({
            take : 10
        });
        return {
            user,
        }
    })
})