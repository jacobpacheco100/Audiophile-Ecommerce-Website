import React from 'react'
import data from './_data.json'

// components
import Navbar from './components/Navbar'
import Header from './components/Header'
import Product from './components/Product'
import Categories from './components/Categories'
import About from './components/About'
import Footer from './components/Footer'

const earphones = () => {
  const items = data.slice(0, 1).reverse()

  const pageProducts = items.map((item) => {
    return (
      <Product
        reverse={item.reverse}
        image={item.image}
        new={item.new}
        name={item.name}
        description={item.description}
      />
    )
  })

  return (
    <main id='earphones'>
      <Navbar />
      <Header title='earphoens' />
      <section className='container'>{pageProducts}</section>
      <Categories />
      <About />
      <Footer />
    </main>
  )
}

export default earphones
