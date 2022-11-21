import React, { useState } from 'react'

const Quantity = () => {
  const [number, setNumber] = useState(1)
  return (
    <div className='flex items-center'>
      <span
        className='quant-click'
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => setNumber((prev) => (prev > 1 ? prev - 1 : prev))}
      >
        -
      </span>
      <span className='quant-number'>{number}</span>
      <span
        className='quant-click'
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => setNumber((prev) => prev + 1)}
      >
        +
      </span>
    </div>
  )
}

export default Quantity
