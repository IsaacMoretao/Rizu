import { Response, Request } from 'express';
import { FindTshirtUseCase } from './FindTshirtUseCase';

export class ListUsersController {
  async handle(request: Request, response: Response) {
    const findTshirtUseCase = new FindTshirtUseCase();

    const Users = await findTshirtUseCase.execute();

    return response.json(Users);
  }
}