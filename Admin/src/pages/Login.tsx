import { FormEvent, useState } from "react"
import { api } from "../lib/axios"

export function Login() {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [user, setUser] = useState("")

  async function userLog(event: FormEvent) {
    event.preventDefault()
  
    await api.post('/UserLog', {
      name,
      password
    })
    .then(response => {
      console.log(response.data)
      alert(response.data);
      setUser(response.data);
      console.log({user});
    })
    .catch(Response.error)
  
  }

  return(
    <div className="h-[100vh] w-[100%] background center">
      <main className="p-10 rounded-xl bg-vinho flex-col gap-3 text-colorTxt center">
        <strong>Login</strong>
        <form
          onSubmit={userLog}
          className="flex flex-col center gap-3"
          >
          <input
            type="text"
            className="bg-transparent border-2 border-colorTxt rounded-lg w-[300px] p-2"
            placeholder="Nome:"
          />
          <input
            type="text"
            className="bg-transparent border-2 border-colorTxt rounded-lg w-[300px] p-2"
            placeholder="Senha:"
          />
          <button
            className="border-2 border-colorTxt rounded-lg px-10 py-2">
            Entrar
          </button>
        </form>
      </main>
    </div>
  )
}