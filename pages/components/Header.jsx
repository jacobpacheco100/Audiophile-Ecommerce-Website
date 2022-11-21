import React from 'react'

const Header = ({ title }) => {
  return (
    <div className='h-[246px] bg-black relative flex items-center justify-center'>
      <h2 className='h1 text-white'>{title}</h2>
    </div>
  )
}

export default Header
