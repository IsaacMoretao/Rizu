import { api } from '../lib/axios';
import { Produto } from './../components/Produto';

export function Camisas(){

  async function userLog(){
    await api.get('/Dresses/find', {
      code,
      
    }
  }

  return(
    <main>
      <Produto Title={'Camisa'} ProductUrl={'file:///C:/Users/Natanael/Pictures/Camera%20Roll/profile-pic.png'} Description={'lorem'} Code={'CBAY6'}/>

    </main>
  )
}