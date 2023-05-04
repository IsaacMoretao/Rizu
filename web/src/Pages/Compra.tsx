import { FormEvent, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sorriso from '../assets/icon-sorriso.png'
import { api } from '../lib/axios';
import { ConfirmaçãoDoPagamento } from '../components/ConfirmaçãoDoPagamento';
import { useNavigate } from "react-router-dom";


interface Acessories {
  id: string;
  code: string;
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

  quantityI?: number;
  quantityII?: number;
  quantityIII?: number;
  quantityIIII?: number;
  quantityV?: number;
  quantityIV?: number;
  quantityIIV?: number;
  quantityIIIV?: number;
  quantityIIIIV?: number;

  purchasePP?: number;
  purchaseP?: number;
  purchaseM?: number;
  purchaseG?: number;
  purchaseGG?: number;

  purchaseI?: number;
  purchaseII?: number;
  purchaseIII?: number;
  purchaseIIII?: number;
  purchaseV?: number;
  purchaseIV?: number;
  purchaseIIV?: number;
  purchaseIIIV?: number;
  purchaseIIIIV?: number;

}



export function Compra(){

  const[state, setState] = useState("none");

  const [purchasePP, setPurchasePP] = useState<number | undefined>();
  const [purchaseP, setPurchaseP] = useState<number | undefined>();
  const [purchaseM, setPurchaseM] = useState<number | undefined>();
  const [purchaseG, setPurchaseG] = useState<number | undefined>();
  const [purchaseGG, setPurchaseGG] = useState<number | undefined>();

  const [purchaseI, setPurchaseI] = useState<number | undefined>();
  const [purchaseII, setPurchaseII] = useState<number | undefined>();
  const [purchaseIII, setPurchaseIII] = useState<number | undefined>();
  const [purchaseIIII, setPurchaseIIII] = useState<number | undefined>();

  const [purchaseV, setPurchaseV] = useState<number | undefined>();
  const [purchaseIV, setPurchaseIV] = useState<number | undefined>();
  const [purchaseIIV, setPurchaseIIV] = useState<number | undefined>();
  const [purchaseIIIV, setPurchaseIIIV] = useState<number | undefined>();
  const [purchaseIIIIV, setPurchaseIIIIV] = useState<number | undefined>();

  const [gmail, setGmail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expiryMonth, setExpiryMonth] = useState<number | undefined>();
  const [expiryYear, setExpiryYear] = useState<number | undefined>();
  const [securityCode, setSecurityCode] = useState<number | undefined>();
  const [holderSCpf, setHolderSCpf] = useState<number | undefined>();

  let { id } = useParams();
  let partId = id
  
  const [ items, setItems ] = useState<Acessories>();
  const idURL = (items?.id) == partId

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3333/allParts/${partId}`)
    .then(response => response.json())
    .then((data) => setItems(data.FindAll));
  }, []);
  console.log(items?.quantityPP)

  async function RealizarCompra(event: FormEvent) {
    event.preventDefault()

    await api.post(`/makepurchase/${partId}`, {
      partId,
      quantityPP: purchasePP,
      quantityP: purchaseP,
      quantityM: purchaseM,
      quantityG: purchaseG,
      quantityGG: purchaseGG,

      quantityI: purchaseI,
      quantityII: purchaseII,
      quantityIII: purchaseIII,
      quantityIIII: purchaseIIII,

      quantityV: purchaseV,
      quantityIV: purchaseIV,
      quantityIIV: purchaseIIV,
      quantityIIIV: purchaseIIIV,
      quantityIIIIV: purchaseIIIIV,

      gmail,
      address,
      number,
      complement,
      cardNumber,
      nameOnCard,
      expiryMonth,
      expiryYear,
      securityCode,
      holderSCpf,

    })
    .then(response => {
      navigate("/")

    });

      await api.put(`/item/${partId}`, {
  
        quantityPP: items?.quantityPP? - purchasePP? ,

        quantityP,
        quantityM,
        quantityG,
        quantityGG,

        quantityI,
        quantityII,
        quantityIII,
        quantityIIII,
  
        quantityV,
        quantityIV,
        quantityIIV,
        quantityIIIV,
        quantityIIIIV,

      })
      .then(response => {
        alert(response.data);
  
      })
      .catch(Response.error)
        
      alert('Funcionou!!!')

  }

  const UmItem = purchasePP || purchaseP || purchaseM || purchaseG || purchaseGG ||
  purchaseI || purchaseII || purchaseIII || purchaseIIII || purchaseV || purchaseIV ||
  purchaseIIV || purchaseIIIV || purchaseIIIIV 

  const FormValid = gmail && address && number && cardNumber && expiryMonth && expiryYear && securityCode && holderSCpf && UmItem

  function stateTemplate(){

    if(state == "none"){
      setState("flex")
    } else if (state == "flex"){
      setState("none")
    } else {
      console.log('[[ERROR]] Internal Server Error [[ERROR]]')
    }

  }

  return(  
    <>
      <main className="bricks main center">

      {idURL? 
      
      <form
      
        className="bg-vinho min-h-[80vh] w-auto p-10 border-yellow border-2
        gap-5 m-[100px] text-yellow center flex-col rounded-xl center">
      <strong>COMPRA</strong>
      <div className="flex gap-3">

        {items?.quantityPP?
          <input
            type="number"
            className="p-2 border-b-2 border-yellow text-center bg-transparent w-[50px]"
            value={purchasePP}
            max={items?.purchasePP}
            min="0"
            onChange={event => setPurchasePP(event.target.valueAsNumber)}
            placeholder="PP:"
          />
          :
          <></>
        }

        {items?.purchaseP?
          <input
            type="number"
            className="p-2 border-b-2 border-yellow text-center bg-transparent w-[50px]"
            value={purchaseP}
            max={items?.purchaseP}
            min="0"
            onChange={event => setPurchaseP(event.target.valueAsNumber)}
            placeholder="P:"
          />
          :
          <></>
        }

        {items?.purchaseM?
          <input
            type="number"
            className="p-2 border-b-2 border-yellow text-center bg-transparent w-[50px]"
            value={purchaseM}
            max={items?.purchaseM}
            min="0"
            onChange={event => setPurchaseM(event.target.valueAsNumber)}
            placeholder="M:"
          />
          :
          <></>
        }

        {items?.purchaseG?
          <input
            type="number"
            className="p-2 border-b-2 border-yellow text-center bg-transparent w-[50px]"
            value={purchaseG}
            max={items?.purchaseG}
            min="0"
            onChange={event => setPurchaseG(event.target.valueAsNumber)}
            placeholder="G:"
          />
          :
          <></>
        }

        {items?.purchaseGG?
          <input
            type="number"
            className="p-2 border-b-2 border-yellow text-center bg-transparent w-[50px]"
            value={purchaseGG}
            max={items?.purchaseGG}
            min="0"
            onChange={event => setPurchaseGG(event.target.valueAsNumber)}
            placeholder="GG:"
          />
          :
          <></>
        }

        {items?.purchaseI?
          <input
            type="number"
            className="p-2 border-b-2 border-yellow text-center bg-transparent w-[50px]"
            value={purchaseI}
            max={items?.purchaseI}
            min="0"
            onChange={event => setPurchaseI(event.target.valueAsNumber)}
            placeholder="38:"
          />
          :
          <></>
        }

        {items?.purchaseII?
          <input
            type="number"
            className="p-2 border-b-2 border-yellow text-center bg-transparent w-[50px]"
            value={purchaseII}
            max={items?.purchaseII}
            min="0"
            onChange={event => setPurchaseII(event.target.valueAsNumber)}
            placeholder="40:"
          />
          :
          <></>
        }

        {items?.purchaseIII?
          <input
            type="number"
            className="p-2 border-b-2 border-yellow text-center bg-transparent w-[50px]"
            value={purchaseIII}
            max={items?.purchaseIII}
            min="0"
            onChange={event => setPurchaseIII(event.target.valueAsNumber)}
            placeholder="42:"
          />
          :
          <></>
        }

        
        {items?.purchaseIIII?
          <input
            type="number"
            className="p-2 border-b-2 border-yellow text-center bg-transparent w-[50px]"
            value={purchaseIIII}
            max={items?.purchaseIIII}
            min="0"
            onChange={event => setPurchaseIIII(event.target.valueAsNumber)}
            placeholder="44:"
          />
          :
          <></>
        }

        
        {items?.purchaseV?
          <input
            type="number"
            className="p-2 border-b-2 border-yellow text-center bg-transparent w-[50px]"
            value={purchaseV}
            max={items?.purchaseV}
            min="0"
            onChange={event => setPurchaseV(event.target.valueAsNumber)}
            placeholder="46:"
          />
          :
          <></>
        }

        {items?.purchaseIV?
          <input
            type="number"
            className="p-2 border-b-2 border-yellow text-center bg-transparent w-[50px]"
            value={purchaseIV}
            max={items?.purchaseIV}
            min="0"
            onChange={event => setPurchaseIV(event.target.valueAsNumber)}
            placeholder="48:"
          />
          :
          <></>
        }

        {items?.purchaseIIV?
          <input
            type="number"
            className="p-2 border-b-2 border-yellow text-center bg-transparent w-[50px]"
            value={purchaseIIV}
            max={items?.purchaseIIV}
            min="0"
            onChange={event => setPurchaseIIV(event.target.valueAsNumber)}
            placeholder="50:"
          />
          :
          <></>
        }

        {items?.purchaseIIIV?
          <input
            type="number"
            className="p-2 border-b-2 border-yellow text-center bg-transparent w-[50px]"
            value={purchaseIIIV}
            max={items?.purchaseIIIV}
            min="0"
            onChange={event => setPurchaseIIIV(event.target.valueAsNumber)}
            placeholder="52:"
          />
          :
          <></>
        }

        {items?.purchaseIIIIV?
          <input
            type="number"
            className="p-2 border-b-2 border-yellow text-center bg-transparent w-[50px]"
            value={purchaseIIIIV}
            max={items?.purchaseIIIIV}
            min="0"
            onChange={event => setPurchaseIIIIV(event.target.valueAsNumber)}
            placeholder="54:"
          />
          :
          <></>
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
            placeholder='address:'
            value={address}
            onChange={event => setAddress(event.target.value)}
            type="text"
          />

          <input
            type="number"
            className="p-2 border-b-2 border-yellow bg-transparent w-[96px]"
            min="0"
            value={number}
            onChange={event => setNumber(event.target.value)}
            placeholder="Numero:"
          />
        </div>

        <input
          type="text"
          className="p-2 border-b-2 border-yellow bg-transparent w-[300px]"
          value={complement}
          onChange={event => setComplement(event.target.value)}
          placeholder="Complement:"
        />

        <strong>DADOS DO CARTÂO</strong>
        <div className='flex gap-3'>

          <input
            className="p-2 border-b-2 border-yellow bg-transparent w-[250px]"
            type="number"
            value={cardNumber}
            onChange={event => setCardNumber(event.target.value)}
            placeholder="numero do cartão:"
          />

          <input
            className="p-2 border-b-2 border-yellow bg-transparent w-[250px]"
            value={nameOnCard}
            onChange={event => setNameOnCard(event.target.value)}
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
                onChange={event => setExpiryMonth(event.target.valueAsNumber)}
                value={expiryMonth}
                min="0"
                placeholder="mês:"
              />
              <input
                type="number"
                className="p-2 border-b-2 border-yellow pt-0 text-center bg-transparent w-[50px]"
                value={expiryYear}
                onChange={event => setExpiryYear(event.target.valueAsNumber)}
                min="0"
                placeholder="expiryYear:"
              />
            </div>

          </div>
        <input
          type="number"
          className="p-2 border-b-2 border-yellow bg-transparent  w-[300px]"
          value={securityCode}
          onChange={event => setSecurityCode(event.target.valueAsNumber)}
          min="0"
          placeholder="Código de segurança:"
        />
        </div>
          
        <input
          type="number"
          onChange={event => setHolderSCpf(event.target.valueAsNumber)}
          value={holderSCpf}
          className="p-2 border-b-2 border-yellow bg-transparent w-[300px]"
          min="0"
          placeholder="holderSCpf do titular"
        />

      { FormValid ?

        <div
          onClick={stateTemplate}
          className="
          border-yellow border-2 bg-clip-text text-lg font-bold text-transparent
          bg-gradient-to-r from-yellow to-amber-600 px-10 py-2 rounded-full">
        COMPRAR
        </div>

      :

      <button
        className="
        border-yellow border-2 bg-clip-text text-lg font-bold text-transparent
        bg-gradient-to-r from-yellow opacity-25 to-amber-400 px-10 py-2 rounded-full">
      COMPRAR
      </button>

      }


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

      <ConfirmaçãoDoPagamento
        state={state}
        setState={setState}
        title={`${items?.title}`}
        function={RealizarCompra}
      />

    </>
  )
}