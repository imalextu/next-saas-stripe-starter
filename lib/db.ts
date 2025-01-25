import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import "server-only";

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: ReturnType<typeof getPrismaClient>
}

const getPrismaClient = () => {
  return new PrismaClient().$extends(withAccelerate())
}

export let prisma: ReturnType<typeof getPrismaClient>
if (process.env.NODE_ENV === "production") {
  prisma = getPrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = getPrismaClient()
  }
  prisma = global.cachedPrisma
}
