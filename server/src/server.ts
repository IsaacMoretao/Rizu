import Fastfy from 'fastify';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';


const prisma = new PrismaClient({
  log: ['query'],
})

async function bootstrap() {
 const fastify = Fastfy({
  logger: true,
 })

 /* ######### - pants - ######### */

 fastify.get('/pants', async() => {

  const pants = await prisma.pants.findMany()


  return { pants }

 })

 fastify.post('/pants', async(request, reply) => {

  const createpants = z.object({
    title: z.string(),
    pieceUrl: z.string(),
    tipe: z.string(),
    priceInCents: z.number(),
    quantity: z.number()
  })

  const { title, pieceUrl, tipe, priceInCents, quantity } = createpants.parse(request.body)

  await prisma.pants.create({
    data: {
      title,
      pieceUrl,
      tipe,
      priceInCents,
      quantity
    }
  })

 })

 /* ######### - Tshirts - ######### */

 fastify.get('/Tshirts', async() => {

  const Tshirts = await prisma.tshirts.findMany()


  return { Tshirts }

 })

 fastify.post('/Tshirts', async(request, reply) => {

  const createTshirts = z.object({
    title: z.string(),
    pieceUrl: z.string(),
    tipe: z.string(),
    priceInCents: z.number(),
    quantity: z.number()
  })

  const { title, pieceUrl, tipe, priceInCents, quantity } = createTshirts.parse(request.body)

  await prisma.tshirts.create({
    data: {
      title,
      pieceUrl,
      tipe,
      priceInCents,
      quantity
    }
  })

 })

  /* ######### - Blouses - ######### */

  fastify.get('/Blouses', async() => {

    const Blouses = await prisma.blouses.findMany()
  
    return { Blouses }
  
   })
  
   fastify.post('/Blouses', async(request, reply) => {
  
    const createBlouses = z.object({
      title: z.string(),
      pieceUrl: z.string(),
      tipe: z.string(),
      priceInCents: z.number(),
      quantity: z.number()
    })
  
    const { title, pieceUrl, tipe, priceInCents, quantity } = createBlouses.parse(request.body)
  
    await prisma.blouses.create({
      data: {
        title,
        pieceUrl,
        tipe,
        priceInCents,
        quantity
      }
    })
  
   })

  /* ######### - Shirt - ######### */

  fastify.get('/Shirt', async() => {

    const Shirt = await prisma.shirt.findMany()
  
    return { Shirt }
  
   })
  
   fastify.post('/Shirt', async(request, reply) => {
  
    const createShirt = z.object({
      title: z.string(),
      pieceUrl: z.string(),
      tipe: z.string(),
      priceInCents: z.number(),
      quantity: z.number()
    })
  
    const { title, pieceUrl, tipe, priceInCents, quantity } = createShirt.parse(request.body)
  
    await prisma.shirt.create({
      data: {
        title,
        pieceUrl,
        tipe,
        priceInCents,
        quantity
      }
    })
  
   })

 await fastify.listen({ port: 3333 })
}

bootstrap()