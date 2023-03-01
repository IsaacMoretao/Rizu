import { Request, Response } from 'express';
import { CreateTshirtUseCase } from './CreateTshirtUseCase';

export class CreateTshirtController {

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

  const createTshirtUseCase = new CreateTshirtUseCase();

  const resultado = await createTshirtUseCase.execute({
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