import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DeleteBlusesUseCase(id: string) {
  const deletedBluses = await prisma.blouses.delete({
    where: {
      id: id,
    },
  });
  return deletedBluses;
}