import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

/* HOOKS */import usePartition from '../hooks/usePartition'

import { navbar, project } from '../utils/data'
import { logoBg, signIn1, signIn2 } from '../utils/images'



const GoTo = () => {

  const { partition, partitions, activeParts } = usePartition()
  const [activeTab, setActiveTab] = useState(undefined)
  const [lastHover, setLastHover] = useState(undefined)

  // console.group(activeTab, activeParts)
  console.log("active tab is", activeTab)
  console.log("this parts are active", activeParts)
  // console.groupEnd()

  return (
    <div className='viewportS flex center'>

      <div className='header absolute absoluteX top-0 pt-10 resp z-[100] bg-gradient-to-b from-blakk/60'>

        <div className='flex items-center justify-between relative px-8'>
          <img src="/branding/SSMN_group.svg" alt="SSMN" />
          <div id="icons" className='flex items-center w-fit justify-end gap-2'>
            {navbar.icons.map(item => (
              <button onClick={() => { }} to="/" key={item.title} className={`w-[44px] cursor-pointer !aspect-square flex center relative hover: bg-white/10 rounded-full`} >
                <i className={`ri-${item.title}-line remixicon`} />
              </button>
            ))}
          </div>

        </div>


      </div>

      <div className='bgImage overflow-hidden absolute absoluteAll flex center '>
        <img src={
          activeTab === undefined && logoBg ||
          activeTab === "clothing" && signIn1 ||
          activeTab === "cosmetics" && signIn2 || 
          lastHover === "clothing" && signIn1 ||  
          lastHover === "cosmetics" && signIn2  
        }
          className={`full object-cover`} alt="" />
      </div>

      <div id="destinations" className='absolute bottom-0 absoluteX flex z-[100]'>
        <div className='flexV resp end py-10 bg-gradient-to-t from-blakk' >
          <p className='pointer-events-none animate-pulse'>Continuer sur</p>

          <ul id="labels" onMouseLeave={() => setActiveTab('')} className='relative py-2 w-full flex center'>

            {partitions.slice(1).map((item, index) => (

              <li key={item} onMouseEnter={() => { setActiveTab(item); setLastHover(item) }}
                onTouchStart={() => setActiveTab(item)}
                className={`uppercase relative flex center w-full 
                            ${activeTab === item ? 'oneSecond' : "opacity-60 oneSecond"} 
                            ${item.includes(activeParts) ? "cursor-pointer" : "cursor-not-allowed"}
                            `}>
                {/* ${!item == activeParts.map(item => (item)) && 'bg-red-400'} */}
                <NavLink to={item}
                  className={`text-lg py-4 w-fit mx-4 flex center font-semibold relative tracking-wide 
                            ${partition !== activeParts && " pointer-events-none"} `}>
                  {item}
                  <span className='text-xs absolute right-0  absoluteY m-auto h-fit translate-x-[120%] tracking-tight opacity-50 font-semibold'>
                    {item.includes(
                      activeParts) === false && "(soon)"
                    }
                  </span>
                </NavLink>
              </li>
            ))}
            <div className='IDWrapper absolute absoluteX bottom-2 h-[4px] mx-4 flex center '>
              <div id="indicator"
                className={`w-1/2 lg:w-full max-w-[100px] lg:max-w-[200px] h-[2px] rounded-lg bg-white origin-center
                        opacity-0
                        ${activeTab === partitions[1] && "-translate-x-[25vw] lg:-translate-x-[100%] scale-y-105 opacity-100 oneSecond"} 
                        ${activeTab === partitions[2] && "translate-x-[25vw] lg:translate-x-[100%] scale-y-105 opacity-100 oneSecond"} 
                        `}
              />
            </div>
          </ul>

          <div id="address" className={`w-full flex center px-10 mt-6 ${lastHover === undefined ? "opacity-0 translate-y-full" : "opacity-100 "} oneSecond `} >
            <button className='bg-zinc-900 flex center p-3 w-full max-w-[400px] rounded-full relative 
            hover:bg-zinc-800 oneSecond '>
              <p className='flex gap-[2px] last:font-semibold pointer-events-none'>
                {project.website}
                <span>/</span>
                <span className={``}>{lastHover || "destination"}</span>
              </p>
              {/* <i className='ri-arrow-right-up-line remixicon text-white text-xl font-[200] absolute right-0' /> */}
              <img className='absolute right-3 scale-50' src='/arrow.svg' typeof='svg' alt="" />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default GoTo