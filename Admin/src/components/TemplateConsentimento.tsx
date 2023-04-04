import axios from "axios";
import { useNavigate } from "react-router-dom";

  interface IConsentimento {
    state: string;
    setState: any;
    Usuario: string;
    id: string;
  }



export function TemplateConsentimento(props: IConsentimento) {
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      window.location.reload();
      await axios.delete(`http://localhost:3333/delete/${props.id}`);
      
    } catch (e) {
      console.error(e);
    }
  };

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
          DELETAR USUÁRIO ?
        </strong>

        <p className="text-center">
          Você como administrador, tem a responsabilidade
          e a permissão de Deletar o usuário <b>{props.Usuario}</b> ?
        </p>

        <div className="flex gap-10">
          <button
            onClick={stateTemplate}
            className="p-5 w-[160px] rounded-lg bg-gray-300 text-gray-700">
            Cancelar
          </button>

          <button
            onClick={handleDelete}
            className="p-5 w-[160px] rounded-lg bg-purple-600 text-white">
            Delete o usuário
          </button>
        </div>

      </main>
    </body>
  )
}


