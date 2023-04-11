import { FormEvent, useState } from "react";
import X from "../../assets/letra-x.png"
import { api } from "../../lib/axios";

interface IUpdatePart {
  title: string;
  description: string;
  pieceUrl: string;
  tipe: string;
  priceInCents: number;

  quantityPP?: number;
  quantityP?: number;
  quantityM?: number;
  quantityG?: number;
  quantityGG?: number;

  display: string;
  setDisplay: any;
  route: string;
}

export function EditOutfit(props: IUpdatePart, event: FormEvent){

  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [pieceUrl, setPieceUrl] = useState(props.pieceUrl);
  const [tipe, setTipe] = useState(props.tipe);
  const [priceInCents, setPriceInCents] = useState<number>(props.priceInCents);

  const [quantityPP, setQuantityPP] = useState<number | undefined>(props.quantityPP);
  const [quantityP, setQuantityP] = useState<number | undefined>(props.quantityP);
  const [quantityM, setQuantityM] = useState<number | undefined>(props.quantityM);
  const [quantityG, setQuantityG] = useState<number | undefined>(props.quantityG);
  const [quantityGG, setQuantityGG] = useState<number | undefined>(props.quantityGG);

  function Delete(){
    if(props.display == "none"){
      props.setDisplay("flex")
    } else if (props.display == "flex"){
      props.setDisplay("none")
    } else {
      console.log('[[ERROR]] Internal Server Error [[ERROR]]')
    }
  }

  async function UpdatePiece() {
    await api.put(`${props.route}`, {
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
      alert(response.data);

    })
    .catch(Response.error)
      
    alert('Funcionou!!!')
  }

  var req = title && description && pieceUrl && tipe && priceInCents
  
  

  return(
    <div
    className="flex z-50 justify-center items-center fixed h-[100vh] w-[100%] bg-transparentBlack"
    style={{left: "0", top: '0', display: props.display}}>

    <figure
      className="absolute p-5 cursor-pointer"
      style={{top: "0", right: "0"}}
      onClick={Delete}>
      <img src={X} />
    </figure>
      
    <main className="w-[80%] flex fixed items-center p-10 flex-col rounded-xl h-[90vh] bg-white">
      <h1 className="text-xl font-bold p-2">
        Editando Uma Peça...
      </h1>
      <p>
        Para editar uma peça, não deixe nenhuma linha vazia.
      </p>

      <form
      className="flex-col my-3 gap-5 center"
      onSubmit={UpdatePiece}>

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
            Editar peça
          </button>
        :
          <button
            className="p-5 w-[160px] w- rounded-lg bg-purple-600 opacity-30 text-white">
            Editar peça
          </button>
        }
      </form>

    </main>

  </div>
  )
}