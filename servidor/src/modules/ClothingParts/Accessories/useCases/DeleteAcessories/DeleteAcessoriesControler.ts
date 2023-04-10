import { Request, Response } from 'express';
import { DeleteAcessoriesUseCase } from './DeleteAcessoriesUseCases';

export async function DeleteAcessoriesById(request: Request, response: Response) {
  const { id } = request.params;
  try {
    const deletedAcessories = await DeleteAcessoriesUseCase(id);
    response.json(deletedAcessories);
  } catch (e) {
    console.error(e);
    response.status(500).json({ error: 'Internal server error' });
  }
}