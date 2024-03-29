import { Request, Response } from 'express';
import { UpdateShirtUseCase } from './UpdateShirtUseCase';

export class UpdateShirtController {
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

    const updateShirt = new UpdateShirtUseCase();

    const Shirt = await updateShirt.execute({
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

    return response.json(Shirt);
  }
};