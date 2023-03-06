import { Request, Response } from 'express';
import { CreatePantsUseCase } from './CreatePantsUseCase';

export class CreatePantsController {

  async handle(request: Request, response: Response) {
    const {
      priceInCents,
      title,
      description,
      pieceUrl,
      tipe,

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

  const createPantsUseCase = new CreatePantsUseCase();

  const resultado = await createPantsUseCase.execute({
    priceInCents,
    title,
    description,
    pieceUrl,
    tipe,
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

    return response.json(resultado);
  }
}