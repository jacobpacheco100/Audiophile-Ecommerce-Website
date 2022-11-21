import Navbar from './components/Navbar'
import Categories from './components/Categories'
import About from './components/About'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main id='home'>
      {/* navbar */}
      <Navbar home={true} />
      {/* hero */}
      <section className='w-full bg-black bg-[url("/assets/home/mobile/image-header.jpg")] desktop:bg-[url("/assets/home/desktop/image-hero.jpg")] desktop:bg-bottom bg-cover bg-bottom'>
        <div className='h-[600px] container'>
          <div className='text-center desktop:text-left space-y-6 pt-32 '>
            <p className='overline-text text-gray opacity-50'>new product</p>
            <h1 className='h1 text-white'>
              XX99 Mark II <br /> HeadphoneS
            </h1>
            <p className='body text-gray pb-6 max-w-[349px] mx-auto desktop:mx-0'>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className='btn-orange '>see product</button>
          </div>
        </div>
      </section>
      {/* categories */}
      <Categories />
      {/* product grid */}
      <section className='container grid gap-6 mb-32'>
        {/* speaker (orange) */}
        <div className='bg-orange h-[600px] rounded-[8px] relative overflow-hidden'>
          {/* img */}
          <img
            src='/assets/home/desktop/image-speaker-zx9.png'
            alt='speaker'
            className='w-[152px] absolute left-0 right-0 mx-auto top-10 desktop:w-[410px] desktop:mx-0 desktop:top-32 desktop:left-20'
          />
          {/* text group */}
          <div className='text-center space-y-6 mt-72 tablet:mt-64 desktop:text-left desktop:mt-32 desktop:absolute desktop:right-32'>
            <h1 className='h1 text-white'>
              ZX9 <br /> SPEAKER
            </h1>
            <p className='body text-white opacity-70 max-w-[349px] mx-auto desktop:mx-0'>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className='btn-black'>see product</button>
          </div>
        </div>
        {/* speaker (gray) */}
        <div className='bg-gray h-[320px] rounded-[8px] relative bg-[url("/assets/home/desktop/image-speaker-zx7.jpg")] bg-cover bg-left'>
          {/* text group */}
          <div className='text-black space-y-8 h-[130px] absolute top-0 bottom-0 m-auto pl-[10%]'>
            <h1 className='h4'>ZX7 speaker</h1>
            <button className='btn-outline'>see product</button>
          </div>
        </div>
        {/* earphones */}
        <div className='grid grid-cols-1 tablet:grid-cols-2 gap-6'>
          <div className='bg-black h-[200px] tablet:h-[320px] rounded-[8px] bg-[url("/assets/home/desktop/image-earphones-yx1.jpg")] bg-cover bg-center'></div>
          <div className='bg-grayLight h-[200px] tablet:h-[320px] rounded-[8px] relative'>
            {/* text group */}
            <div className='text-black space-y-8 h-[130px] absolute top-0 bottom-0 m-auto pl-[10%]'>
              <h1 className='h4'>YX1 earphones</h1>
              <button className='btn-outline'>see product</button>
            </div>
          </div>
        </div>
      </section>
      {/* about */}
      <About />
      {/* footer */}
      <Footer />
    </main>
  )
}
