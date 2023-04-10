import { Request, Response } from 'express';
import { DeleteDressesUseCase } from './DeleteDressesUseCases';

export async function DeleteDressesById(request: Request, response: Response) {
  const { id } = request.params;
  try {
    const deletedDresses = await DeleteDressesUseCase(id);
    response.json(deletedDresses);
  } catch (e) {
    console.error(e);
    response.status(500).json({ error: 'Internal server error' });
  }
}