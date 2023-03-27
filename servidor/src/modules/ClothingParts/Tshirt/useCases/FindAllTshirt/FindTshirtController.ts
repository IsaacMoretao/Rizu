import { Response } from 'express';
import { FindTshirtsUseCase } from './FindTshirtUseCase';

export class FindAllTshirtsController {
  async handle(request: Request, response: Response) {
    const findTshirtsUseCase = new FindTshirtsUseCase();

    const Tshirts = await findTshirtsUseCase.execute();

    return response.json(Tshirts);
  }
}