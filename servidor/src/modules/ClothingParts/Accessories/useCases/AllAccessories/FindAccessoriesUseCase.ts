import { prisma } from '../../../../../database/prismaClient';

export class FindAccessoriesUseCase {
  async execute() {
    const Accessories = await prisma.accessories.findMany();

    return Accessories;
  }
}
