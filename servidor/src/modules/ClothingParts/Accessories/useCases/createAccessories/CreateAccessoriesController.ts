import { Request, Response } from 'express';
import { CreateAccessoriesUseCase } from './CreateAccessoriesUseCase';

export class CreateAccessoriesController {

  async handle(request: Request, response: Response) {
    const {
      priceInCents,
      title,
      description,
      pieceUrl,
      tipe,

    } = request.body;

  const createAccessoriesUseCase = new CreateAccessoriesUseCase();

  const resultado = await createAccessoriesUseCase.execute({
    priceInCents,
    title,
    description,
    pieceUrl,
    tipe,

  });

    return response.json(resultado);
  }
}