import { Request, Response } from 'express';
import { UpdateTshirtUseCase } from './UpdateTshirtUseCase';

export class UpdateTshirtController {
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

    const updateTshirt = new UpdateTshirtUseCase();

    const Tshirt = await updateTshirt.execute({
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

    return response.json(Tshirt);
  }
};