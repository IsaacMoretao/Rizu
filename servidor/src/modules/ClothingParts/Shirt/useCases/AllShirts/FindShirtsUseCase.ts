import { prisma } from '../../../../../database/prismaClient';

export class FindShirtsUseCase {
  async execute() {
    const Shirts = await prisma.shirt.findMany();

    return Shirts;
  }
}
