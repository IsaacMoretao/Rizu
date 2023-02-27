import { Request, Response } from 'express';
import { CreatePartsUseCase } from './CreateShirtUseCase';

export class CreateShirtController {

  async handle(request: Request, response: Response) {
    const {
      priceInCents,
      title,
      pieceUrl,
      tipe,
      quantityPP,
      quantityP,
      quantityM,
      quantityG,
      quantityGG
    } = request.body;

  const createPartsUseCase = new CreatePartsUseCase();

  const resultado = await createPartsUseCase.execute({
    priceInCents,
    title,
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