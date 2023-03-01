import { prisma } from '../../../../../database/prismaClient';

export class FindTshirtsUseCase {
  async execute() {
    const Tshirts = await prisma.tshirts.findMany();

    return Tshirts;
  }
}