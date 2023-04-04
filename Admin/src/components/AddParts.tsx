import X from "../assets/letra-x.png"
import { Link } from 'react-router-dom';

interface IAddParts {
  display: string,
  name: string,
  image: string,
  description: string
  setDisplay: any;
}

export function AddParts(props: IAddParts){

  function close() {
    if(props.display === "none"){
      props.setDisplay("flex")
    } else if(props.display === "flex") {
      props.setDisplay("none")
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
        <h1></h1>
        <form>
          <strong>
            imagens
          </strong>

        </form>

      </main>

    </div>

  )
}
