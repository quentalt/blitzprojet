import { Ctx, NotFoundError } from "blitz"
import db, { Prisma } from "db"

type GetProductInput = Pick<Prisma.FindFirstProductArgs, "where">

export default async function getProduct({ where }: GetProductInput, ctx: Ctx) {
  ctx.session.authorize()

  const product = await db.product.findFirst({
    where,
    include: {
      requests: {
        include: {
          votesOnRequests: true,
        },
      },
    },
  })

  if (!product) throw new NotFoundError()

  return product
}
