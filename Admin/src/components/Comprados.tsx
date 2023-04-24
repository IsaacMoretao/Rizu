
interface IComprado {
  ProductUrl: string;
  Code: string;
  Endereço: string;
  EndereçoNum: string;
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
      <section className='border flex gap-7 w-[80%] border-black ro-unded-md p-5'>
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
        <div className="flex flex-col gap-3">
          <header>
            {props.name}
          </header>
          <main className="text-2xl">
            {props.Endereço} N:{props.EndereçoNum}
          </main>
          <footer className="flex gap-3">

          {props.quantitPP ?
              <div>
                <b>PP:</b> {props.quantitPP}-UND 
              </div>
            :
              <></>
            }
            {props.quantitP ?
              <div>
                <b>P:</b> {props.quantitP}-UND
              </div>
            :
              <></>
            }
            {props.quantitM ?
              <div>
                <b>M:</b> {props.quantitM}-UND
              </div>
            :
              <></>
            }
            {props.quantitG ?
              <div>
                <b>G:</b> {props.quantitG}-UND
              </div>
            :
              <></>
            }
            {props.quantitGG ?
              <div>
                <b>GG:</b> {props.quantitGG}-UND
              </div>
            :
              <></>
            }

            {props.quantitI ?
              <div>
                <b>34:</b> {props.quantitI}-UND
              </div>
            :
              <></>
            }
            {props.quantitII ?
              <div>
                <p>36:</p> {props.quantitII}-UND
              </div>
            :
              <></>
            }
            {props.quantitIII ?
              <div>
                <p>38:</p> {props.quantitIII}-UND
              </div>
            :
              <></>
            }
            {props.quantitIIII ?
              <div>
                <b>40:</b> {props.quantitIIII}-UND
              </div>
            :
              <></>
            }
            {props.quantitV ?
              <div>
                <b>42:</b> {props.quantitV}-UND
              </div>
            :
              <></>
            }
            {props.quantitIV ?
              <div>
                <b>44:</b> {props.quantitIV}-UND
              </div>
            :
              <></>
            }
            {props.quantitIIV ?
              <div>
                <b>46:</b>  {props.quantitIIV}-UND
              </div>
            :
              <></>
            }
            {props.quantitIIIV ?
              <div>
                <b>48:</b> {props.quantitIIIV}-UND
              </div>
            :
              <></>
            }
            {props.quantitIIIIV ?
              <div>
                <b>50:</b> {props.quantitIIIIV}-UND
              </div>
            :
              <></>
            }
            {props.quantitIIIV ?
              <div>
                <b>52:</b>{props.quantitIIIV}-UND
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