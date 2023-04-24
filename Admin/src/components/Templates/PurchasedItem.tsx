import { useEffect, useState } from "react";
import X from "../../assets/letra-x.png"

interface IPurchasedItem {
  id: string;
  state: string;
  setState: any;

  quantityPP?: number,
  quantityP?: number,
  quantityM?: number,
  quantityG?: number,
  quantityGG?: number,

  quantityI?: number,
  quantityII?: number,
  quantityIII?: number,
  quantityIIII?: number,
  quantityV?: number,
  quantityIV?: number,
  quantityIIV?: number,
  quantityIIIV?: number,
  quantityIIIIV?: number

}

interface Iitem {
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
  quantityGG?: number,

  quantityI?: number,
  quantityII?: number,
  quantityIII?: number,
  quantityIIII?: number,
  quantityV?: number,
  quantityIV?: number,
  quantityIIV?: number,
  quantityIIIV?: number,
  quantityIIIIV?: number

}

export function PurchasedItem(props: IPurchasedItem){

  const [item, setItem] = useState<Iitem>()

  useEffect(() => {
    fetch(`http://localhost:3333/allParts/${props.id}`)
    .then(response => response.json())
    .then(response => {
      setItem(response)
    })

  }, []) 

  function close() {
    if(props.state === "none"){
      props.setState("flex");
    } else if(props.state === "flex") {
      props.setState("none");
    } else {
      console.log("[[ERROR]]")
    }
  }

  const Tamanhos = [
    props.quantityPP?
    props.quantityP
    props.quantityM,
    props.quantityG,
    props.quantityGG,
    props.quantityI,
    props.quantityII,
    props.quantityIII,
    props.quantityIIII,
    props.quantityV,
    props.quantityIV,
    props.quantityIIV,
    props.quantityIIIV,
    props.quantityIIIIV,
  ]

  return(
    <body
    className="h-[100vh] w-[100%] bg-transparentBlack fixed z-50 center"
    style={{top: "0", right: "0", display: props.state}}>

    <figure
      className="absolute p-5 cursor-pointer"
      style={{top: "0", right: "0"}}
      onClick={close}>
      <img src={X} />
    </figure>

    <main
      className="p-10 rounded-xl flex-col w-[80%] h-[90%] gap-5 bg-white center">

      <figure>
        <img src={item?.pieceUrl} />
      </figure>
      <h1>{item?.description}</h1>

      <article>

        <section>
        {Tamanhos.map (Tamanho => {
          return (
            <p className="p-5 bg-white border-2 border-gray-500">
              {Tamanho}
            </p>
          )
        })}
          
        </section>
        
        
        
      </article>


    </main>
      
    </body>
  )
}