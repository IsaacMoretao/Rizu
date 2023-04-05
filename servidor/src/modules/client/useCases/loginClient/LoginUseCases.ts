import { prisma } from '../../../../database/prismaClient';

interface ICreateClient {
  username: string;
  password: string;
}

export class LoginUseCases {
  
  async execute({ password, username }: ICreateClient) {
    const clientExists = await prisma.admins.findFirst({
      where: {
        username: {
          equals: username,
        },
        password: {
          equals: password
        }
      },
    });

    if (!clientExists) {
      throw new Error('Client not exists');
    }

    return clientExists;
  }
}