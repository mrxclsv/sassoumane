import React from 'react'
import { Link } from 'react-router-dom'

const Section = ({ section, action, link, css }) => {
  return (
    <div className='-w-full flex items-center justify-between py-8 px-6 resp text-white mix-blend-difference'>
      <h1>{section}</h1>

      {action !== "" &&
        <Link to={link} className='btn text-zinc-400 underline underline-offset-8'>{action}</Link>
      }
    </div>
  )
}

export default Section