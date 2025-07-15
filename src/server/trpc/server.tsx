/* eslint-disable @typescript-eslint/ban-ts-comment */
import 'server-only'; 
import { createHydrationHelpers } from '@trpc/react-query/rsc';
import { cache } from 'react';
import { appRouter } from '@trpc/routers/_app';
import { makeQueryClient } from '@trpc/query-client';
import { createTRPCContext } from '@trpc/context';
import { createCallerFactory } from '@trpc/init';

export const getQueryClient = cache(makeQueryClient);
//@ts-expect-error
const caller = createCallerFactory(appRouter)(createTRPCContext);
export const { trpc, HydrateClient } = createHydrationHelpers<typeof appRouter>(
  caller,
  getQueryClient,
);