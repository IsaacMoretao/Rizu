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

export class UpdateTshirtUseCase {
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
    const Tshirt = await prisma.tshirts.update({
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

    return Tshirt;
  }
}