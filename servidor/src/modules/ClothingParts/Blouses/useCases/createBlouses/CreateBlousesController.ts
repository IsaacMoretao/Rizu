import { Request, Response } from 'express';
import { CreateBlouseUseCase } from './CreateBlousesUseCase';

export class CreateBlousesController {

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

  const createBlousesUseCase = new CreateBlouseUseCase();

  const resultado = await createBlousesUseCase.execute({
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