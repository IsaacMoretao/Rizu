import { prisma } from '../../../../../database/prismaClient';

export class FindBlosesUseCase {
  async execute() {
    const Blouses = await prisma.blouses.findMany();

    return Blouses;
  }
}
