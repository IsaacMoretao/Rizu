import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface IClothingParts {
  id: string;
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

export async function DeleteUserUseCase({
  id,
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
}: IClothingParts) {
  const deletedUser = await prisma.shirt.update({
    where: { id },

    date: {
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
    }
  });
  return deletedUser;
}