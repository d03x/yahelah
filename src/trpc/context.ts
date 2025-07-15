import { TRPCError } from "@trpc/server";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { cache } from "react";
const MAX_BATCH_SIZE = 10;

export const createTRPCContext = cache(
  async (opts: FetchCreateContextFnOptions) => {
    if (opts.info.calls.length > MAX_BATCH_SIZE) {
      throw new TRPCError({
        code: "TOO_MANY_REQUESTS",
        message: `Batch size limit of ${MAX_BATCH_SIZE} exceeded`,
      });
    }
    return { data: 10, user: 20 };
  }
);

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
