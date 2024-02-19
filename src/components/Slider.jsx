import React, { useEffect, useState } from 'react'
import { slide1, slide2, slide3 } from '../utils/images'

const Slider = () => {
  const imagesSlide = [slide1, slide2, slide3]
  const [currentSlide, setCurrentSlide] = useState(1)
  const [canUsePrev, setCanUsePrev] = useState(false)
  const [canUseNext, setCanUseNext] = useState(true)

  const navInactive = "group hover:bg-zinc-400/10"
  const navActive = `${navInactive} active:text-primary`

  const slides = [
    {
      title: "3 gammes conçues pour les hommes",
      image: slide1,
      active: currentSlide === 1
    },
    {
      title: "Une douche en orient avec Mubarak",
      image: slide2,
      active: currentSlide === 2
    },
    {
      title: "Frîcheur & allure du gentleman",
      image: slide3,
      active: currentSlide === 3
    },
  ]

  useEffect(() => {
    if (currentSlide > 1) {
      setCanUsePrev(true)
    } else setCanUsePrev(false)
    console.log(canUsePrev)
  }, [currentSlide, canUsePrev])


  useEffect(() => {
    if (currentSlide < imagesSlide.length+1) {
      setCanUseNext(true)
    }
    console.log(currentSlide)
  }, [currentSlide, canUseNext, imagesSlide.length])


  function PrevSlide() {
    setCurrentSlide(currentSlide-1)
  }

  function NextSlide() {
    setCurrentSlide(currentSlide+1)
  }

  return (
    <div className='w-full relative flexV start h-[100svh] lg:h-[60vh]'>

      <div className={`relative flex w-full h-full overflow-hidden `}>
        {slides.map((item, index) => (
          <div key={index} id="slideItem" className={`w-full h-full flex center relative group bg-blakk overflow-hidden flex-0 shrink-0
              ${currentSlide === 1 && 'translate-x-0'}
              ${currentSlide === 2 && '-translate-x-[calc(100vw*2)'}
              ${currentSlide === 3 && '-translate-x-[calc(100vw*3)'}
            `}>
            <img src={imagesSlide[index]} className={`full object-cover object-center origin-center ${item.active ? "opacity-80" : "opacity-20 group-hover:opacity-60 oneSecond"}  `} alt="" />
          </div>
        ))}
      </div>

      <div className='absolute absoluteX bottom-0 flex justify-between'>
        <div id="slideNav" className='*:w-[52px] *:aspect-square'>
          <button onClick={PrevSlide} className={`btn ${canUsePrev ? navActive : navInactive}`}>
            <i className='ri-arrow-left-wide-line remixicon active:scale-90 transition' />
          </button>
          <button onClick={NextSlide} className={`btn ${canUseNext ? navActive : navInactive}`}>
            <i className='ri-arrow-right-wide-line remixicon group-active:scale-90 transition' />
          </button>
        </div>

      </div>

    </div >
  )
}

export default Slider