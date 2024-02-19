import React from 'react'

const SocialsItem = ({ title, icon, css, onClick }) => {
  return (
    <button onClick={onClick}
      className={`group socialBtn remixicon hover:bg-zinc-500/10 text-black ${css}`}>
      <i className={`ri-${icon}-fill active:group-active:`} />
      <p>{title}</p>
    </button>
  )
}

export default SocialsItem