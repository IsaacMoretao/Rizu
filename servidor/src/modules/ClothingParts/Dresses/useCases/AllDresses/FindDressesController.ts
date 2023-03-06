import { Request, Response } from 'express';
import { FindDressesUseCase } from './FindDressesUseCase';

export class FindAllDressesController {
  async handle(request: Request, response: Response) {
    const findDressesUseCase = new FindDressesUseCase();

    const Dresses = await findDressesUseCase.execute();

    return response.json(Dresses);
  }
}