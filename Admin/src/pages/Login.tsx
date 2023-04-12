import { FormEvent, useState } from "react"
import { api } from "../lib/axios"
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

export function Login() {

  const { setUser } = useAuth();

  const navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  async function userLog(event: FormEvent) {
    event.preventDefault()
  
    await api.post('/UserLog', {
      username,
      password
    })
    .then(response => {
      navigate('/Home')
      setUser(true);

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
            value={username}
            onChange={event => setUsername(event.target.value)}
            placeholder="Nome:"
          />
          <input
            type="text"
            className="bg-transparent border-2 border-colorTxt rounded-lg w-[300px] p-2"
            value={password}
            onChange={event => setPassword(event.target.value)}
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