import { Request, Response } from 'express';
import { FindBlosesUseCase } from './FindBlosesUseCase';

export class FindAllAvailableController {
  async handle(request: Request, response: Response) {
    const findBlosesUseCase = new FindBlosesUseCase();

    const Bloses = await findBlosesUseCase.execute();

    return response.json(Bloses);
  }
}