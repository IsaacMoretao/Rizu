import { Request, Response } from 'express';
import { DeleteTshirtUseCase } from './DeleteTshirtUseCase';

export async function DeleteTshirtController(request: Request, response: Response) {
  const { id } = request.params;
  try {
    const deletedTshirt = await DeleteTshirtUseCase(id);
    response.json(deletedTshirt);
  } catch (e) {
    console.error(e);
    response.status(500).json({ error: 'Internal server error' });
  }
}