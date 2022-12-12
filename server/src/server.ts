import Fastfy from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query'],
})

async function bootstrap() {
 const fastify = Fastfy({
  logger: true,
 })

 fastify.get('/pants', async() => {

  const pants = await prisma.pants.count()

  return { pants }

 })

 await fastify.listen({ port: 3333 })
}

bootstrap()