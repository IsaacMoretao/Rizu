import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DeleteTshirtUseCase(id: string) {
  const deletedTshirt = await prisma.tshirts.delete({
    where: {
      id: id,
    },
  });
  return deletedTshirt;
}