import { Request, Response } from 'express';
import { MakepurchaseUseCase } from './MakepurchaseUseCase';

export class MakepurchaseController {
  async handle(request: Request, response: Response) {
    const makepurchaseUseCase = new MakepurchaseUseCase();

    const { id } = request.params;
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

    const updateShirt = new MakepurchaseUseCase();

    const compra = await updateShirt.execute({
      
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