import { Request, Response } from 'express';
import { FindAccessoriesUseCase } from './FindAccessoriesUseCase';

export class FindAccessoriesController {
  async handle(request: Request, response: Response) {
    const findAccessoriesUseCase = new FindAccessoriesUseCase();

    const Accessories = await findAccessoriesUseCase.execute();

    return response.json(Accessories);
  }
}