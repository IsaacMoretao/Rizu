import { Response, Request } from 'express';
import { LoginUseCases } from './LoginUseCases';

export class LoginController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const loginUseCases = new LoginUseCases();

    const result = await loginUseCases.execute({
      username,
      password,
    });

    return response.json(result);
  }
}