import { prisma } from '../../../../../database/prismaClient';

export class FindAllpurchaseUseCase {
  async execute() {
    const Allpurchase = await prisma.finalPurchase.findMany();

    return Allpurchase;
  }
}