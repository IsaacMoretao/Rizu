

  interface IConsentimento {
    state: string;
    setState: any;
    function: any;
    title: string;
  }
export function ConfirmaçãoDoPagamento(props:IConsentimento){



  function stateTemplate(){

    if(props.state == "none"){
      props.setState("flex")
    } else if (props.state == "flex"){
      props.setState("none")
    } else {
      console.log('[[ERROR]] Internal Server Error [[ERROR]]')
    }

  }

  return(
    
    <body
      className="h-[100vh] w-[100%] bg-transparentBlack fixed z-50 center"
      style={{top: "0", right: "0", display: props.state}}>
      <main
        className="p-10 rounded-xl flex-col w-[500px] gap-5 bg-white center">

        <strong>
          FINALIZANDO A COMPRA!
        </strong>

        <p className="text-center">
          Se ouver algum erro nas informações do formulário, a compra será <b>cancelada</b> .
        </p>

        <div className="flex gap-10">
          <button
            onClick={stateTemplate}
            className="p-5 w-[160px] rounded-lg bg-gray-300 text-gray-700">
            Cancelar
          </button>

          <button
            onClick={props.function}
            className="p-5 w-[160px] rounded-lg bg-purple-600 text-white">
            Comprar produto
          </button>
        </div>

      </main>
    </body>
  )
}