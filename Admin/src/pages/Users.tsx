import { useEffect, useState } from "react";
import plus from "../assets/mais.png";
import img from "../assets/image.png";
import lixo from "../assets/lixo.png";
import edit from "../assets/editar.png";
import { User } from "../components/User";
import { AddUserTemplate } from './../components/AddUserTemplate';

export function Users(){

  interface Users {
    username: string;
    id: string;
    avatarUrl: string | undefined;
  }

  const [users, setUsers] = useState<Users[]>([])
  const [state, setState] = useState("none")

  function Delete(){
    if(state == "none"){
      setState("flex")
    } else if (state == "flex"){
      setState("none")
    } else {
      console.log('[[ERROR]] Internal Server Error [[ERROR]]')
    }
  }

  useEffect(() => {
    fetch('http://localhost:3333/client/find')
    .then(response => response.json())
    .then(response => {
      setUsers(response)
    })

  }, []) 


  return(
    <>
      <div className="page flex-col center py-48">
        <section
          onClick={Delete}
          className="w-[80%] border border-black cursor-pointer h-48 rounded-xl center"
          >

          <img
            src={plus}
            alt="Adicionar"
          />
        </section>
        {users.map (user => {
          return (  

            <User
              key={user.id}
              id={user.id}
              name={user.username}
              avatar={user.avatarUrl}
            />

          )
        })}
      </div>
      <AddUserTemplate
        state={state}
        setState={setState}
      />
    </>
  )
}