import React from 'react'

const Categories = () => {
  return (
    <section className='flex flex-col tablet:flex-row items-center justify-between container py-32 space-y-20 tablet:space-y-0'>
      {/* headphones */}
      <a
        href='/headphones'
        className=' grow w-full h-[165px] bg-grayLight rounded-[8px] relative group | desktop:h-[204px]'
      >
        <img
          src='/assets/shared/desktop/image-category-thumbnail-headphones.png'
          className='w-[132px] absolute top-[-40px] left-0 right-5 mx-auto | desktop:w-[150px]'
        />

        <div className='flex flex-col items-center justify-center space-y-2 pt-20 | desktop:pt-28'>
          <h6 className='h6'>headphones</h6>
          <button className='btn-shop'>
            shop
            <img
              src='/assets/shared/desktop/icon-arrow-right.svg'
              className='ml-2'
            />
          </button>
        </div>
      </a>
      {/* speakers */}
      <a
        href='/speakers'
        className='tablet:mx-5 grow w-full h-[165px] bg-grayLight rounded-[8px] relative group desktop:h-[204px]'
      >
        <img
          src='/assets/shared/desktop/image-category-thumbnail-speakers.png'
          className='w-[132px] absolute top-[-40px] left-0 right-5 mx-auto | desktop:w-[150px]'
        />
        <div className='flex flex-col items-center justify-center space-y-2 pt-20 | desktop:pt-28'>
          <h5 className='h6'>speakers</h5>
          <button className='btn-shop'>
            shop
            <img
              src='/assets/shared/desktop/icon-arrow-right.svg'
              className='ml-2'
            />
          </button>
        </div>
      </a>
      {/* earphones */}
      <a
        href='/earphones'
        className=' grow w-full h-[165px] bg-grayLight rounded-[8px] relative group desktop:h-[204px]'
      >
        <img
          src='/assets/shared/desktop/image-category-thumbnail-earphones.png'
          className='w-[132px] absolute top-[-40px] left-0 right-5 mx-auto | desktop:w-[150px]'
        />
        <div className='flex flex-col items-center justify-center space-y-2 pt-20 | desktop:pt-28'>
          <h5 className='h6'>earphones</h5>
          <button className='btn-shop'>
            shop
            <img
              src='/assets/shared/desktop/icon-arrow-right.svg'
              className='ml-2'
            />
          </button>
        </div>
      </a>
    </section>
  )
}

export default Categories
