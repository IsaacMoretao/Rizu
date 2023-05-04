import { prisma } from "../../../../../database/prismaClient";

interface IRequest {
  id: string;
  quantityPP: number;
  quantityP: number;
  quantityM: number;
  quantityG: number;
  quantityGG: number;

  quantityI: number;
  quantityII: number;
  quantityIII: number;
  quantityIIII: number;

  quantityV: number;
  quantityIV: number;
  quantityIIV: number;
  quantityIIIV: number;
  quantityIIIIV: number;
}

export class PutAllPartsUseCase {
  
  async execute({
    id,
    quantityPP,
    quantityP,
    quantityM,
    quantityG,
    quantityGG,

    quantityI,
    quantityII,
    quantityIII,
    quantityIIII,
  
    quantityV,
    quantityIV,
    quantityIIV,
    quantityIIIV,
    quantityIIIIV 
  }: IRequest) {

    
    const Shirt = await prisma.shirt.update({
      where: { id },
      data: { 
        quantityPP,
        quantityP,
        quantityM,
        quantityG,
        quantityGG,
    
       },
    });

    const Tshirt = await prisma.tshirts.update({
      where: { id },
      data: { 
        quantityPP,
        quantityP,
        quantityM,
        quantityG,
        quantityGG,
    
       },
    });

    const Pants = await prisma.pants.update({
      where: { id },
      data: { 
        quantityI,
        quantityII,
        quantityIII,
        quantityIIII,
      
        quantityV,
        quantityIV,
        quantityIIV,
        quantityIIIV,
        quantityIIIIV 
    
       },
    });

    const Dresses = await prisma.dresses.update({
      where: { id },
      data: { 
        quantityPP,
        quantityP,
        quantityM,
        quantityG,
        quantityGG,
    
       },
    });

    const Blouses = await prisma.blouses.update({
      where: { id },
      data: { 
        quantityPP,
        quantityP,
        quantityM,
        quantityG,
        quantityGG,
    
       },
    });

    if (Shirt != null) {
      return Shirt;
    } else if (Tshirt != null) {
      return Tshirt;
    } else if (Pants != null) {
      return Pants;
    } else if (Dresses != null) {
      return Dresses;
    } else if (Blouses != null) {
      return Blouses;
    } else {
      return Error
    }

  }
}