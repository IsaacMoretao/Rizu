import { prisma } from '../../../../../database/prismaClient';

interface IRequest {
  id: string;
  quantityPP?: number;
  quantityP?: number;
  quantityM?: number;
  quantityG?: number;
  quantityGG?: number;

  quantityI?: number;
  quantityII?: number;
  quantityIII?: number;
  quantityIIII?: number;
  quantityV?: number;
  quantityIV?: number;
  quantityIIV?: number;
  quantityIIIV?: number;
  quantityIIIIV?: number;

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

interface IRequestII {
  id: string;
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
}

export class MakepurchaseUseCase {
  async execute({
    id,
    quantityPP,
    quantityP,
    quantityM,
    quantityG,
    quantityGG,

    quantityI,
    quantityII,
    quantityIII,
    quantityIIII,
    quantityV,
    quantityIV,
    quantityIIV,
    quantityIIIV,
    quantityIIIIV,

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

  }: IRequest,
  {
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
  quantitIIIIV}:IRequestII) {

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