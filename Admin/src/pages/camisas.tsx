import { useEffect, useState } from "react";
import plus from "../assets/mais.png";
import { Produto } from "../components/Produto";
import { AddParts } from "../components/Templates/AddParts";

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
  const [ display, setDisplay ] = useState("none")

  useEffect(() => {
    fetch('http://localhost:3333/shirt/find/')
    .then(response => response.json())
    .then(response => {
      setItems(response)
    })

  }, []) 

  function newParts() {
    
    if(display === "none"){
      setDisplay("flex")
    } else if(display === "flex") {
      setDisplay("none")
    } else {
      console.log("[[ERROR]]")
    }
    
  }

  return(
    <>
      <article className="center flex-col py-[100px] page">
        <section
          className="w-[80%] border border-black cursor-pointer h-48 rounded-xl center"
          onClick={newParts}>

          <img
            src={plus}
            alt="Adicionar"
          />
        </section>
        {items.map (item => {
          return (
            <section key={item.id} className='w-full'>
              <div>
                <Produto
                  Title={item.title}
                  ProductUrl={item.pieceUrl}
                  Description={item.description}
                  Code={item.code}
                  price={item.priceInCents}
                  Route={`Shirt/${item.id}`}
                  tipe={item.tipe}
                  edit={`Update/Shirt/${item.id}`}
                  quantityPP={item.quantityPP}
                  quantityP={item.quantityP}
                  quantityM={item.quantityM}
                  quantityG={item.quantityP}
                  quantityGG={item.quantityGG}
                />
              </div>
            </section>
          )
        })}
      </article>
      <AddParts
        display={display}
        setDisplay={setDisplay}
        route={"/shirt"}
      />
      
    </>
  )
}