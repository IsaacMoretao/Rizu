import Camiseta from '../assets/Camisa.png';
import Camisa from '../assets/camisa-social.png';
import Blusa from '../assets/Blusa.png';

import Acessórios from '../assets/Acessórios.png';
import Calça from '../assets/Calça.png';
import Vestido from '../assets/vestir.png';
import { Link } from 'react-router-dom';

import Sorriso from '../assets/Sorriso.png';
import Sorriso1 from '../assets/Sorriso(2).png';
import Sorriso2 from '../assets/Sorriso(3).png';
import Sorriso3 from '../assets/Sorriso(1).png';
import Sorriso4 from '../assets/Sorriso(5).png';
import Sorriso5 from '../assets/Sorriso(6).png';

export function TypesOfParts() {

  return(
    <div className='flex w-full flex-col gap-3'>
      <div className='flex justify-center flex-wrap items-center gap-3 Home'>

        <Link to={'/Blusas'} className="flex justify-center">
          <section
            className="w-[200px] border-2 rounded-md p-3 border-black flex-col relative center">
            <img src={Blusa} alt="Blusa-icone" className='h-[150px]' />
            <div
              className='absolute opacity-0 hover:opacity-100 transition bg-transparentBlack w-full h-full center'>
              <img src={Sorriso} className='h-[150px] ' />
            </div>
            
        
            Blusas
          </section>
        </Link>

       <Link to={'/Camisetas'} className="flex justify-center">
         <section className="w-[200px] border-2 relative rounded-md p-3 border-black  flex-col center">
            <img src={Camiseta} alt="Camiseta-icone" className='h-[150px]' />
            <div
              className='absolute opacity-0 hover:opacity-100 transition bg-transparentBlack w-full h-full center'>
              <img src={Sorriso1} className='h-[150px] ' />
            </div>
            camisetas
         </section>
        </Link>

        <Link to={'/Camisas'} className="flex justify-center">
         <section className="w-[200px] border-2 rounded-md p-3 border-black relative flex-col center">
            <img src={Camisa} alt="Camisa-icone" className='h-[150px]' />
            <div
              className='absolute opacity-0 hover:opacity-100 transition bg-transparentBlack w-full h-full center'>
              <img src={Sorriso2} className='h-[150px] ' />
            </div>
            Camisas
          </section>
        </Link>
      </div>

      <div className='flex justify-center flex-wrap items-center gap-3 Home'>
       <Link to={'/Vestidos'} className="flex justify-center">
         <section className="w-[200px] border-2 rounded-md p-3 border-black relative flex-col center">
            <img src={Vestido} alt="Vestido-icone" className='h-[150px]' />
            <div
              className='absolute opacity-0 hover:opacity-100 transition bg-transparentBlack w-full h-full center'>
              <img src={Sorriso3} className='h-[150px] ' />
            </div>
            Vestido
          </section>
        </Link>

        <Link to={'/Calças'} className="flex justify-center">
          <section className="w-[200px] border-2 rounded-md p-3 border-black relative flex-col center">
           <img src={Calça} alt="Calça-icone" className='h-[150px]' />
            <div
              className='absolute opacity-0 hover:opacity-100 transition bg-transparentBlack w-full h-full center'>
              <img src={Sorriso4} className='h-[150px] ' />
            </div>
           Calças
          </section>
        </Link>

        <Link to={'/Acessorios'} className="flex justify-center">
          <section className="w-[200px] border-2 rounded-md p-3 border-black relative flex-col center">
           <img src={Acessórios} alt="Acessórios-icone" className='h-[150px]' />
           <div
            className='absolute opacity-0 hover:opacity-100 transition bg-transparentBlack w-full h-full center'>
            <img src={Sorriso5} className='h-[150px] ' />
          </div>
           acessórios
          </section>
        </Link>

      </div>
    </div>

  )
}