import Camiseta from '../assets/Camisa.png';
import Camisa from '../assets/camisa-social.png';
import Blusa from '../assets/Blusa.png';
import Acessórios from '../assets/Acessórios.png';
import Calça from '../assets/Calça.png';
import Vestido from '../assets/vestir.png';
import Logo from '../assets/sacolas-de-compras.png';
import { Link } from 'react-router-dom';

export function Header(){
  return(

    <header className="flex px-10 w-full bg-violet-600 h-12 justify-between items-center">
      <Link to={'/'}>
        <figure className='flex gap-2'>
          <img src={Logo} alt="" className='h-7' />
          <h1 className='font-bold text-white'>Rizu</h1>
        </figure>
      </Link>


      <nav className='flex items-center gap-5 text-white'>
        <Link to={'/Camisetas'} className='flex items-center gap-2 hover:font-bold'>
          <img src={Camiseta} alt="" className="h-5"/>
          Camisetas
        </Link>

        <Link to={'/Camisas'} className='flex items-center gap-2 hover:font-bold'>
          <img src={Camisa} alt="" className="h-5"/>
          camisas
        </Link>

        <Link to={'/Calças'} className='flex items-center gap-2 hover:font-bold'>
          <img src={Calça} alt="" className="h-5"/>
          calças
        </Link>

        <Link to={'/Blusas'} className='flex items-center gap-2 hover:font-bold'>
          <img src={Blusa} alt="" className="h-5"/>
          blusas
        </Link>

        <Link to={'/Vestidos'} className='flex items-center gap-2 hover:font-bold'>
          <img src={Vestido} alt="" className="h-5"/>
          vestidos
        </Link>

        <Link to={'/Acessorios'} className='flex items-center gap-2 hover:font-bold'>
          <img src={Acessórios} alt="" className="h-5"/>
          acessórios
        </Link>

      </nav>
    </header>
  )
}