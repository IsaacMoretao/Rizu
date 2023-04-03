import { prisma } from '../../../../database/prismaClient';

interface ICreateClient {
  id: string;
}

export class FindTshirtUseCase {
  async execute({ id }: ICreateClient) {

    const client = await prisma.admins.delete({
      data: {
        id
      },
    });

    return client;
  }
}