import { useEffect, useState } from "react";
import plus from "../assets/mais.png";
import img from "../assets/image.png";
import lixo from "../assets/lixo.png";
import edit from "../assets/editar.png"

export function Users(){

  interface Users {
    username: string;
    id: string;
  }

  const [users, setUsers] = useState<Users[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/client/find')
    .then(response => response.json())
    .then(response => {
      setUsers(response)
    })

  }, []) 


  return(
    <div className="page flex-col center py-[50px]">
      <section
        className="w-[80%] border border-black cursor-pointer h-48 rounded-xl center"
        >

        <img
          src={plus}
          alt="Adicionar"
        />
      </section>
      {users.map (user => {
          return (    
            <article
              key={user.id}
              className='flex h-48 z-10 bg-white border border-black mt-11 w-[80%]
              rounded-xl items-center justify-between text-4xl font-bold'>

              <img
                src={img}
                alt={user.username}
                className="h-[200px]"
              />

              <strong>
                {user.username}
              </strong>

              <div className="h-full flex flex-col items-center w-[200px] justify-around">
                <img src={lixo} alt="icone-lixo  (Excluir)" />
                <img src={edit} alt="icone-lapis (Editar)" />
              </div>
              
            </article>
          )
        })}
    </div>
  )
}