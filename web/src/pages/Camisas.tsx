import axios from 'axios';
import { useEffect, useState } from 'react';
import { api } from '../lib/axios';
import { Produto } from './../components/Produto';
import Sorriso from '../assets/icon-sorriso.png'

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
  const [ notItem, setNotItem] = useState('');



  useEffect(() => {
    fetch('http://localhost:3333/shirt/find/')
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
    <main className='flex flex-col justify-center items-center main'>
      <span style={{ display: notItem}} className='flex flex-col justify-center items-center'>
        <img src={Sorriso} alt="" />
        Não há nenhum item em estoque.
      </span>
      {items.map (item => {
        return (
          <div key={item.id}>
            <div className='w-full'>
              <Produto Title={item.title} ProductUrl={item.pieceUrl} Description={item.description} Code={item.code}/>
            </div>
            <span className='flex fixed w-full h-[100vh] bg-black  mt-[-130px]'>
              <h1>Hello Word</h1>
            </span>
          </div>
        )
      })}

    </main>
  )
}