import { Request, Response } from 'express';
import { FindShirtsUseCase } from './FindShirtsUseCase';

export class FindAllShirtsController {
  async handle(request: Request, response: Response) {
    const findShirtsUseCase = new FindShirtsUseCase();

    const Shirts = await findShirtsUseCase.execute();

    return response.json(Shirts);
  }
}