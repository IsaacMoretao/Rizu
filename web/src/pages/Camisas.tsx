import axios from 'axios';
import { useEffect, useState } from 'react';
import { api } from '../lib/axios';
import { Produto } from './../components/Produto';

interface Shirt {
  id: string,
  code: string,
  title: string,
  description: string,
  pieceUrl: string,
  tipe: string,

  priceInCents: number,
  quantityPP?: number,
  quantityP?: number,
  quantityM?: number,
  quantityG?: number,
  quantityGG?: number

}

export function Camisas(){

  const [ items, setItems ] = useState<Shirt[]>([]);


  useEffect(() => {
    fetch('http://localhost:3333/Acessories/find')
    .then(response => response.json())
    .then(response => {
      setItems(response)
    })
  }, []) 


  console.log(items)

  return(
    <main>
      {items.map (item => {
        return (

          <div key={item.id}>
            <Produto Title={item.title} ProductUrl={item.pieceUrl} Description={item.description} Code={item.code}/>
          </div>

        )
      })}

    </main>
  )
}