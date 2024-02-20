// import { useCatalog, useProductMockup } from '..utils/hooks/'

import { useState } from "react"
import { NumericFormat } from 'react-number-format';

const Product = ({ simplified, title, descr, price, sku }) => {

  // const {catalog, vars} = useCatalog()
  // const productMockup = useProductMockup()

  const [isHover, setIsHover] = useState(false)


  return (
    <div className=''>
      <div className='productImage  flex center relative overflow-hidden'>
        <img src="/spinner.gif" className='scale-50 opacity-20 object-cover ' alt={title} />
        {/* <img src={image} className='full' alt={title} /> */}
        {/* Hover image */}
        {/* <img src={image} className='full' alt={title} /> */}

      </div>
      <div className='infoWrapper w-full'>
        <div className='flexV items-start justify-center w-full pt-5 '>
          <p className="text-black text-lg font-bold">{title}</p>
          <p className={`text-primary flex relative center w-fit ${simplified && "saturate-0"} `}>
            <NumericFormat className="w-fit" value={price} allowLeadingZeros thousandSeparator=" " />
            <span>CFA</span>
          </p>
        </div>

        {/* {!simplified &&
          <div className=''>
            {sku}
            {descr}
          </div>
        } */}

      </div>
    </div>
  )
}

export default Product