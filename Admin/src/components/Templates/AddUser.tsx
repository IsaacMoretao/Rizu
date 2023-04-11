import { FormEvent, useState } from "react";
import { api } from "../../lib/axios";
import X from "../../assets/letra-x.png"

interface ICreateUser {
  state: string;
  setState: any;

}

export function AddUser(props: ICreateUser) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [avatarUrl, setAvatar] = useState("")

  const req = username && password

  function Delete(){
    if(props.state == "none"){
      props.setState("flex")
    } else if (props.state == "flex"){
      props.setState("none")
    } else {
      console.log(props.state)
      console.log('[[ERROR]] Internal Server Error [[ERROR]]')
    }
  }

  async function createNewUser(event: FormEvent) {
    event.preventDefault()

    await api.post('/client', {
      username,
      password,
      avatarUrl
    })
    .then(response => {
      window.location.reload();
      props.setState("none")
    })
    
  }

  return(
    <body
      className="h-[100vh] w-[100%] bg-transparentBlack fixed z-50 center"
      style={{top: "0", right: "0", display: props.state}}>
      <main
        className="p-10 rounded-xl flex-col w-[600px] gap-5 bg-white center">

        <strong>
          Criando novo Usuário...
        </strong>

        <p className="text-center">
          Para criar um usuário preencha o formulário abaixo!
        </p>

        <form onSubmit={createNewUser} className="flex flex-col gap-3 center">
          <input
            type="text"
            className="p-2 border-b-2 border-black w-[300px]"
            value={username}
            onChange={event => setUsername(event.target.value)}
            placeholder="Nome:"
          />

          <input 
            type="text"
            className="p-2 border-b-2 border-black w-[300px]"
            value={password}
            onChange={event => setPassword(event.target.value)}
            placeholder="Password:"
          />

          <input 
            type="text"
            className="p-2 border-b-2 border-black w-[300px]"
            value={avatarUrl}
            onChange={event => setAvatar(event.target.value)}
            placeholder="Avatar:"
          />
          { req.length >= 6 ?
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
      <button
        className="absolute"
        style={{right: "20px", top: "70px"}}
        onClick={Delete}
      >
        <img src={X} alt="X" />
      </button>
    </body>
  )
}