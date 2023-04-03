
export function Login() {
  return(
    <div className="h-[100vh] w-[100%] background center">
      <main className="p-10 rounded-xl bg-vinho flex-col gap-3 text-colorTxt center">
        <strong>Login</strong>
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
      </main>
    </div>
  )
}