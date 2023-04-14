import { prisma } from '../../../../../database/prismaClient';

interface IRequest {
  id: string;
}

export class FindAllPartsUseCase {
  async execute({ id }: IRequest) {

    const Shirt = await prisma.shirt.findUnique({
      where: { id },
    });

    const Tshirt = await prisma.tshirts.findFirst({
      where: { id },
    });

    const Blouses = await prisma.blouses.findFirst({
      where: { id },
    });

    const Pants = await prisma.pants.findFirst({
      where: { id },
    });

    if (Shirt != null) {
      return Shirt;
    } else if (Tshirt != null){
      return Tshirt;
    } else if (Blouses != null){
      return Blouses;
    }else if (Pants != null){
      return Pants;
    } else {
      return null
    }

  }
}