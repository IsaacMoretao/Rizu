import { Comprados } from './../components/Comprados';

export function Compra(){

  return(
    <div className="center page">
      <Comprados
        ProductUrl={"https://cdn-icons-png.flaticon.com/512/2984/2984864.png"}
        Code={'PINKB'}
        Endereço={'AV.antonio'}
        EndereçoNum={200}
        name={'Isaac Moleton'}/>
    </div>
  )
}