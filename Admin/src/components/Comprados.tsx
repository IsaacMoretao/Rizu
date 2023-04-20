
interface IComprado {
  ProductUrl: string;
  Code: string;
  Endereço: string;
  EndereçoNum: number;
  name: string;

  quantitPP?: number;
  quantitP?: number;
  quantitM?: number;
  quantitG?: number;
  quantitGG?: number;

  quantitI?: number;
  quantitII?: number;
  quantitIII?: number;
  quantitIIII?: number;
  quantitV?: number;
  quantitIV?: number;
  quantitIIV?: number;
  quantitIIIV?: number;
  quantitIIIIV?: number;

}


export function Comprados(props: IComprado){



  return(
    <>
      <section className='border flex gap-7 w-[80%] border-black rounded-md p-5'>
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
        <div>
          <header>
            {props.name}
          </header>
          <main>
            {props.Endereço} N:{props.EndereçoNum}
          </main>
          <footer className="flex">

          {props.quantitPP ?
              <div>
                PP: <b>{props.quantitPP}UND</b> 
              </div>
            :
              <></>
            }
            {props.quantitP ?
              <div>
                P: <b>{props.quantitP}UND</b>
              </div>
            :
              <></>
            }
            {props.quantitM ?
              <div>
                M: <b>{props.quantitM}UND</b>
              </div>
            :
              <></>
            }
            {props.quantitG ?
              <div>
                G: <b>{props.quantitG}UND</b>
              </div>
            :
              <></>
            }
            {props.quantitGG ?
              <div>
                GG: <b>{props.quantitGG}UND</b>
              </div>
            :
              <></>
            }







            {props.quantitI ?
              <div>
                34: {props.quantitI}UND
              </div>
            :
              <></>
            }
            {props.quantitII ?
              <div>
                36: {props.quantitII}UND
              </div>
            :
              <></>
            }
            {props.quantitIII ?
              <div>
                38: {props.quantitIII}UND
              </div>
            :
              <></>
            }
            {props.quantitIIII ?
              <div>
                40: {props.quantitIIII}UND
              </div>
            :
              <></>
            }
            {props.quantitV ?
              <div>
                42: {props.quantitV}UND
              </div>
            :
              <></>
            }
            {props.quantitIV ?
              <div>
                44: {props.quantitIV}UND
              </div>
            :
              <></>
            }
            {props.quantitIIV ?
              <div>
                46: {props.quantitIIV}UND
              </div>
            :
              <></>
            }
            {props.quantitIIIV ?
              <div>
                48: {props.quantitIIIV}UND
              </div>
            :
              <></>
            }
            {props.quantitIIIIV ?
              <div>
                50: {props.quantitIIIIV}UND
              </div>
            :
              <></>
            }
            {props.quantitIIIV ?
              <div>
                52: {props.quantitIIIV}UND
              </div>
            :
              <></>
            }
          </footer>
        </div>

      </section>
    </>
  )
}