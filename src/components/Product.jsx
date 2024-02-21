// import { useCatalog, useProductMockup } from '..utils/hooks/'

import { useState } from "react"
import { NumericFormat } from 'react-number-format';
import { Link } from "react-router-dom";

const Product = ({ simplified, productID, title, id, descr, price, sku }) => {

  const [isHover, setIsHover] = useState(false)

  return (
    <Link to={`/shop/${title}${id}`} className=''>
      <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className='productImage flex center relative overflow-hidden bg-zinc-100 aspect-square'>
        <img src="/spinner.gif" className='scale-50 opacity-70 object-cover mix-blend-darken' alt={title} />
        {/* <img src={image} className='full' alt={title} /> */}
        {/* Hover image */}
        {/* <img src={image} className='full' alt={title} /> */}
        <div className={`absolute inset-0 flex z-[5] overflow-hidden`}>
          <div id="quickView" className={`bg-blakk/80 flex center w-full py-2 gap-3 bottom-0 h-fit absolute absoluteX 
          ${isHover ? "-translate-y-0 quick ease-out opacity-100" : "translate-y-[102%] opacity-0 oneSecond"}
          `}>
            <i className="ri-eye-line remixicon" /><p>Voir aperçu</p>
          </div>
          <div id="actions" className="absolute top-4 right-4 flexV end gap-4 *:text-black overflow-hidden">
            <button
              aria-label="ajouter au panier"
              onClick={() => { }}
              className={`actionButton ri-shopping-bag-line ${isHover ? 'translate-x-0' : "translate-x-[110%]"} oneSecond`}
            />
            <button
              aria-label="ajouter aux souhaits"
              onClick={() => { }}
              className={`actionButton ri-heart-line ${isHover ? 'translate-x-0' : "translate-x-[110%]"} oneSecond delay-100 `}
            />
          </div>



        </div>

      </div>
      <div className='infoWrapper w-full'>
        <div onClick={() => setIsHover(true)} className={` MOB signal w-12 h-12 flex center rounded-full relative text-4xl text-black bg-white `}>
          <i className=" ri-more-line rotate-180 remixicon " />
        </div>
        <div id="quickView" className='flexV items-start justify-center w-full pt-4 '>
          <p className="text-black text-base lg:text-xl font-bold">{title}</p>
          <div className={`text-primary flex relative start gap-1 w-fit ${simplified && "saturate-0"} `}>
            <span>CFA</span>
            <NumericFormat className="inline w-fit" value={price} allowLeadingZeros thousandSeparator=" " />
          </div>
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