import { prisma } from '../../../../../database/prismaClient';

export class FindPantsUseCase {
  async execute() {
    const Pants = await prisma.pants.findMany();

    return Pants;
  }
}
