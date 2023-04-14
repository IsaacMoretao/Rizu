import axios from 'axios';
import { useEffect, useState } from 'react';
import { Produto } from './../components/Produto';
import Sorriso from '../assets/icon-sorriso.png'

interface Pants {
  id: string,
  code: string,
  title: string,
  description: string,
  priceInCents: number,
  pieceUrl: string,
  tipe: string,

  quantityI: number,
  quantityII: number,
  quantityIII: number,
  quantityIIII: number,
  quantityV: number,
  quantityIV: number,
  quantityIIV: number,
  quantityIIIV: number,
  quantityIIIIV: number,

}

export function Calças(){

  const [ items, setItems ] = useState<Pants[]>([]);
  const [ notItem, setNotItem] = useState('');

  useEffect(() => {
    fetch('http://localhost:3333/pants/find/')
    .then(response => response.json())
    .then(response => {
      setItems(response)
    })
    if(!items){
      setNotItem('flex');
    } else {
      setNotItem('none');
    }
  }, []) 

  return(
    <main className='flex flex-col justify-center items-center main background'>
      <span style={{ display: notItem}} className='flex flex-col justify-center items-center'>
        <img src={Sorriso} alt="" />
        Não há nenhum item em estoque.
      </span>
      {items.map (item => {
        return (
          <div key={item.id} className='w-full'>
            <div>
              <Produto
                Title={item.title}
                ProductUrl={item.pieceUrl}
                Description={item.description}
                Code={item.code}
                price={item.priceInCents}
                id={item.id}
              />
            </div>
          </div>
        )
      })}

    </main>
  )
}