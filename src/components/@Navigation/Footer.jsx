import React, { useState } from 'react'
import { footerLinks, project } from '../../utils/data'
import { Link } from 'react-router-dom'
import payment from '../../assets/commerce/Payments.png'
const Footer = () => {

  const [email, setEmail] = useState()

  return (
    <div className='bg-zinc-900 flex flex-col'>

      <div className='flexV resp flex-col lg:flex-row start pt-16 h-full pb-24 paddingX lg:'>

        <div id="left" className='flexV w-full start gap-6'>
          <div className='flexV start w-full'>
            <p className='header'>Souscrivez à notre newsletter!</p>
            <form className='flex start border borer-zinc-200 mt-6 *:py-3 w-full max-w-[500px] '>
              <input
                type="email"
                aria-label='email'
                className='px-4 text-black text-left w-full  placeholder:text-zinc-500 bg-transparent border-none'
                placeholder='Entrez votre email'
                value={email}
                onChange={(e) => e.target.value}
              />
              <button className='flex center px-6 bg-white text-zinc-500' aria-placeholder='Send your email'>Envoyer</button>
            </form>

          </div>
          <div className='flexV start gap-6'>
            <p className='header'>Moyens de paiement</p>
            <img src={payment} className='' alt="" />
          </div>


        </div>
        <div id="right" className='flex flex-col lg:flex-row gap-8 mt-20 lg:mt-0 center w-full'>
          {footerLinks.map((item, index) => (
            <div key={index} className='flexV start w-full'>
              <p className='header'>{item.header}</p>
              <ul className='flexV start gap-4 mt-10'>
                {item.links.map((link, index) => (
                  <Link to={link.link} className={`hover:text-primary opacity-70 hover:opacity-100 transition capitalize whitespace-nowrap`}  >{link.title}</Link>
                ))}
              </ul>
            </div>
          ))}

        </div>

      </div>
      <p className='resp gap-1 uppercase py-6 text-xs flex center border-zinc-500/60 border-t text-white'>
        <span>{project.copyright.title}</span>
        <span>{project.copyright.mention}</span>
      </p>
    </div>
  )
}

export default Footer