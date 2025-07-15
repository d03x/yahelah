import { initTRPC } from "@trpc/server";
import { Context } from "./context";
const t = initTRPC.context<Context>().create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      message:
        Bun.env.NODE_ENV === "production" ? "Terjadi kesalahan" : shape.message,
      code: error.code,
    };
  },
});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
export const publicProsedure = baseProcedure;