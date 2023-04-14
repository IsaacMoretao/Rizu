import { Request, Response } from 'express';
import { FindAllPartsUseCase } from './FindAllPartsUseCase';

export class FindAllPartsContoller {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const findAllPartsUseCase = new FindAllPartsUseCase();

    const FindAll = await findAllPartsUseCase.execute({
      id,
    });

    return response.json({ FindAll });
  }
}