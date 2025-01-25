import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import "server-only";

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient
}

export let prisma: PrismaClient
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient().$extends(withAccelerate())
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient().$extends(withAccelerate())
  }
  prisma = global.cachedPrisma
}
