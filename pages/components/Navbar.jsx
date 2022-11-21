import React from 'react'

const Navbar = ({ home }) => {
  return (
    <section className={home ? 'bg-[#181818]' : 'bg-black'}>
      <div className='container h-[95px] flex items-center justify-between border-b border-[#97979766]'>
        {/* left side */}
        <div className='flex items-center space-x-10 desktop:space-x-0'>
          <img
            src='/assets/shared/tablet/icon-hamburger.svg'
            alt=''
            className='desktop:hidden'
          />
          <a href='/'>
            <img
              src='/assets/shared/desktop/logo.svg'
              alt=''
              className='hidden tablet:inline-block'
            />
          </a>
        </div>

        {/* center */}
        <a href='/'>
          <img
            src='/assets/shared/desktop/logo.svg'
            alt=''
            className='tablet:hidden'
          />
        </a>

        <ul className='hidden | desktop:flex desktop:translate-x-[-140px]'>
          <li>
            <a
              className='subtitle text-white hover:text-orange ease px-4 py-3'
              href='/'
            >
              Home
            </a>
          </li>
          <li>
            <a
              className='subtitle text-white hover:text-orange ease px-4 py-3'
              href='/headphones'
            >
              Headphones
            </a>
          </li>
          <li>
            <a
              className='subtitle text-white hover:text-orange ease px-4 py-3'
              href='/speakers'
            >
              Speakers
            </a>
          </li>
          <li>
            <a
              className='subtitle text-white hover:text-orange ease px-4 py-3'
              href='/earphones'
            >
              Earphones
            </a>
          </li>
        </ul>

        {/* right side */}
        <img src='/assets/shared/desktop/icon-cart.svg' alt='' />
      </div>
    </section>
  )
}

export default Navbar
