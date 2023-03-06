import { prisma } from '../../../../../database/prismaClient';
import ShortUniqueId from "short-unique-id";

interface IClothingParts {
  priceInCents: number,
  title: string,
  description: string,
  pieceUrl?: string,
  tipe: string,

}

export class CreateAccessoriesUseCase {
  async execute({
    priceInCents,
    title,
    description,
    pieceUrl,
    tipe,

  }: IClothingParts) {

    const generate = new ShortUniqueId({ length: 5 })
    const Code = String(generate()).toUpperCase()

    const sirt = await prisma.accessories.create({
      data: {
        priceInCents,
        title,
        description,
        code: Code,
        pieceUrl,
        tipe

      },
    });

    return sirt;
  }
}