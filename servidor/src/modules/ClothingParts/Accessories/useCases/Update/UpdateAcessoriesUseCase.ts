import { prisma } from "../../../../../database/prismaClient";

interface IRequest {
  id: string;
  priceInCents: number;
  title: string;
  description: string;
  pieceUrl?: string;
  tipe: string;
}

export class UpdateAcessoriesUseCase {
  async execute({
    id,
    priceInCents,
    title,
    description,
    pieceUrl,
    tipe,
  }: IRequest) {
    const Acessories = await prisma.accessories.update({
      where: { id },
      data: { 
        priceInCents,
        title,
        description,
        pieceUrl,
        tipe
       },
    });

    return Acessories;
  }
}