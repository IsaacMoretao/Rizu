import { Template } from "./Template"
import { useState } from 'react';
import { useAuth } from "../hooks/useGlobals";

interface IProduto {
  Title: string,
  ProductUrl: string,
  Description: string,
  Code: string
}

export function Produto(props: IProduto) {

  const { visible, setVisible } = useAuth();

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
        className='flex mr-auto mt-11 w-[60%] mb-11 ml-auto'>

        <section className='border w-[100%] border-black rounded-md p-5'>
          <header className='p-3 flex items-center justify-center'>
            <strong>{props.Title}</strong>
          </header>
          <main className="flex gap-5">
            <figure>
              <img src={props.ProductUrl} alt="" className='h-[150px] w-[150px] mr-[30px]' />
              {props.Code}
            </figure>
            
            <p className='mr-[30px] w-full h-[150px] flex items-center'>
              {props.Description}
            </p>
          </main>
          <footer className="flex text-center">
            <p className="flex ml-auto font-bold text-lg text-blue-600 mr-auto ">13,50</p>
          </footer>
        </section>

      </article>
      <Template
        display={visible}
        name={props.Title}
        image={props.ProductUrl}
        description={props.Description} />
    </>
  )
}