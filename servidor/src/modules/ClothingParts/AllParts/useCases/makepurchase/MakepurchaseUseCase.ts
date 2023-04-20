import { prisma } from '../../../../../database/prismaClient';

interface IRequest {
  quantitPP?: number;
  quantitP?: number;
  quantitM?: number;
  quantitG?: number;
  quantitGG?: number;

  quantitI?: number;
  quantitII?: number;
  quantitIII?: number;
  quantitIIII?: number;
  quantitV?: number;
  quantitIV?: number;
  quantitIIV?: number;
  quantitIIIV?: number;
  quantitIIIIV?: number;

  gmail: string;
  address: string;
  number: string;
  complement?: string;
  cardNumber: string;
  nameOnCard: string;
  expiryMonth: number;
  expiryYear: number;
  securityCode: number;
  holderSCpf: number;

}

export class MakepurchaseUseCase {
  async execute({
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
    quantitIIIIV,

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

  }: IRequest) {

    const criar = await prisma.finalPurchase.create({
      data: {
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
      },
    });

    return criar;
  }
}