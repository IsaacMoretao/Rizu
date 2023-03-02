import Camiseta from '../assets/Camisa.png';
export function Produto() {
  return(
    <a href="#" className='flex mr-auto mt-11 w-[60%] mb-11 ml-auto'>
      <section className='border border-black rounded-md p-5'>
        <header className='p-3 flex items-center justify-center'>
          <strong>Camiseta</strong>
        </header>
        <main className="flex gap-5">
          <img src={Camiseta} alt="" className='h-[150px] w-[150px] mr-[30px]' />
          <p className='mr-[30px] flex items-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat
            fugiat beatae architecto, vero ut eligendi illo, nulla ex repellendus
            corrupti autem id, ratione eius maxime atque possimus rem nobis?
          </p>
        </main>
      </section>
    </a>
  )
}