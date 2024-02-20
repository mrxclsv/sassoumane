import React, { useEffect, useState } from 'react'
import { slide1, slide2, slide3 } from '../utils/images'

const Slider = () => {
  const imagesSlide = [slide1, slide2, slide3]
  const [currentSlide, setCurrentSlide] = useState(1)
  const [canUsePrev, setCanUsePrev] = useState(false)
  const [canUseNext, setCanUseNext] = useState(false)

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
      title: "Fraîcheur & allure du gentleman",
      image: slide3,
      active: currentSlide === 3
    },
  ]

  const total = imagesSlide.length
  const condition1 = currentSlide > 1 && currentSlide < total

  // console.log(condition1)

  useEffect(() => {
    if (condition1) {
      setCanUseNext(true)
      setCanUsePrev(true)
    }
    // if(currentSlide === )
    console.log(
      "you're on slide", currentSlide, "/", imagesSlide.length,
      "useNext is", canUseNext,
      "usePrevious is", canUsePrev,
    )
  }, [currentSlide])



  return (
    <div className='w-full relative flexV start h-[100svh] lg:h-[60vh]'>

      <div className={`relative flex w-full h-full overflow-hidden `}>
        {slides.map((item, index) => (
          <div key={index} id="slideItem" className={`w-screen h-full flex center relative group bg-blakk overflow-hidden flex-0 shrink-0 twoSeconds
              ${currentSlide === 1 && 'translate-x-0'}
              ${currentSlide === 2 && '-translate-x-[calc(100vw*1)]'}
              ${currentSlide === 3 && '-translate-x-[calc(100vw*2)]'}
            `}>
            <img src={imagesSlide[index]}
              className={`full object-cover object-center origin-center oneSecond ${item.active ? "opacity-80 duration-[3s]" : "opacity-20 group-hover:opacity-60 twoSeconds"}`} alt="" />

            <div className='flexV p-4 absolute absoluteX max-w-[200px]'>
              <p className='text-4xl font-semibold w-full'>{item.title}</p>

            </div>
          </div>
        ))}

      </div>

      <div className='absolute absoluteX bottom-0 flex justify-between z-[10]'>
        <div id="slideNav" className='*:w-[52px] *:aspect-square'>
          <button onClick={() => setCurrentSlide(canUsePrev && currentSlide - 1)} className={`btn ${canUsePrev ? navActive : navInactive}`}>
            <i className='ri-arrow-left-wide-line remixicon active:scale-90 transition' />
          </button>
          <button onClick={() => setCurrentSlide(currentSlide + 1)} className={`btn ${canUseNext ? navActive : navInactive}`}>
            <i className='ri-arrow-right-wide-line remixicon group-active:scale-90 transition' />
          </button>
        </div>

      </div>

    </div >
  )
}

export default Slider