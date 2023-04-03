import Camiseta from '../assets/Camisa.png';
import Camisa from '../assets/camisa-social.png';
import Blusa from '../assets/Blusa.png';

import Acessórios from '../assets/Acessórios.png';
import Calça from '../assets/Calça.png';
import Vestido from '../assets/vestir.png';

import Logo from '../assets/sacolas-de-compras.png';
import Hamburguer from '../assets/menu-hamburguer.png';
import { Link } from 'react-router-dom';

export function Home() {
  return(
    <div className="flex flex-col gap-3 page center">
      <div className='flex justify-center flex-wrap items-center gap-3 Home'>

        <Link to={'/Blusas'} >
          <section  className="w-[200px] border-2 rounded-md p-3 border-black flex-col flex justify-center items-center">
            <img src={Blusa} alt="" className='h-[150px]' />
            Blusas
          </section>
        </Link>

        <Link to={'/Camisetas'}>
         <section className="w-[200px] border-2 rounded-md p-3 border-black static flex-col flex justify-center items-center">
            <img src={Camiseta} alt="" className='h-[150px]' />
            camisetas
         </section>
        </Link>

        <Link to={'/Camisas'}>
         <section className="w-[200px] border-2 rounded-md p-3 border-black static flex flex-col justify-center items-center">
            <img src={Camisa} alt="" className='h-[150px]' />
            Camisas
          </section>
        </Link>
      </div>

      <div className='flex justify-center flex-wrap items-center gap-3 Home'>
        <Link to={'/Vestidos'}>
         <section className="w-[200px] border-2 rounded-md p-3 border-black static flex flex-col justify-center items-center">
            <img src={Vestido} alt="" className='h-[150px]' />
            Vestido
          </section>
        </Link>

        <Link to={'/Calças'}>
          <section className="w-[200px] border-2 rounded-md p-3 border-black static flex flex-col justify-center items-center">
           <img src={Calça} alt="" className='h-[150px]' />
           Calças
          </section>
        </Link>

        <Link to={'/Acessorios'}>
          <section className="w-[200px] border-2 rounded-md p-3 border-black static flex flex-col justify-center items-center">
           <img src={Acessórios} alt="" className='h-[150px]' />
           acessórios
          </section>
        </Link>

      </div>
    </div>
  )
}