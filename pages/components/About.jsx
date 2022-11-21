import React from 'react'

const About = () => {
  return (
    <div className='container flex flex-col justify-between items-center | desktop:flex-row-reverse'>
      {/* image */}
      <img
        src='/assets/shared/tablet/image-best-gear.jpg'
        className='w-full h-[300px] object-cover rounded-[8px] | desktop:w-[540px] desktop:h-[588px]'
      />
      {/* text group */}
      <div className='text-center max-w-[573px] | desktop:text-left desktop:max-w-[445px]'>
        <h1 className='h2 mt-[72px]'>
          Bringing you the <span className='text-orange'>best</span> audio gear
        </h1>
        <p className='body opacity-50 mt-[32px]'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  )
}

export default About
