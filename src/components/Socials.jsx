import React from 'react'
import SocialsItem from './SocialsItem'
import { contacts } from '../utils/data'

const Socials = () => {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='flex center gap-2 relative'>

      {contacts.socials.map(item => (
        <SocialsItem
          key={item.title}
          icon={item.title}
          onClick={() => openInNewTab(`https://${item.title}.com`)}
        />
      ))}
      
    </div>
  )
}

export default Socials