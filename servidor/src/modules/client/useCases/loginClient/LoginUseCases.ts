import { prisma } from '../../../../database/prismaClient';

interface ICreateClient {
  username: string;
  password: string;
}

export class LoginUseCases {
  
  async execute({ password, username }: ICreateClient) {

    const bcrypt = require('bcrypt');

    try {
      const user = await prisma.admins.findUnique({
        where: {
          username,
        },
      });
  
      if (!user) {
        return false;
      }

      const match = await bcrypt.compare(password, user.password);
      return match;

    } catch (error) {
      throw new Error('Erro ao verificar o nome de usuário e a senha.');
    }
  }
}