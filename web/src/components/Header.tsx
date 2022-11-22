import Camisa from '../assets/Camisa.png';
import Calça from '../assets/Calça.png';
import Blusa from '../assets/Blusa.png';
import Acessórios from '../assets/Acessórios.png';
import Image from 'next/image';

export function Header(){
  return(
    <div className="flex justify-around items-center bg-violet-500 h-[60px]">
      
      <img src='' alt="Image" />
      <nav className="flex gap-5 text-violet-50">
        <a className="flex gap-2 cursor-pointer hover:font-bold duration-150">
          <Image src={Calça} alt="" width={25} height={25} />
          CALÇAS
        </a>
        <a className="flex gap-2 cursor-pointer hover:font-bold duration-150">
          <Image src={Camisa} alt="" width={25} height={25} />
          CAMISETAS
        </a>
        <a className="flex gap-2 cursor-pointer hover:font-bold duration-150">
          <Image src={Blusa} alt="" width={25} height={25} />
          BLUSAS
        </a>
        <a className="flex gap-2 cursor-pointer hover:font-bold duration-150">
          <Image src={Acessórios} alt="" width={25} height={25} />
          ACESÓRIOS
        </a>
      </nav>
      <figure className="flex flex-col justify-around rounded-full h-[40px] w-[40px]">
        <div className="w-full h-[3px] bg-violet-50"/>
        <div className="w-full h-[3px] bg-violet-50"/>
        <div className="w-full h-[3px] bg-violet-50"/>
      </figure>

    </div>
  )
}