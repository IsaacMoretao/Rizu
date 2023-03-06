import Camiseta from '../assets/Camisa.png';

interface IProduto {
  Title: string,
  ProductUrl: string,
  Description: string,
  Code: string
}

export function Produto(props: IProduto) {
  return(
    <a href="#" className='flex mr-auto mt-11 w-[60%] mb-11 ml-auto'>
      <section className='border border-black rounded-md p-5'>
        <header className='p-3 flex items-center justify-center'>
          <strong>{props.Title}</strong>
        </header>
        <main className="flex gap-5">
          <img src={props.ProductUrl} alt="" className='h-[150px] w-[150px] mr-[30px]' />
          <p className='mr-[30px] flex items-center'>
            {props.Description}
          </p>
        </main>
        <footer>
          {props.Code}
        </footer>
      </section>
    </a>
  )
}