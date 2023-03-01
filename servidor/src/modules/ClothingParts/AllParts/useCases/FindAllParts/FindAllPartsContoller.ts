import { Response } from 'express';
import { FindAllPartsUseCase } from './FindAllPartsUseCase';

export class FindAllPartsContoller {
  async handle(response: Response) {
    const findAllWithoutEndDateUseCase = new FindAllPartsUseCase();

    const FindAll = await findAllWithoutEndDateUseCase.execute();

    return response.json( FindAll );
  }
}