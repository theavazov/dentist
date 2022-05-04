import Head from 'next/head'
import { FooterRu } from '../../components/footerRu'
import { HeaderRu } from '../../components/headerRu'
import { arrowUp } from '../../components/icons'
import Image from 'next/image'


export default function Home() {
  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div>
      <Head>
        <title>Dentist | Главная</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className='flex flex-col min-h-screen z-10'>
        <div className=' flex-grow'>
          <HeaderRu />
          <div className=' absolute inset-0 -z-10'>
             <Image
        alt="Mountains"
        src="/media/intro.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        />
          </div>
          <div className='grid grid-cols-3'>
            <div className=' aspect-4/3 bg-red-500'>salom</div>
          </div>
          </div>
        <FooterRu/>
      </div>
      {/* <div className='flex flex-col bg-ghost text-black relative font-openSans font-medium'>
             <div className='absolute inset-0'>
                <Image
        alt="Mountains"
        src="/media/intro.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        />
             </div>
        <div id='intro' className='h-screen w-full flex flex-col bg-gradient-to-b from-lightBlue to-normBlue'>
          <div className='sticky top-0 md:top-4'><HeaderRu /></div>
          <div className='flex-auto '></div>
        </div>
        <main className='flex-auto'>
          <section>
            <div className='max-w-[1200px] mx-auto px-6'>Section 1</div>    
          </section>
        </main>
        <FooterRu />
        <div id='toTop' onClick={toTop} className='bg-ghost h-8 w-8 fixed bottom-10 right-6 cursor-pointer md:flex items-center justify-center z-20 hidden'>{arrowUp}</div>
      </div> */}
    </div>
  )
}
