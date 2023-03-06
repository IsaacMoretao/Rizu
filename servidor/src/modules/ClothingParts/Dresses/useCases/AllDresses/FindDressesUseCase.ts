import { prisma } from '../../../../../database/prismaClient';

export class FindDressesUseCase {
  async execute() {
    const Dresses = await prisma.dresses.findMany();

    return Dresses;
  }
}
