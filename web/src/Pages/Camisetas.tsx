import { useEffect, useState } from "react";
import { Produto } from "../components/Produto";
import Sorriso from '../assets/icon-sorriso.png'

interface Tshirt {
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

export function Camisetas(){

  const [ items, setItems ] = useState<Tshirt[]>([]);
  const [ notItem, setNotItem] = useState("");
  

  useEffect(() => {
    fetch('http://localhost:3333/tshirt/find/')
    .then(response => response.json())
    .then(response => {
      setItems(response)
    })
    if(!items ) {
      setNotItem('flex');
    } else {
      setNotItem('none');
    }
  }, []) 

  return(
    <main className="main">
      <span style={{ display: notItem}} className='flex flex-col justify-center items-center'>
        <img src={Sorriso} alt="" />
        Não há nenhum item em estoque.
      </span>
      {items.map (item => {
        return (

          <div key={item.id}>
            <Produto
              Title={item.title}
              ProductUrl={item.pieceUrl}
              Description={item.description}
              Code={item.code}
              price={item.priceInCents}
            />
          </div>

        )
      })}

    </main>
  )
}