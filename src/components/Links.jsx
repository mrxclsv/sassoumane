import React from 'react'
import { navbar } from '../utils/data'
import { Link } from 'react-router-dom'


const Links = () => {
  return (
    <div className='w-full h-full lg:max-w-7xl grid grid-cols-2 lg:grid-cols-4 center justify-around gap-6 lg:gap-20 mt-20 p-6 lg:p-10'>
    {navbar?.map((item, index) => (
      <Link key={index} to={item.link} className='w-auto rounded-lg bg-gray-400 aspect-6/4 overflow-hidden relative group hover:shadow-lg shadow-black/30'>
          
          {/* <img className={`full object-cover group-hover:scale-110 transition duration-2000 ${item.position} `} src={item.image} alt={item.name} /> */}
          
          <div className='info absolute bottom-0 z-[1] translate-y-1/4 group-hover:translate-y-0 left-0 text-white flexV text-left p-4 justify-end right-0 bg-gradient-to-t from-black/60 to-transparent w-full h-20 transition duration-700 '>
            <p className='capitalize text-sm font-semibold text-white'>{item.name}</p>
            <p className='capitalize text-xs text-white opacity-0 group-hover:opacity-80 transition'>{item.views} views</p>

          </div>
      </Link>
    ))}

  </div>
  )
}

export default Links