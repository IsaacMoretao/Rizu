import { Request, Response } from 'express';
import { MakepurchaseUseCase } from './MakepurchaseUseCase';

export class MakepurchaseController {

  async handle(request: Request, response: Response) {

    const { 
      gmail,
      address,
      number,
      complement,
      cardNumber,
      nameOnCard,
      expiryMonth,
      expiryYear,
      securityCode,
      holderSCpf,

      quantitPP,
      quantitP,
      quantitM,
      quantitG,
      quantitGG,
    
      quantitI,
      quantitII,
      quantitIII,
      quantitIIII,

      quantitV,
      quantitIV,
      quantitIIV,
      quantitIIIV,
      quantitIIIIV
    } = request.body;

    const makepurchaseUseCase = new MakepurchaseUseCase();

    const compra = await makepurchaseUseCase.execute({
      gmail,
      address,
      number,
      complement,
      cardNumber,
      nameOnCard,
      expiryMonth,
      expiryYear,
      securityCode,
      holderSCpf,
      quantitPP,
      quantitP,
      quantitM,
      quantitG,
      quantitGG,
      
      quantitI,
      quantitII,
      quantitIII,
      quantitIIII,
      quantitV,
      quantitIV,
      quantitIIV,
      quantitIIIV,
      quantitIIIIV

    });

    return response.json(compra);
  }
}