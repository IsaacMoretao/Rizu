import { FormEvent, useState } from "react";
import X from "../assets/letra-x.png"
import { Link } from 'react-router-dom';
import { api } from "../lib/axios";

interface IAddParts {
  display: string,
  setDisplay: any;
  route: string;
}

export function AddParts(props: IAddParts){

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pieceUrl, setPieceUrl] = useState("");
  const [tipe, setTipe] = useState("");
  const [priceInCents, setPriceInCents] = useState<number>();

  const [quantityPP, setQuantityPP] = useState<number>();
  const [quantityP, setQuantityP] = useState<number>();
  const [quantityM, setQuantityM] = useState<number>();
  const [quantityG, setQuantityG] = useState<number>();
  const [quantityGG, setQuantityGG] = useState<number>();

  var req = title && description && pieceUrl && tipe && priceInCents &&
  quantityPP && quantityP && quantityM && quantityG && quantityGG

  function close() {
    if(props.display === "none"){
      props.setDisplay("flex")
    } else if(props.display === "flex") {
      props.setDisplay("none")
    } else {
      console.log("[[ERROR]]")
    }
  }

  async function createNewPiece(event: FormEvent) {
    console.log("click")
    event.preventDefault()

    await api.post(props.route, {
      title,
      description,
      pieceUrl,
      tipe,
      priceInCents,

      quantityPP,
      quantityP,
      quantityM,
      quantityG,
      quantityGG,

    })
    .then(response => {
      window.location.reload();
      props.setDisplay("none")
    })
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
        <h1 className="text-xl font-bold p-2">
          Vamos criar uma nova peça...
        </h1>
        <p>
          Para criar uma peça, Preencha o formulário
        </p>

        <form
        className="flex-col my-3 gap-5 center"
        onSubmit={createNewPiece}>

          <input
            type="text"
            className="p-2 border-b-2 border-black w-[300px]"
            value={title}
            onChange={event => setTitle(event.target.value)}
            placeholder="Nome:"
          />

          <input
            type="text"
            className="p-2 border-b-2 border-black w-[300px]"
            value={description}
            onChange={event => setDescription(event.target.value)}
            placeholder="Descrição:"
          />

          <input
            type="text"
            className="p-2 border-b-2 border-black w-[300px]"
            value={pieceUrl}
            onChange={event => setPieceUrl(event.target.value)}
            placeholder="Url da roupa:"
          />
          <input
            type="text"
            className="p-2 border-b-2 border-black w-[300px]"
            value={tipe}
            onChange={event => setTipe(event.target.value)}
            placeholder="Tipo"
          />

          <input
            type="number"
            className="p-2 border-b-2 border-black w-[300px]"
            value={priceInCents}
            min="1"
            onChange={event => setPriceInCents(event.target.valueAsNumber)}
            placeholder="Preço:"
          />

          <div className="flex gap-3">
            <input
              type="number"
              className="p-2 border-b-2 border-black w-[50px]"
              value={quantityPP}
              min="0"
              onChange={event => setQuantityPP(event.target.valueAsNumber)}
              placeholder="PP:"
            />

            <input
              type="number"
              className="p-2 border-b-2 border-black w-[50px]"
              value={quantityP}
              min="0"
              onChange={event => setQuantityP(event.target.valueAsNumber)}
              placeholder="P:"
            />

            <input
              type="number"
              className="p-2 border-b-2 border-black w-[50px]"
              value={quantityM}
              min="0"
              onChange={event => setQuantityM(event.target.valueAsNumber)}
              placeholder="M:"
            />

            <input
              type="number"
              className="p-2 border-b-2 border-black w-[50px]"
              value={quantityG}
              min="0"
              onChange={event => setQuantityG(event.target.valueAsNumber)}
              placeholder="G:"
            />

            <input
              type="number"
              className="p-2 border-b-2 border-black w-[50px]"
              min="0"
              value={quantityGG}
              onChange={event => setQuantityGG(event.target.valueAsNumber)}
              placeholder="GG:"
            />
          </div>
          {req ? 
            <button
              type="submit"
              className="p-5 w-[160px] rounded-lg bg-purple-600 text-white">
              Criar Usuário
            </button>
          :
            <button
              className="p-5 w-[160px] w- rounded-lg bg-purple-600 opacity-30 text-white">
              Criar Usuário
            </button>
          }
        </form>

      </main>

    </div>

  )
}
