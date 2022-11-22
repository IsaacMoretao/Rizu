import Image from 'next/image';
import Sorriso from '../assets/Sorriso.png';

export default function Home() {
  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <main className='bg-gray-300 rounded-full h-[250px] w-[250px]' >
        <Image src={Sorriso} alt='' />
      </main>
    </div>
  )
}
