import { PieceOfClothing } from "./Templates/PieceOfClothing";
import { useState } from "react";
import "../Styles/Responsividade.css";
import lixo from "../assets/lixo.png"
import lapis from "../assets/editar.png"
import { DeleteClothes } from "./Templates/DeleteClothes";
import { EditOutfit } from "./Templates/EditOutfit";

interface IProduto {
  Title: string,
  ProductUrl: string,
  Description: string,
  Code: string,
  price: number,
  Route: string,
  tipe: string,
  edit: string,
  
  quantityPP?: number;
  quantityP?: number;
  quantityM?: number;
  quantityG?: number;
  quantityGG?: number;
}

export function Produto(props: IProduto) {

  const [visible, setVisible] = useState("none");
  const [state, setState] = useState("none")
  const [edit, setEdit] = useState("none")

  function State() {
    if(state === "none"){
      setState("flex")
    } else if(state === "flex") {
      setState("none")
    } else {
      console.log("[[ERROR]]")
    }
  }

  function Edit() {
    if(edit === "none"){
      setEdit("flex")
    } else if(edit === "flex") {
      setEdit("none")
    } else {
      console.log("[[ERROR]]")
    }
  }

  function DisplayofTemplate() {
    if(visible === "none"){
      setVisible("flex")
    } else if(visible === "flex") {
      setVisible("none")
    } else {
      console.log("[[ERROR]]")
    }
  }

  return(
    <>
      <article
        onClick={DisplayofTemplate}
        className='flex h-auto z-20 mr-auto bg-white
        cursor-pointer mt-11 w-[80%] mb-11 ml-auto Produto'>

        <section className='border flex gap-7 w-[100%] border-black rounded-md p-5'>

          <div
            className="flex items-center flex-col h-full relative">

            <figure className="flex relative h-full w-[200px]">
              <img
                src={props.ProductUrl}
                className='absolute z-10 h-full w-auto rounded-lg'
                style={{top: "0"}}
              />
            </figure>

            <p className="z-20 text-purple-700 font-bold">
              {props.Code}
            </p>

          </div>  

          <div className="flex w-full flex-col">

            <header className='p-3 center'>
              <strong>
                {props.Title}
              </strong>
            </header>

            <main className='mr-[30px] w-full h-[150px] flex justify-between items-center pr-3'>
              {props.Description}
              <div className="flex h-full flex-col relative min-w-[30px] justify-around">
                <img src={lixo} className="w-[30px] absolute z-20" style={{top: "0"}} onClick={State}/>
                <img src={lapis} className="w-[30px] absolute" style={{bottom: "0"}} onClick={Edit}  />
              </div>
            </main>

            <footer className="flex text-center">
              <p className="flex ml-auto p-5 font-bold text-lg mr-auto ">{props.price/100} R$</p>
            </footer>

          </div>
        </section>
      </article>

      <PieceOfClothing
        display={visible}
        name={props.Title}
        image={props.ProductUrl}
        description={props.Description}
        setVisible={setVisible}
      />

      <DeleteClothes
        state={state}
        setState={setState} 
        Usuario={props.Title} 
        route={props.Route}
      />

      <EditOutfit
        title={props.Title}
        description={props.Description} 
        pieceUrl={props.ProductUrl}
        tipe={props.tipe}
        priceInCents={props.price}
        quantityPP={props.quantityPP}
        quantityP={props.quantityP}
        quantityM={props.quantityM}
        quantityG={props.quantityG}
        quantityGG={props.quantityGG}
        display={edit}
        setDisplay={setEdit}
        route={props.edit}
      />

    </>
  )
}