import X from "../assets/letra-x.png"
import { Link } from 'react-router-dom';

interface ITemplate {
  display: string,
  name: string,
  image: string,
  description: string
  setVisible: any;
}

export function Template(props: ITemplate){

  function close() {
    if(props.display === "none"){
      props.setVisible("flex")
    } else if(props.display === "flex") {
      props.setVisible("none")
    } else {
      console.log("[[ERROR]]")
    }
  }

  return(

    <div
      className="flex z-50 justify-center items-center fixed h-[100vh] w-[100%] bg-transparentBlack"
      style={{left: "0", top: '0', display: props.display}}>

      <figure
        className="absolute p-5 cursor-pointer"
        style={{top: "0", right: "0"}}
        onClick={close}>
        <img src={X} />
      </figure>
        
      <main className="w-[80%] flex fixed items-center p-10 flex-col rounded-xl h-[90vh] bg-white">
        <img src={props.image} className="h-auto rounded-xl w-[200px]"/>
        <span className="text-3xl p-3">{props.name}</span>
        <p className="h-full text-center">{props.description}</p>
        <Link
          to={"/Compra"}
          className="
          border-violet-600 border-2 bg-clip-text text-lg font-bold text-transparent
          bg-gradient-to-r from-violet-600 to-pink-500 px-10 py-2 rounded-full">
          COMPRAR
        </Link>

        <footer
          className="flex gap-5">
          <button>PP</button>
          <button>P</button>
          <button>M</button>
          <button>G</button>
          <button>GG</button>
        </footer>

      </main>

    </div>

  )
}
