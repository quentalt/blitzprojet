import { Ctx } from "blitz"
import db, { Prisma } from "db"

type CreateRequestInput = Pick<Prisma.RequestCreateArgs, "data">
export default async function createRequest({ data }: CreateRequestInput, ctx: Ctx) {
  ctx.session.authorize()
  
  const userId = ctx.session.userId

  const request = await db.request.create({
     data:{
    ...data,
    user:{
      connect:{
        id:userId,
      },
    },
  },
})

  return request
}
