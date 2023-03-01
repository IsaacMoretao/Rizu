import { Response } from 'express';
import { FindTshirtsUseCase } from './FindTshirtUseCase';

export class FindAllTshirtsController {
  async handle(response: Response) {
    const findTshirtsUseCase = new FindTshirtsUseCase();

    const Tshirts = await findTshirtsUseCase.execute();

    return response.json(Tshirts);
  }
}