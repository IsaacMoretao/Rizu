import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DeleteAcessoriesUseCase(id: string) {
  const deletedAcessories = await prisma.accessories.delete({
    where: {
      id: id,
    },
  });
  return deletedAcessories;
}