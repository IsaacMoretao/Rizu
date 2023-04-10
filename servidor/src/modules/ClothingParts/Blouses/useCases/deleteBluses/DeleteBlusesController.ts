import { Request, Response } from 'express';
import { DeleteBlusesUseCase } from './DeleteBlusesUseCases';

export async function DeleteBlusesById(request: Request, response: Response) {
  const { id } = request.params;
  try {
    const deletedBluses = await DeleteBlusesUseCase(id);
    response.json(deletedBluses);
  } catch (e) {
    console.error(e);
    response.status(500).json({ error: 'Internal server error' });
  }
}