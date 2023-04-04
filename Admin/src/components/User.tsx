import img from "../assets/image.png";
import lixo from "../assets/lixo.png";
import edit from "../assets/editar.png";
import { TemplateConsentimento } from './TemplateConsentimento';
import { useState } from "react";

interface infoI {
  id: string,
  name: string,
  avatar: string | undefined,

}
export function User(props: infoI) {

  const [state, setState] = useState("none");

  function Delete(){
    if(state == "none"){
      setState("flex")
    } else if (state == "flex"){
      setState("none")
    } else {
      console.log("[[ERROR]] Internal Server Error [[ERROR]]")
    }
  }

  return(
    <>
      <article
        key={props.id}
        className='flex h-48 z-10 bg-white border border-black mt-11 w-[80%]
        rounded-xl items-center justify-between text-4xl font-bold'>
        {props.avatar ? 
          <img
            src={props.avatar}
            alt={props.name}
            className="h-[170px]"
          />
         : 
          <img
            src={img}
            alt={props.name}
            className="h-[200px]"
          />
        }
     

        <strong>
          {props.name}
        </strong>

        <div className="h-full flex flex-col items-center w-[200px] justify-around">
          <img
            src={lixo}
            alt="icone-lixo  (Excluir)"
            className="cursor-pointer"
            onClick={Delete}
            />
          <img src={edit} alt="icone-lapis (Editar)" />
        </div>

      </article>
      <TemplateConsentimento
        state={state}
        setState={setState}
        Usuario={props.name}
        id={props.id}
      />
    </>
  )
}