import { Template } from "./Template"
import { useState } from "react";
import "../Styles/Responsividade.css"

interface IProduto {
  Title: string,
  ProductUrl: string,
  Description: string,
  Code: string,
  price: number,
}

export function Produto(props: IProduto) {

  const [visible, setVisible] = useState("none");

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

          <div className="flex flex-col">

            <header className='p-3 center'>
              <strong>{props.Title}</strong>
            </header>

            <p className='mr-[30px] w-full h-[150px] flex items-center p'>
              {props.Description}
            </p>

            <footer className="flex text-center">
              <p className="flex ml-auto p-5 font-bold text-lg mr-auto ">{props.price/100} R$</p>
            </footer>

          </div>
        </section>
      </article>

      <Template
        display={visible}
        name={props.Title}
        image={props.ProductUrl}
        description={props.Description}
        setVisible={setVisible}
      />

    </>
  )
}