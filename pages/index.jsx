import Head from 'next/head'
import Link from 'next/dist/client/link'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { arrowUp, emailLogo2, icon1, icon2, icon3, icon4, icon5, icon6, locationIcon, phoneSVG } from '../components/icons'

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
        <title>Dentist | Bosh sahifa</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div id='IndexUz' className='flex flex-col w-full min-h-screen bg-ghost text-textGray'>
        <main className='flex-auto bg-mainGray'>
          <section id='intro' className='h-screen z-20 w-full flex flex-col relative'>
            <div className='fixed top-0 inset-x-0 z-20 bg-mainGray'><Header /></div>
            <div className='flex-auto flex items-center justify-center'>
              <div className='max-w-[1200px] mx-auto w-full px-6 py-4 xl:grid grid-cols-2 items-center gap-20 hidden'>
                <div className='w-full flex flex-col space-y-6 items-start'>
                  <p className='uppercase font-bold text-[64px] leading-[72px]'>Yuqori sifatli va Og'riqsiz - <span className='text-mainBlue'>stomatologiya</span></p>
                  <p className='opacity-70 text-[20px]'>Biz xizmatlarning to'liq spektrini va har qanday muammolarni hal qilish uchun kompleks yondashuvni taklif qilamiz va bu barcha oila a'zolari uchun sog'lom tishlar va og'iz bo'shlig'ining kafolatidir.</p>
                  <button className='bg-mainBlue text-white px-8 py-4 rounded hover:bg-opacity-90 border-none'>Qabumda yozilish</button>
                </div>
                <div className='w-full h-full border border-black grid grid-cols-2 gap-4'>
                  <div className='border border-red-500 w-full gridMin gap-4'>
                    <div className='h-full border border-green-500 grid grid-cols-2 gap-4'>
                      <div className='border border-blue-500 w-full grid grid-rows-2 gap-4'>
                        <div className='h-full border border-pink-700 a5 w-[95%]'></div>
                        <div className='h-full border border-pink-700 a4 bg-mainBlue'></div>
                      </div>
                      <div className='border border-blue-500 w-full a3'></div>
                    </div>
                    <div className='h-full border border-green-500 a2'></div>
                  </div>
                  <div className='border border-red-500 w-full a1'></div>
                </div>
              </div>
            </div>
          </section>
          <section id='about'>
            <div className='whiteDiv h-screen bg-white flex justify-center items-center'>
              Section About
            </div>
          </section>
          <section id='features'>
            <div className='min-h-screen max-w-[1200px] mx-auto px-4 py-[40px] md:py-[60px] flex flex-col items-center justify-center space-y-[30px] md:space-y-[60px]'>  {/* pt-[80px] */}
              <div className='flex flex-col justify-center items-center space-y-[10px] md:space-y-[30px]'>
                <p className='teal title'>Xizmatlar</p>
                <p className='subtitle'>Barcha turdagi xizmatlar</p>
              </div>
              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='w-full'>
                  <Link href="/">
                    <a className='featureCard flex flex-col space-y-4'>
                      <div className='w-16 h-16 rounded-full bg-mainGray teal flex items-center justify-center'>{icon1}</div>
                      <div className='flex flex-col space-y-4'>
                        <p className='featureTitle'>Title</p>
                        <p className='featureContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut temporibus, expedita facere consectetur ad nesciunt eos, veniam eligendi eveniet quia aspernatur libero obcaecati necessitatibus.</p>
                        <p className='text-mainBlue text-[14px] cursor-pointer read-more'>Read more</p>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className='w-full'>
                  <Link href="/">
                    <a className='featureCard flex flex-col space-y-4'>
                      <div className='w-16 h-16 rounded-full bg-mainGray teal flex items-center justify-center'>{icon2}</div>
                      <div className='flex flex-col space-y-4'>
                        <p className='featureTitle'>Title</p>
                        <p className='featureContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut temporibus, expedita facere consectetur ad nesciunt eos, veniam eligendi eveniet quia aspernatur libero obcaecati necessitatibus.</p>
                        <p className='text-mainBlue text-[14px] cursor-pointer read-more'>Read more</p>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className='w-full'>
                  <Link href="/">
                    <a className='featureCard flex flex-col space-y-4'>
                      <div className='w-16 h-16 rounded-full bg-mainGray teal flex items-center justify-center'>{icon3}</div>
                      <div className='flex flex-col space-y-4'>
                        <p className='featureTitle'>Title</p>
                        <p className='featureContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut temporibus, expedita facere consectetur ad nesciunt eos, veniam eligendi eveniet quia aspernatur libero obcaecati necessitatibus.</p>
                        <p className='text-mainBlue text-[14px] cursor-pointer read-more'>Read more</p>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className='w-full'>
                  <Link href="/">
                    <a className='featureCard flex flex-col space-y-4'>
                      <div className='w-16 h-16 rounded-full bg-mainGray teal flex items-center justify-center'>{icon4}</div>
                      <div className='flex flex-col space-y-4'>
                        <p className='featureTitle'>Title</p>
                        <p className='featureContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut temporibus, expedita facere consectetur ad nesciunt eos, veniam eligendi eveniet quia aspernatur libero obcaecati necessitatibus.</p>
                        <p className='text-mainBlue text-[14px] cursor-pointer read-more'>Read more</p>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className='w-full'>
                  <Link href="/">
                    <a className='featureCard flex flex-col space-y-4'>
                      <div className='w-16 h-16 rounded-full bg-mainGray teal flex items-center justify-center'>{icon5}</div>
                      <div className='flex flex-col space-y-4'>
                        <p className='featureTitle'>Title</p>
                        <p className='featureContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut temporibus, expedita facere consectetur ad nesciunt eos, veniam eligendi eveniet quia aspernatur libero obcaecati necessitatibus.</p>
                        <p className='text-mainBlue text-[14px] cursor-pointer read-more'>Read more</p>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className='w-full'>
                  <Link href="/">
                    <a className='featureCard flex flex-col space-y-4'>
                      <div className='w-16 h-16 rounded-full bg-mainGray teal flex items-center justify-center'>{icon6}</div>
                      <div className='flex flex-col space-y-4'>
                        <p className='featureTitle'>Title</p>
                        <p className='featureContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut temporibus, expedita facere consectetur ad nesciunt eos, veniam eligendi eveniet quia aspernatur libero obcaecati necessitatibus.</p>
                        <p className='text-mainBlue text-[14px] cursor-pointer read-more'>Read more</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section id='contacts'>
            <div className='whiteDiv min-h-screen md:h-screen md:bg-white flex flex-col space-y-8 md:space-y-0 md:flex-row justify-center items-center relative overflow-hidden'>
              <div className='relative w-full h-[280px] sm:h-[380px] md:h-full'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1915.8187624379536!2d69.19298099587215!3d41.296424173092824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bd638477053%3A0x257a279a0e8f4348!2zNzVXVitXRmdsINCi0L7RiNC60LXQvdGCIDEwMDE3MywgT2B6YmVraXN0b24!5e0!3m2!1suz!2s!4v1652272449475!5m2!1suz!2s" className='absolute top-0 left-0 w-full h-full' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className='md:absolute md:top-0 md:left-0 w-full md:h-full text-white'>
                <div className='max-w-[1200px] mx-auto px-4 h-full flex items-center'>
                  <div className='bg-mainBlue md:w-[500px] w-full flex flex-col space-y-4 sm:space-y-8 p-4 sm:p-8 md:p-10 rounded-[15px]'>
                    <p className='mapContentTitle'>Kontaktlar</p>
                    <div className='flex flex-col space-y-4 sm:space-y-8'>
                      <div className='flex items-center space-x-4' id='location'>
                        <div className='w-8'>
                          <div className='bg-lightBlue w-8 h-8 rounded-full flex justify-center items-center'>{locationIcon}</div>
                        </div>
                        <div className='flex-auto'>
                          <Link href="/">
                            <a className="contactsInfo">Lorem ipsum dolor sit, 2</a>
                          </Link>
                        </div>
                      </div>
                      <div className='flex items-center space-x-4' id='phone_number'>
                        <div className='w-8'>
                          <div className='bg-lightBlue w-8 h-8 rounded-full flex justify-center items-center'>{phoneSVG}</div>
                        </div>
                        <div className='flex-auto'>
                          <Link href="tel:+998991212821">
                            <a className="contactsInfo">+998 99 121 28 21</a>
                          </Link>
                        </div>
                      </div>
                      <div className='flex items-center space-x-4' id='email'>
                        <div className='w-8'>
                          <div className='bg-lightBlue w-8 h-8 rounded-full flex justify-center items-center'>{emailLogo2}</div>
                        </div>
                        <div className='flex-auto'>
                          <Link href="mailto:avazovjr@gmail.com">
                            <a className="contactsInfo">avazovjr@gmail.com</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <div id='toTop' onClick={toTop} className='bg-white h-8 w-8 fixed bottom-10 right-6 cursor-pointer md:flex items-center justify-center z-20 hidden hover:bg-opacity-40 transition duration-100 rounded border border-white'>{arrowUp}</div>
      </div>
    </div>
  )
}
