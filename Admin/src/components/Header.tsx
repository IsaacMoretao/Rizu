import { Link } from 'react-router-dom';
import "../styles/Responsividade.css"

import Camiseta from '../assets/Camisa.png';
import Camisa from '../assets/camisa-social.png';
import Blusa from '../assets/Blusa.png';

import Acessórios from '../assets/Acessórios.png';
import Calça from '../assets/Calça.png';
import Vestido from '../assets/vestir.png';

import Hamburguer from '../assets/menu-hamburguer.png';
import Contact from '../assets/Contact.png';
import Logo from '../assets/Logo-Oficial.png'
import { useState } from 'react';

export function Header(){

  const [aside, setAside] = useState("-300px");

  function navLinks() {
    if (aside == "-300px") {
      setAside("0");
    } else if (aside == "0") {
      setAside("-300px");
    }
  }

  return(
    <>
      <header
        className="flex fixed px-10 w-full bg-vinho h-12 justify-between z-40 items-center Header">
        <Link to={'/Home'}>
          <figure className='flex gap-2'>
            <img src={Logo} alt="Logo Oficial" className='h-[50px]' />
          </figure>
        </Link>

        <nav
          style={{right: aside}}
          className='flex items-center gap-5 text-white nav-Links'>
          <Link to={'/Camisetas'} className='flex items-center gap-2 hover:font-bold'>
            <img
              src={Camiseta}
              alt="Camizeta Ilustração"
              className="h-5"
            />
            Camisetas
          </Link>

          <Link to={'/Camisas'} className='flex items-center gap-2 hover:font-bold'>
            <img
              src={Camisa}
              alt="Camisa Ilustração"
              className="h-5"
            />
            camisas
          </Link>

          <Link to={'/Calças'} className='flex items-center gap-2 hover:font-bold'>
            <img
              src={Calça}
              alt="Calça Ilustração"
              className="h-5"
            />
            calças
          </Link>

          <Link to={'/Blusas'} className='flex items-center gap-2 hover:font-bold'>
            <img
              src={Blusa}
              alt="Blusa Ilustração"
              className="h-5"
            />
            blusas
          </Link>

          <Link to={'/Vestidos'} className='flex items-center gap-2 hover:font-bold'>
            <img
              src={Vestido}
              alt="Vestido Ilustração"
              className="h-5"
            />
            vestidos
          </Link>

          <Link to={'/Acessorios'} className='flex items-center gap-2 hover:font-bold'>
            <img
              src={Acessórios}
              alt="Acessórios Ilustração"
              className="h-5"
            />
            acessórios
          </Link>

          <Link to={'/Users'} className='flex items-center gap-2 hover:font-bold'>
            <img
              src={Contact}
              alt="Acessórios Ilustração"
              className="h-5"
            />
            Usuários
          </Link>

        </nav>
        <button
          onClick={navLinks}
          className='Buttom-Header'>
          <img src={Hamburguer} />
        </button>
      </header>
    </>
  )
}