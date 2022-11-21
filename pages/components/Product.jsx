import React from 'react'

const Product = (props) => {
  return (
    <div
      className={`my-24 | desktop:flex items-center justify-between ${
        props.reverse && 'flex-row-reverse'
      }`}
    >
      <img
        src={props.image.mobile}
        alt='product'
        className='h-[352px] w-full object-cover | desktop:w-[491px] desktop:h-[510px]'
      />
      {/* text group */}
      <div className=' text-center space-y-8 mt-14 | desktop:text-left desktop:mt-0 desktop:max-w-[445px]'>
        {props.new && <p className='overline-text text-orange '>new product</p>}
        <h2 className='h2 text-black'>{props.name}</h2>
        <p className='body text-black opacity-50 max-w-[572px] mx-auto'>
          {props.description}
        </p>
        <button className='btn-orange'>see product</button>
      </div>
    </div>
  )
}

export default Product
