import { Request, Response } from 'express';
import { UpdateAcessoriesUseCase } from './UpdateAcessoriesUseCase';

export class UpdateAcessoriesController {
  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { 
      priceInCents,
      title,
      description,
      pieceUrl,
      tipe
    } = request.body;

    const updateAcessories = new UpdateAcessoriesUseCase();

    const Acessories = await updateAcessories.execute({
      id, 
      priceInCents,
      title,
      description,
      pieceUrl,
      tipe
    });

    return response.json(Acessories);
  }
};