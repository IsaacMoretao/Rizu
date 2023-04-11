import { Request, Response } from 'express';
import { UpdateDressesUseCase } from './UpdateDressesUseCase';

export class UpdateDressesController {
  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { 
      quantityPP,
      quantityP,
      quantityM,
      quantityG,
      quantityGG,
      priceInCents,
      title,
      description,
      pieceUrl,
      tipe
    } = request.body;

    const updateDresses = new UpdateDressesUseCase();

    const Dresses = await updateDresses.execute({
      id,
      quantityPP,
      quantityP,
      quantityM,
      quantityG,
      quantityGG,
  
      priceInCents,
      title,
      description,
      pieceUrl,
      tipe
    });

    return response.json(Dresses);
  }
};