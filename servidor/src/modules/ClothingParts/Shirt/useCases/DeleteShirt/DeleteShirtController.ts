import { Request, Response } from 'express';
import { DeleteUserUseCase } from './DeleteShirtUseCase';

export async function DeleteShirtById(request: Request, response: Response) {
  const { id } = request.params;
  try {
    const deletedUser = await DeleteUserUseCase(id);
    response.json(deletedUser);
  } catch (e) {
    console.error(e);
    response.status(500).json({ error: 'Internal server error' });
  }
}