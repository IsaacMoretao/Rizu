import { Request, Response } from 'express';
import { FindAllpurchaseUseCase } from './FindAllpurchaseUseCase';

export class FindAllpurchaseController {
  async handle(request: Request, response: Response) {
    const findAllpurchaseUseCase = new FindAllpurchaseUseCase();

    const Allpurchase = await findAllpurchaseUseCase.execute();

    return response.json(Allpurchase);
  }
}