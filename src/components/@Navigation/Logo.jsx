import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { logoCosmetics, logoClothing } from '../../utils/images'
import usePartition from '../../hooks/usePartition'



const Logo = () => {

  const [source, setSource] = useState()
  const { partition } = usePartition()
  useEffect(() => {
    if (partition === "cosmetics") {
      setSource(logoCosmetics)
    } else if (partition === "clothing") {
      setSource(logoClothing)
    }
    console.log("partition of logo is", partition)
  }, [partition])


  return (
    <NavLink to={`/${partition}`} className={`filter invert relative z-[201] `}>
      <img className="w-full object-contain"
        src={source} alt="SSMN" />
    </NavLink>
  )
}

export default Logo