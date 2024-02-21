// import { useCatalog, useProductMockup } from '..utils/hooks/'

import { useState } from "react"
import { NumericFormat } from 'react-number-format';
import { Link } from "react-router-dom";

const Product = ({ simplified, productID, title, id, descr, price, sku }) => {

  // const {catalog, vars} = useCatalog()
  // const productMockup = useProductMockup()

  const [isHover, setIsHover] = useState(false)


  return (
    <Link to={`/shop/${title}${id}`} className=''>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className='productImage flex center relative overflow-hidden bg-zinc-100 aspect-square'>
        <img src="/spinner.gif" className='scale-50 opacity-70 object-cover mix-blend-darken' alt={title} />
        {/* <img src={image} className='full' alt={title} /> */}
        {/* Hover image */}
        {/* <img src={image} className='full' alt={title} /> */}
        <div className={`signal absolute inset-0 flex z-[5] overflow-hidden`}>
          <div className={`bg-blakk/80 flex center w-full py-2 gap-3 bottom-0 h-fit absolute absoluteX 
          ${isHover ? "-translate-y-0 quick ease-out opacity-100" : "translate-y-[102%] opacity-0 oneSecond"}
          `}>
            <i className="ri-eye-line remixicon" /><p>Voir aperçu</p>
          </div>

        </div>

      </div>
      <div className='infoWrapper w-full'>
        <div id="quickView" className='flexV items-start justify-center w-full pt-4 '>
          <p className="text-black text-base lg:text-xl font-bold">{title}</p>
          <div className={`text-primary flex relative start gap-1 w-fit ${simplified && "saturate-0"} `}>
            <span>CFA</span>
            <NumericFormat className="inline w-fit" value={price} allowLeadingZeros thousandSeparator=" " />
          </div>
        </div>
        <div id="actions" className='flexV items-start justify-center w-full pt-4 '>
          <button>

          </button>
        </div>

        {/* {!simplified &&
          <div className=''>
            {sku}
            {descr}
          </div>
        } */}

      </div>
    </Link >
  )
}

export default Product