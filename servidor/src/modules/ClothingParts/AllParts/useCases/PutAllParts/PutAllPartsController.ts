import { Request, Response } from 'express';
import { PutAllPartsUseCase } from './PutAllPartsUseCase';

export class PutAllPartsController {
  async update(request: Request, response: Response) {
    const { id } = request.params;

    const { 
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

    } = request.body;

    const putAllPartsUseCase = new PutAllPartsUseCase();

    const Item = await putAllPartsUseCase.execute({
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

    });

    return response.json(Item);

  }
}