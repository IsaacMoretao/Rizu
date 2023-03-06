import { prisma } from '../../../../../database/prismaClient';

export class FindAllPartsUseCase {
  async execute() {

    const Shirt = await prisma.shirt.findMany();

    const Tshirt = await prisma.tshirts.findMany();

    const Blouses = await prisma.blouses.findMany();

    const Pants = await prisma.pants.findMany();

    return {Shirt, Tshirt, Blouses, Pants} ;
  }
}