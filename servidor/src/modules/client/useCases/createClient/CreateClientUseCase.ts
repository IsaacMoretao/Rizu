import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';

interface ICreateClient {
  username: string;
  password: string;
  avatarUrl: string;
}

export class CreateClientUseCase {


  async execute({ password, username, avatarUrl }: ICreateClient) {


    const clientExists = await prisma.admins.findFirst({
      where: {
        username: {
          equals: username,
        },
        password: {
          equals: password,
        }
      },
    });

    if (clientExists) {
      throw new Error('Client already exists');
    }

    const hashPassword = await hash(password, 10);

    const client = await prisma.admins.create({
      data: {
        username,
        avatarUrl,
        password: hashPassword,
      },
    });

    return client;
  }
}