import { prisma } from '../../../../../database/prismaClient';
import ShortUniqueId from "short-unique-id"

interface IClothingPants {
  quantityI: number,
  quantityII: number,
  quantityIII: number,
  quantityIIII: number,

  quantityV: number,
  quantityIV: number,
  quantityIIV: number,
  quantityIIIV: number,
  quantityIIIIV: number,

  priceInCents: number,
  title: string,
  description: string,
  pieceUrl?: string,
  tipe: string,

}

export class CreatePantsUseCase {
  async execute({
    priceInCents,
    title,
    description,
    pieceUrl,
    tipe,

    quantityI,
    quantityII,
    quantityIII,
    quantityIIII,
  
    quantityV,
    quantityIV,
    quantityIIV,
    quantityIIIV,
    quantityIIIIV 

  }: IClothingPants) {

    const generate = new ShortUniqueId({ length: 5 })
    const Code = String(generate()).toUpperCase()

    const sirt = await prisma.pants.create({
      data: {
        priceInCents,
        title,
        description,
        code: Code,
        pieceUrl,
        tipe,
        quantityI,
        quantityII,
        quantityIII,
        quantityIIII,
      
        quantityV,
        quantityIV,
        quantityIIV,
        quantityIIIV,
        quantityIIIIV 
      },
    });

    return sirt;
  }
}