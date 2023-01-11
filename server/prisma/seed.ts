import { PrismaClient } from '@prisma/client';
import ShortUniqueId from "short-unique-id";

const prisma = new PrismaClient()

async function main () {
  const pants = await prisma.pants.create({
    data: {
      title: 'calça Jins',
      pieceUrl: 'https://github.com/IsaacMoretao.png',
      priceInCents: 199,
      tipe: 'calça',
      quantityI: 1,
      quantityIII: 2,
      quantityV: 3,
      quantityIIV: 5,
      quantityIIIIV: 6,
    }
  })

  const shirt = await prisma.shirt.create({
    data: {
      title: 'camisa',
      pieceUrl: 'https://github.com/IsaacMoretao.png',
      priceInCents: 1990,
      tipe: 'caisa',
      quantityPP: 6,
      quantityM: 1,
      quantityGG: 3,
    }
  })

  const Tshirts = await prisma.tshirts.create({
    data: {
      title: 'camiseta',
      pieceUrl: 'https://github.com/IsaacMoretao.png',
      priceInCents: 1890,
      tipe: 'caiseta',
      quantityP: 2,
      quantityG: 1,
    }
  })

  const blouses = await prisma.blouses.create({
    data: {
      title: 'Blusa',
      pieceUrl: 'https://github.com/IsaacMoretao.png',
      priceInCents: 55000,
      tipe: 'Bruzinha',
      quantityPP: 6,
      quantityP: 47,
      quantityM: 31,
      quantityG: 44,
      quantityGG: 42,
    }
  })
}

main()