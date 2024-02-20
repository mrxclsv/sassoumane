import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home1, Shop, About, Contact } from '../utils/components';

const Cosmetics = () => {

  const slug = 'cosmetics'


  return (
    <div className='viewportS flexV overflow-y-scroll'>

      <Routes>
        <Route exact path={`/${slug}`} element={<Home1 />} />
        <Route exact path={`/${slug}/shop`} element={<Shop />} />
        <Route exact path={`/${slug}/about`} element={<About />} />
        <Route exact path={`/${slug}/contact`} element={<Contact />} />
      </Routes>

    </div>
  )
}

export default Cosmetics