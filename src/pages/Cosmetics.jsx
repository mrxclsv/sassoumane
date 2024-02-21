import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import { Home1, Shop, About, Contact, Product, Footer } from '../utils/components';

const Cosmetics = () => {

  const slug = 'cosmetics'
  const {productID} = useParams()


  return (
    <div className='viewportS flexV overflow-y-scroll'>

      <Routes>
        <Route exact path={`/${slug}`} element={<Home1 productID={productID}/>} />
        <Route exact path={`/${slug}/shop`} element={<Shop productID={productID} />} />
        <Route exact path={`/${slug}/shop/:productID}`} element={<Product productID={productID} />} />
        <Route exact path={`/${slug}/contact`} element={<Contact />} />
        <Route exact path={`/${slug}/about`} element={<About />} />
        <Route exact path={`/${slug}/contact`} element={<Contact />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default Cosmetics