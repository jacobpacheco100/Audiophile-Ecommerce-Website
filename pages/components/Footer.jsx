import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <section className='bg-black py-14 mt-32'>
      <div className='container relative'>
        {/* logo + nav links */}
        <div className='flex flex-col items-center justify-between | tablet:items-start | desktop:flex-row desktop:items-center'>
          {/* logo */}
          <Link to='home' spy={true} smooth={true} offset={-200} duration={500}>
            <img src='/assets/shared/desktop/logo.svg' alt='logo' />
          </Link>

          {/* navlinks */}
          <ul className='flex flex-col text-center space-y-7 mt-14 | tablet:flex-row tablet:space-y-0 tablet:text-left tablet:space-x-8 | desktop:mt-0 desktop:space-x-0'>
            <li>
              <a
                className='subtitle text-white hover:text-orange ease desktop:px-4 desktop:py-3'
                href=''
              >
                Home
              </a>
            </li>
            <li>
              <a
                className='subtitle text-white hover:text-orange ease desktop:px-4 desktop:py-3'
                href='/headphones'
              >
                Headphones
              </a>
            </li>
            <li>
              <a
                className='subtitle text-white hover:text-orange ease desktop:px-4 desktop:py-3'
                href='/speakers'
              >
                Speakers
              </a>
            </li>
            <li>
              <a
                className='subtitle text-white hover:text-orange ease desktop:px-4 desktop:py-3'
                href='/earphones'
              >
                Earphones
              </a>
            </li>
          </ul>
        </div>
        {/* about */}
        <p className='body text-white opacity-50 text-center mt-14 | tablet:text-left | desktop:max-w-[540px]'>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        {/* bottom */}
        <div className=' | tablet:flex items-center justify-between'>
          {/* copywrite */}
          <p className='body text-white opacity-50 text-center mt-14'>
            Copyright 2021. All Rights Reserved
          </p>
          {/* social links */}
          <div className='flex items-center space-x-4 justify-center mt-14 | desktop:absolute right-0 bottom-20 '>
            <img
              src='/assets/shared/desktop/icon-facebook.svg'
              alt=''
              className='opacity-75 ease hover:cursor-pointer hover:opacity-100'
            />
            <img
              src='/assets/shared/desktop/icon-twitter.svg'
              alt=''
              className='opacity-75 ease hover:cursor-pointer hover:opacity-100'
            />
            <img
              src='/assets/shared/desktop/icon-instagram.svg'
              alt=''
              className='opacity-75 ease hover:cursor-pointer hover:opacity-100'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
