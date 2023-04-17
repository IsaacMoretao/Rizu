import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sorriso from '../assets/icon-sorriso.png'

interface Acessories {
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

export function Compra(){

  const [quantityPP, setQuantityPP] = useState<number | undefined>();
  const [quantityP, setQuantityP] = useState<number | undefined>();
  const [quantityM, setQuantityM] = useState<number | undefined>();
  const [quantityG, setQuantityG] = useState<number | undefined>();
  const [quantityGG, setQuantityGG] = useState<number | undefined>();

  const [gmail, setGmail] = useState("");
  const [endereço, setEndereço] = useState("");
  const [numero, setNumero] = useState<number | undefined>();
  const [complemento, setComplemento] = useState("");

  const [numeroDoCartao, setNumeroDoCartao] = useState<number | undefined>();
  const [nomeNoCartao, setNomeNoCartao] = useState("");
  const [mes, setMes] = useState<number | undefined>();
  const [ano, setAno] = useState<number | undefined>();
  const [codigoSegurança, setCodigoSegurança] = useState<number | undefined>();
  const [cpf, setCpf] = useState<number | undefined>();

  let { id } = useParams();
  

  const [ items, setItems ] = useState<Acessories>();
  const idURL = (items?.id) == id

  useEffect(() => {
    fetch(`http://localhost:3333/allParts/${id}`)
    .then(response => response.json())
    .then((data) => setItems(data.FindAll));
}, []);

  return(  

    <main className="bricks main center">

      {idURL? 
      
      <form className="bg-vinho min-h-[80vh] w-auto p-10 border-yellow border-2 gap-5 m-[100px] text-yellow center flex-col rounded-xl">
      <strong>COMPRA</strong>
      <div className="flex gap-3">

        {items?.quantityPP?
          <input
            type="number"
            className="p-2 border-b-2 border-yellow text-center bg-transparent w-[50px]"
            value={quantityPP}
            max={items?.quantityPP}
            min="0"
            onChange={event => setQuantityPP(event.target.valueAsNumber)}
            placeholder="PP:"
          />
          :
          <div/>
        }

        {items?.quantityP?
          <input
            type="number"
            className="p-2 border-b-2 border-yellow text-center bg-transparent w-[50px]"
            value={quantityP}
            max={items?.quantityP}
            min="0"
            onChange={event => setQuantityP(event.target.valueAsNumber)}
            placeholder="P:"
          />
          :
          <div/>
        }

        {items?.quantityM?
          <input
            type="number"
            className="p-2 border-b-2 border-yellow text-center bg-transparent w-[50px]"
            value={quantityM}
            max={items?.quantityM}
            min="0"
            onChange={event => setQuantityM(event.target.valueAsNumber)}
            placeholder="M:"
          />
          :
          <div/>
        }

        {items?.quantityG?
          <input
            type="number"
            className="p-2 border-b-2 border-yellow text-center bg-transparent w-[50px]"
            value={quantityG}
            max={items?.quantityG}
            min="0"
            onChange={event => setQuantityG(event.target.valueAsNumber)}
            placeholder="G:"
          />
          :
          <div/>
        }

        {items?.quantityGG?
          <input
            type="number"
            className="p-2 border-b-2 border-yellow text-center bg-transparent w-[50px]"
            value={quantityGG}
            max={items?.quantityGG}
            min="0"
            onChange={event => setQuantityGG(event.target.valueAsNumber)}
            placeholder="GG:"
          />
          :
          <div/>
        }


      </div>
        <input
          className='w-[300px] p-2 border-b-2 border-yellow bg-transparent'
          onChange={event => setGmail(event.target.value)}
          value={gmail}
          placeholder='G-mail:'
          type="email"
        />
        <div className='flex gap-3'>
          <input
            className='w-[196px] p-2 border-b-2 border-yellow bg-transparent'
            placeholder='Endereço:'
            value={endereço}
            onChange={event => setEndereço(event.target.value)}
            type="text"
          />

          <input
            type="number"
            className="p-2 border-b-2 border-yellow bg-transparent w-[96px]"
            min="0"
            value={numero}
            onChange={event => setNumero(event.target.valueAsNumber)}
            placeholder="Numero:"
          />
        </div>

        <input
          type="text"
          className="p-2 border-b-2 border-yellow bg-transparent w-[300px]"
          value={complemento}
          onChange={event => setComplemento(event.target.value)}
          placeholder="Complemento:"
        />

        <strong>DADOS DO CARTÂO</strong>
        <div className='flex gap-3'>

          <input
            className="p-2 border-b-2 border-yellow bg-transparent w-[250px]"
            type="number"
            value={numeroDoCartao}
            onChange={event => setNumeroDoCartao(event.target.valueAsNumber)}
            placeholder="numero do cartão:"
          />

          <input
            className="p-2 border-b-2 border-yellow bg-transparent w-[250px]"
            value={nomeNoCartao}
            onChange={event => setNomeNoCartao(event.target.value)}
            type="text"
            placeholder="Nome impresso no cartão:"
          />

        </div>


        <div className='flex gap-3 items-end'>
          <div>
            validade:
            <div className='flex gap-1'>
              <input
                type="number"
                className="p-2 border-b-2 border-yellow pt-0 text-center bg-transparent w-[50px]"
                onChange={event => setMes(event.target.valueAsNumber)}
                value={mes}
                min="0"
                placeholder="mês:"
              />
              <input
                type="number"
                className="p-2 border-b-2 border-yellow pt-0 text-center bg-transparent w-[50px]"
                value={ano}
                onChange={event => setAno(event.target.valueAsNumber)}
                min="0"
                placeholder="ano:"
              />
            </div>

          </div>
        <input
          type="number"
          className="p-2 border-b-2 border-yellow bg-transparent  w-[300px]"
          value={codigoSegurança}
          onChange={event => setCodigoSegurança(event.target.valueAsNumber)}
          min="0"
          placeholder="Código de segurança:"
        />
        </div>
          
        <input
          type="number"
          onChange={event => setCpf(event.target.valueAsNumber)}
          value={cpf}
          className="p-2 border-b-2 border-yellow bg-transparent w-[300px]"
          min="0"
          placeholder="CPF do titular"
        />

      <button
        className="
        border-cyan-400 border-2 bg-clip-text text-lg font-bold text-transparent
        bg-gradient-to-r from-blue-500 to-blue-400 px-10 py-2 rounded-full">
        COMPRAR
      </button>




      </form>
      
      :

      <div className="
        bg-vinho p-16 border-yellow border-2 text-xl
        text-yellow center flex-col rounded-xl">

        <img src={Sorriso} className='h-[200px]' />
        <p>Clecione o uma peça para poder realizar a compra</p>
        <Link
          to={"/"}
          className="border-2 mt-5 border-colorTxt text-colorTxt rounded-lg px-10 py-2">
          Entrar
        </Link>

      </div >

      }
      
    </main>
  )
}