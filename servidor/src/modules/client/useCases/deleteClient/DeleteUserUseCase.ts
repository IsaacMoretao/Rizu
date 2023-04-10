import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DeleteUserUseCase(id: string) {
  const deletedUser = await prisma.tshirts.delete({
    where: {
      id: id,
    },
  });
  return deletedUser;
}