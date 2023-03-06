import { prisma } from '../../../../../database/prismaClient';
import ShortUniqueId from "short-unique-id"

interface IClothingDresses {
  quantityPP: number,
  quantityP: number,
  quantityM: number,
  quantityG: number,
  quantityGG: number,

  priceInCents: number,
  title: string,
  description: string,
  pieceUrl?: string,
  tipe: string,

}

export class CreateDressesUseCase {
  async execute({
    priceInCents,
    title,
    description,
    pieceUrl,
    tipe,

    quantityPP,
    quantityP,
    quantityM,
    quantityG,
    quantityGG

  }: IClothingDresses) {

    const generate = new ShortUniqueId({ length: 5 })
    const Code = String(generate()).toUpperCase()

    const sirt = await prisma.dresses.create({
      data: {
        priceInCents,
        title,
        description,
        code: Code,
        pieceUrl,
        tipe,
        quantityPP,
        quantityP,
        quantityM,
        quantityG,
        quantityGG
      },
    });

    return sirt;
  }
}