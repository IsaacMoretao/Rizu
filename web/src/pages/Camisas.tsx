import axios from 'axios';
import { useEffect, useState } from 'react';
import { api } from '../lib/axios';
import { Produto } from './../components/Produto';

interface Shirt {
  id: string,
  code: string,
  title: string,
  description: string,
  pieceUrl: string,
  tipe: string,

  priceInCents: number,
  quantityPP?: number,
  quantityP?: number,
  quantityM?: number,
  quantityG?: number,
  quantityGG?: number

}

export function Camisas(){

  const [ items, setItems ] = useState<Shirt[]>([]);

  useEffect(() => {
    api
      .get("/shirt/find")
      .then((response) => setItems(response.data))
      .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }, []);

/*  useEffect(() => {
    async function fetchData() {
      const result = await getShirts();
      setShirts(result);
    }

    fetchData();
  }, []);

  async function getShirts(): Promise<Shirt[]> {
    const response = await axios.get('http://localhost:3333/shirt/find');
    return response.data as Shirt[];
  }*/
  console.log(items)

  return(
    <main>
    
      
      

    </main>
  )
}