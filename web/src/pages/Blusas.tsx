import { useEffect, useState } from "react";
import { Produto } from "../components/Produto";

interface Bloses {
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

export function Blusas(){

  const [ items, setItems ] = useState<Bloses[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/bloses/find/')
    .then(response => response.json())
    .then(response => {
      setItems(response)
    })
  }, []) 

  return(
    <main className="main">
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