import React from 'react';
import { Product, Section } from '../utils/components';
import { useProduct, useCatalog } from '../utils/hooks';

const NewArrivals = ({ productID }) => {

  const product = useProduct()
  const { catalog } = useCatalog()

  return (
    <div className='resp flexV pt-20'>
      <Section section="New arrivals" action="Voir tout" link="products" />
      <div className='grid grid-cols-2 center w-full gap-8 lg:gap-20 paddingX'>
        {catalog.cosmetics.map((item, index) => (
          <div key={index} id="wrapper relative">

            <Product simplified productID={productID}
              id={item.id}
              title={item.title}
              price={item.price}
              descr={item.descr}
              sku={item.sku}
            />
          </div>
        ))}
      </div>

    </div>
  )
}

export default NewArrivals