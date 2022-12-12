import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main () {
  const pants = await prisma.pants.create({
    data: {
      title: 'calça Jins',
      pieceUrl: 'https://github.com/IsaacMoretao.png',
      priceInCents: 199,
      tipe: 'calça',
      quantity: 3
    }
  })

  const shirt = await prisma.pants.create({
    data: {
      title: 'camisa',
      pieceUrl: 'https://github.com/IsaacMoretao.png',
      priceInCents: 1990,
      tipe: 'caisa',
      quantity: 7
    }
  })

  const Tshirts = await prisma.pants.create({
    data: {
      title: 'camiseta',
      pieceUrl: 'https://github.com/IsaacMoretao.png',
      priceInCents: 1890,
      tipe: 'caiseta',
      quantity: 100
    }
  })

  const blouses = await prisma.pants.create({
    data: {
      title: 'Blusa',
      pieceUrl: 'https://github.com/IsaacMoretao.png',
      priceInCents: 55000,
      tipe: 'Bruzinha',
      quantity: 27
    }
  })
}

main()