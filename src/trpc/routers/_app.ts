import { hello } from './hello';
import { createTRPCRouter } from '../init';
export const appRouter = createTRPCRouter({
  hello: hello
});
// export type definition of API
export type AppRouter = typeof appRouter;