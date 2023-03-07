import axios from 'axios';
import { useEffect, useState } from 'react';
import { api } from '../lib/axios';
import { Produto } from './../components/Produto';

export function Camisas(){

  const [ items, setItems ] = useState();

  useEffect(() => {
    api
      .get("/shirt/find")
      .then((response) => setItems(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

/*  useEffect(() => {
    axios.get('http://localhost:3333/shirt/find')
    .then(res => {
      setItems(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])*/

  return(
    <main>
      {items.map(item => (
        <div key={item.id}>
          <Produto Title={''} ProductUrl={'file:///C:/Users/Natanael/Pictures/Camera%20Roll/profile-pic.png'} Description={'lorem'} Code={'CBAY6'}/>
        </div>
      ))}
      
      

    </main>
  )
}