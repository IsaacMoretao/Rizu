import { useEffect, useState } from "react";
import { Produto } from "../components/Produto";
import Sorriso from '../assets/icon-sorriso.png'


interface Dresses {
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

export function Vestidos(){

  const [ items, setItems ] = useState<Dresses[]>([]);
  const [ notItem, setNotItem] = useState('');

  useEffect(() => {
    fetch('http://localhost:3333/dresses/find')
    .then(response => response.json())
    .then(response => {
      setItems(response)
    })

  }, []) 

  return(
    <main className='flex flex-col justify-center items-center main background'>
      {items.length == 0 ?

        <span style={{ display: notItem}} className='flex flex-col justify-center items-center'>
          <img src={Sorriso} alt="" />
          Não há nenhum item em estoque.
        </span>

      :

      <>
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
      </>

      }



    </main>
  )
}