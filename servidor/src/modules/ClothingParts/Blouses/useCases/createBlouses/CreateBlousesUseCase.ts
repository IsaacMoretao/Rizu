import { prisma } from '../../../../../database/prismaClient';
import ShortUniqueId from "short-unique-id"

interface IClothingBlouse {
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

export class CreateBlouseUseCase {
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

  }: IClothingBlouse) {

    const generate = new ShortUniqueId({ length: 5 })
    const Code = String(generate()).toUpperCase()

    const sirt = await prisma.blouses.create({
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

    return sirt;
  }
}