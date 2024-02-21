import React from 'react'
import { useCatalog, useProduct } from "../utils/hooks"
import { Product } from "../utils/components"

const Shop = () => {

  const { catalog, vars } = useCatalog()
  const product = useProduct()

  return (
    <div className="page bg-white flexV">
      {/* FILTERS BAR */}


      {/* <div className='grid grid-cols-2 lg:grid-cols-3 start'>
        {catalog.cosmetics.map((item, index) => (
          <div key={item.title} className=''>
            <Product />
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default Shop