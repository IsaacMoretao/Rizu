import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DeleteDressesUseCase(id: string) {
  const deletedDresses = await prisma.dresses.delete({
    where: {
      id: id,
    },
  });
  return deletedDresses;
}