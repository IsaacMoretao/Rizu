import { prisma } from '../../../../database/prismaClient';

export class FindTshirtUseCase {
  async execute() {
    const Users = await prisma.admins.findMany();

    return Users;
  }
}