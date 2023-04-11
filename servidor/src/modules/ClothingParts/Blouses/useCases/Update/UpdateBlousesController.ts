import { Request, Response } from 'express';
import { UpdateBlousesUseCase } from './UpdateBlousesUseCase';

export class UpdateBlousesController {
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

    const updateBlouses = new UpdateBlousesUseCase();

    const Blouses = await updateBlouses.execute({
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

    return response.json(Blouses);
  }
};