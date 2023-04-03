import { Response, Request } from 'express';
import { FindTshirtUseCase } from './DeleteUserUseCase';

export class ListUsersController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const findTshirtUseCase = new FindTshirtUseCase();
    const Users = await findTshirtUseCase.execute({ id });

    return response.json(Users);
  }
}