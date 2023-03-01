import { prisma } from '../../../../../database/prismaClient';
import ShortUniqueId from "short-unique-id"

interface IClothingTshirt {
  quantityPP: number,
  quantityP: number,
  quantityM: number,
  quantityG: number,
  quantityGG: number,

  priceInCents: number,
  title: string,
  pieceUrl?: string,
  tipe: string,

}

export class CreateTshirtUseCase {
  async execute({
    priceInCents,
    title,
    pieceUrl,
    tipe,

    quantityPP,
    quantityP,
    quantityM,
    quantityG,
    quantityGG

  }: IClothingTshirt) {

    const generate = new ShortUniqueId({ length: 5 })
    const Code = String(generate()).toUpperCase()

    const tshirt = await prisma.tshirts.create({
      data: {
        priceInCents,
        title,
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

    return tshirt;
  }
}