import Fastfy from 'fastify';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import ShortUniqueId from 'short-unique-id';


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

 fastify.post('/pants/post', async(request, reply) => {

  const createpants = z.object({
    title: z.string(),
    pieceUrl: z.string(),
    tipe: z.string(),
    priceInCents: z.number(),
    quantityI: z.number(),
    quantityII: z.number(),
    quantityIII: z.number(),
    quantityIIII: z.number(),
    quantityV: z.number(),
    quantityIV: z.number(),
    quantityIIV: z.number(),
    quantityIIIV: z.number(),
    quantityIIIIV: z.number(),
  })

  const {
    title,
    pieceUrl,
    tipe,
    priceInCents,
    quantityI,
    quantityII,
    quantityIII,
    quantityIIII,
    quantityV,
    quantityIV,
    quantityIIV,
    quantityIIIV,
    quantityIIIIV
   } = createpants.parse(request.body)

  await prisma.pants.create({
    data: {
      title,
      pieceUrl,
      tipe,
      priceInCents,
      quantityI,
      quantityII,
      quantityIII,
      quantityIIII,
      quantityV,
      quantityIV,
      quantityIIV,
      quantityIIIV,
      quantityIIIIV

    }

  })


 })

 /* ######### - Tshirts - ######### */

 fastify.get('/Tshirts', async() => {

  const Tshirts = await prisma.tshirts.findMany()


  return { Tshirts }

 })

 fastify.post('/Tshirts/post', async(request, reply) => {

  const generate = new ShortUniqueId({ length: 6 })
  const code = String(generate().toUpperCase());

  const createTshirts = z.object({
    title: z.string(),
    pieceUrl: z.string(),
    tipe: z.string(),
    priceInCents: z.number(),
    quantityPP: z.number(),
    quantityP: z.number(),
    quantityM: z.number(),
    quantityG: z.number(),
    quantityGG: z.number(),
  })

  const {
    title,
    pieceUrl,
    tipe,
    priceInCents,
    quantityPP,
    quantityP,
    quantityM,
    quantityG,
    quantityGG,
  } = createTshirts.parse(request.body)

  await prisma.tshirts.create({
    data: {
      title,
      code,
      pieceUrl,
      tipe,
      priceInCents,
      quantityPP,
      quantityP,
      quantityM,
      quantityG,
      quantityGG,
    }
  })

 })

  /* ######### - Blouses - ######### */

  fastify.get('/Blouses', async() => {

    const Blouses = await prisma.blouses.findMany()
  
    return { Blouses }
  
   })
  
   fastify.post('/Blouses/post', async(request, reply) => {
  
    const createBlouses = z.object({
      title: z.string(),
      pieceUrl: z.string(),
      tipe: z.string(),
      priceInCents: z.number(),
      quantityPP: z.number(),
      quantityP: z.number(),
      quantityM: z.number(),
      quantityG: z.number(),
      quantityGG: z.number(),
    })
  
    const {
      title,
      pieceUrl,
      tipe,
      priceInCents,
      quantityPP,
      quantityP,
      quantityM,
      quantityG,
      quantityGG,
    } = createBlouses.parse(request.body)
  
    await prisma.blouses.create({
      data: {
        title,
        pieceUrl,
        tipe,
        priceInCents,
        quantityPP,
        quantityP,
        quantityM,
        quantityG,
        quantityGG,
      }
    })
  
   })

  /* ######### - Shirt - ######### */

  fastify.get('/Shirt', async() => {

    const Shirt = await prisma.shirt.findMany()
  
    return { Shirt }
  
   })
  
   fastify.post('/Shirt/post', async(request, reply) => {
  
    const createShirt = z.object({
      title: z.string(),
      pieceUrl: z.string(),
      tipe: z.string(),
      priceInCents: z.number(),
      quantityPP: z.number(),
      quantityP: z.number(),
      quantityM: z.number(),
      quantityG: z.number(),
      quantityGG: z.number(),
    })
  
    const {
      title,
      pieceUrl,
      tipe,
      priceInCents,
      quantityPP,
      quantityP,
      quantityM,
      quantityG,
      quantityGG,
    } = createShirt.parse(request.body)
  
    await prisma.shirt.create({
      data: {
        title,
        pieceUrl,
        tipe,
        priceInCents,
        quantityPP,
        quantityP,
        quantityM,
        quantityG,
        quantityGG,
      }
    })
  
   })

 await fastify.listen({ port: 3333 })
}

bootstrap()