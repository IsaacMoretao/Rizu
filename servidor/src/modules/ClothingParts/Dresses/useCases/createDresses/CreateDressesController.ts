import { Request, Response } from 'express';
import { CreateDressesUseCase } from './CreateDressesUseCase';

export class CreateDressesController {

  async handle(request: Request, response: Response) {
    const {
      priceInCents,
      title,
      description,
      pieceUrl,
      tipe,
      
      quantityPP,
      quantityP,
      quantityM,
      quantityG,
      quantityGG
    } = request.body;

  const createDressesUseCase = new CreateDressesUseCase();

  const resultado = await createDressesUseCase.execute({
    priceInCents,
    title,
    description,
    pieceUrl,
    tipe,

    quantityPP,
    quantityP,
    quantityM,
    quantityG,
    quantityGG
  });

    return response.json(resultado);
  }
}