import React, { useState } from 'react'
import { navbar } from '../../utils/data'
import { Logo, Socials, usePartition } from '../../utils/components'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const { partition, setPartition } = usePartition()

  const [menu, setMenu] = useState(false)
  const mobInactive = "flex items-center justify-start uppercase tracking-wide hover:font-[700] font-[400]= w-full px-10 py-3 transition hover:bg-zinc-400/10 "
  const mobActive = `${mobInactive} font-bold `

  return (
    <div className={`fixed top-0 absoluteX z-[200]`}>
      <div className='header absolute absoluteX top-0 resp lg:max-w-full bg-gradient-to-b from-blakk/60='>

        <div className='flex items-center justify-between px-8 pt-10 pb-4 ==backdrop-blur-sm'>
          <div className='bg-gradient-to-b from-blakk to-transparent h-[400px] absolute top-0 absoluteX -translate-y-[200px]' />
          <div className="MOB flex center">
            <button   onClick={() => setMenu(true)} type="button"
                    className={`w-[44px] cursor-pointer !aspect-square mix-blend-difference flex center relative hover: bg-white/10 rounded-full ${!menu ? "translate-y-0 duration-150" : "-translate-y-5 opacity-0"} oneSecond`} >
              <i className={`ri-menu-5-line remixicon `} />
            </button>
          </div>

          <div id="menuList" className=' DESK fixed bottom-0 lg:top-0 items-center w-fit justify-end gap-2'>
            {navbar.routes.cosmetics.links.map(item => (
              <NavLink key={item.title} to={`/${partition}${item.link}`}
                onClick={() => setMenu(false)}
                className={`w-[44px] cursor-pointer !aspect-square flex center relative hover: bg-white/10 rounded-full`} >
                <p>{item.title}</p>
                <i className={`ri-${item.icon}-line remixicon MOB`} />
              </NavLink>
            ))}
          </div>

          <div className='z-[300] absolute absoluteX w-fit  mix-blend-difference== flex center'>
            <Logo />
          </div>
        </div>
      </div>

      <div id="" className={`MOB fixed inset-0 bottom-0 h-fit flexV pb-30 bg-white z-[99]   
        ${menu ? "translate-x-0 " : "-translate-y-[105%] "} oneSecond ease-in-out `}>
        <div onClick={() => setMenu(false)} className='absolute screen flex bg-black/20 z-[1]' />
        <div className={`full flexV center h-fit pt-36 pb-20 ==bg-white relative text-black`}>

          <button onClick={() => setMenu(false)} type="button"
            className={`w-[44px] cursor-pointer !aspect-square flex center absolute top-10 left-8 hover: bg-zinc-400/10 rounded-full 
                ${menu ? "opacity-100 translate-x-0 twoSeconds" : "opacity-0 -translate-y-full oneSecond"}
                `}>
            <i className={`ri-close-line remixicon `} />
          </button>

          {partition === "clothing" &&
            <>{navbar.routes.clothing.links.map((item, index) => (
              <NavLink
                key={index}
                to={`${partition}${item.link}`}
                onClick={() => setMenu(false)}
                className={({ isActive }) => isActive ? mobActive : mobInactive}
              >
                {item.title}
              </NavLink>
            ))}</>
          }

          {partition === "cosmetics" &&
            <>{navbar.routes.cosmetics.links.map((item, index) => (
              <NavLink
                key={index}
                to={`${partition}${item.link}`}
                onClick={() => setMenu(false)}
                className={({ isActive }) => isActive ? mobActive : mobInactive}
              >
                {item.title}
              </NavLink>
            ))}</>
          }
        </div>
        <div className='pb-10'>
          <Socials />
        </div>

      </div>



    </div>
  )
}

export default Navbar