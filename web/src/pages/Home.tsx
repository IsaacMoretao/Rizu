import Camisa from '../assets/Camisa.png';
import Calça from '../assets/Calça.png';
import Blusa from '../assets/Blusa.png';
import Acessórios from '../assets/Acessórios.png';
import Image from 'next/image';



export default function Home() {
  return(
    <div className="flex flex-col justify-center items-center gap-5">

      <section className="flex gap-5 mt-16">

        <article className="rounded-lg bg-violet-300 p-[30px]">
          <Image src={Camisa} alt="" width={250} />
          <strong>Camisetas</strong>
        </article>

        <article className="rounded-lg bg-violet-300 p-[30px]">
          <Image src={Calça} alt="" width={250} />
          <strong>Calças</strong>
        </article>

      </section> 

      <section className="flex gap-5 mb-16">

        <article className="rounded-lg bg-violet-300 p-[30px]">
          <Image src={Blusa} alt="" width={250} />
          <strong>Blusas</strong>
        </article>

        <article className="rounded-lg bg-violet-300 p-[30px]">
          <Image src={Acessórios} alt="" width={250} />
          <strong>Acessórios</strong>
        </article>

      </section>


      
    </div>
  )
}