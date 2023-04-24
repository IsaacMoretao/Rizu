import { useEffect, useState } from 'react';
import { Comprados } from './../components/Comprados';
import { PurchasedItem } from '../components/Templates/PurchasedItem';

interface IResponse {
  partId: string;
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

export function Compra(){
  const[items, setItems] = useState<IResponse[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/Allpurchase')
    .then(response => response.json())
    .then(response => {
      setItems(response)
    })

  }, []) 

  return(
    <>
      <div className="center page flex-col gap-5">
        {items.map (item => {
          return (
            <Comprados
              ProductUrl={"sdfsdf"}
              Code={'PINKB'}
              Endereço={item.address}
              EndereçoNum={item.number}
              name={item.nameOnCard}
              quantitGG={item.quantitGG}
              quantitP={item.quantitP}
              quantitPP={item.quantitPP}
              quantitG={item.quantitG}
              quantitM={item.quantitM}
              quantitI={item.quantitI}
              quantitII={item.quantitII}
              quantitIII={item.quantitIII}
              quantitIIII={item.quantitIIII}
              quantitV={item.quantitV}
              quantitIV={item.quantitIV}
              quantitIIV={item.quantitIIV}
              quantitIIIV={item.quantitIIIV}
              quantitIIIIV={item.quantitIIIIV}
            />
          )
        })}
      </div>
      <PurchasedItem id={''} state={''} setState={undefined}/>
    </>
  )
}