import { useEffect, useState } from 'react';
import { Comprados } from './../components/Comprados';

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
    fetch('http://localhost:3333/bloses/find/')
    .then(response => response.json())
    .then(response => {
      setItems(response)
    })

  }, []) 

  return(
    <div className="center page">
      <Comprados
        ProductUrl={"https://cdn-icons-png.flaticon.com/512/2984/2984864.png"}
        Code={'PINKB'}
        Endereço={'AV.antonio'}
        EndereçoNum={200}
        name={'Isaac Moleton'}
        quantitGG={3}
        quantitP={3}
        quantitPP={3}
        quantitG={3}
        quantitM={3}/>
    </div>
  )
}