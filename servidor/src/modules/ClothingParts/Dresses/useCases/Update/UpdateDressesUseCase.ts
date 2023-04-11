import { prisma } from "../../../../../database/prismaClient";

interface IRequest {
  id: string;
  quantityPP: number;
  quantityP: number;
  quantityM: number;
  quantityG: number;
  quantityGG: number;

  priceInCents: number;
  title: string;
  description: string;
  pieceUrl?: string;
  tipe: string;
}

export class UpdateDressesUseCase {
  async execute({
    id,
    quantityPP,
    quantityP,
    quantityM,
    quantityG,
    quantityGG,

    priceInCents,
    title,
    description,
    pieceUrl,
    tipe,
  }: IRequest) {
    const Dresses = await prisma.dresses.update({
      where: { id },
      data: { 
        quantityPP,
        quantityP,
        quantityM,
        quantityG,
        quantityGG,
    
        priceInCents,
        title,
        description,
        pieceUrl,
        tipe
       },
    });

    return Dresses;
  }
}