import { Request, Response } from 'express';
import { FindPantsUseCase } from './FindPantsUseCase';

export class FindAllPantsController {
  async handle(request: Request, response: Response) {
    const findPantsUseCase = new FindPantsUseCase();

    const Pants = await findPantsUseCase.execute();

    return response.json(Pants);
  }
}