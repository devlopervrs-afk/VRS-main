import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { FiCheckCircle, FiClipboard, FiShield } from 'react-icons/fi'


import a from '../assets/images/Gemini_Generated_Image_4ylgfc4ylgfc4ylg.png'
import b from '../assets/images/Gemini_Generated_Image_gqfi4qgqfi4qgqfi.png'
import c from '../assets/images/Gemini_Generated_Image_quvxxqquvxxqquvx.png'
import d from '../assets/images/Gemini_Generated_Image_37mth337mth337mt.png'

gsap.registerPlugin(ScrollTrigger)

function Home1() {
  const animationRootRef = useRef(null)
  const animatedCardsRef = useRef([])

  const textMaskClipPath =
    'inset(calc(50% - clamp(140px, 22vw, 250px)) calc(50% - clamp(110px, 15vw, 180px)) calc(50% - clamp(140px, 22vw, 250px)) calc(50% - clamp(110px, 15vw, 180px)))'

  const heroImages = [
    {
      src: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      startRotate: -15,
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1671269941569-7841144ee4e0?q=80&w=993&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      startRotate: -13,
    },
    {
      src: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      startRotate: -11,
    },
    {
      src: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      startRotate: -9,
    },
    {
      src: 'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      startRotate: -7,
    },
    {
      src: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      startRotate: -7,
    },
  ]

  const imageClass =
    'absolute inset-0 h-full w-full object-cover shadow-[0_16px_55px_rgba(0,0,0,0.18)]'

  const proofBullets = [
    {
      icon: FiClipboard,
      text: 'In-house shop drawings & material sampling',
    },
    {
      icon: FiCheckCircle,
      text: 'Dedicated project manager + weekly reporting',
    },
    {
      icon: FiShield,
      text: 'Dubai authority-compliant execution',
    },
  ]

  const setAnimatedCardRef = (element, index) => {
    animatedCardsRef.current[index] = element
  }

  const handleProjectCardMove = (event) => {
    const card = event.currentTarget
    const bounds = card.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    card.style.setProperty('--card-x', `${(x * 10).toFixed(2)}px`)
    card.style.setProperty('--card-y', `${(y * 10).toFixed(2)}px`)
  }

  const handleProjectCardLeave = (event) => {
    event.currentTarget.style.setProperty('--card-x', '0px')
    event.currentTarget.style.setProperty('--card-y', '0px')
  }

  useLayoutEffect(() => {
    const animationRoot = animationRootRef.current
    const animatedCards = animatedCardsRef.current.filter(Boolean)
    if (!animationRoot || animatedCards.length !== 5) return

    const initialTopOffset = Math.max(Math.round(animationRoot.getBoundingClientRect().top), 0)

    const getLayoutTargets = () => {
      const cardWidth = animatedCards[0]?.offsetWidth || 220
      const viewportWidth = window.innerWidth
      const targetScale = viewportWidth < 640 ? 0.78 : viewportWidth < 1024 ? 0.62 : 0.66
      const scaledWidth = cardWidth * targetScale
      const gap = viewportWidth < 640 ? 14 : 22
      const step = scaledWidth + gap
      const centerDrop = viewportWidth < 640 ? 220 : viewportWidth < 1024 ? 320 : 450
      const spreadDrop = viewportWidth < 640 ? 46 : viewportWidth < 1024 ? 72 : 108

      return [
        { x: -2 * step, y: centerDrop + 2 * spreadDrop, rotate: -14, scale: targetScale },
        { x: -1 * step, y: centerDrop + spreadDrop, rotate: -7, scale: targetScale },
        { x: 0, y: centerDrop, rotate: 0, scale: targetScale },
        { x: 1 * step, y: centerDrop + spreadDrop, rotate: 7, scale: targetScale },
        { x: 2 * step, y: centerDrop + 2 * spreadDrop, rotate: 14, scale: targetScale },
      ]
    }

    const getScrollDistance = () => {
      const viewportWidth = window.innerWidth
      if (viewportWidth < 640) return 520
      if (viewportWidth < 1024) return 640
      return 600
    }

    const context = gsap.context(() => {
      animatedCards.forEach((card) => {
        const startRotate = Number(card.dataset.startRotate || 0)
        gsap.set(card, {
          x: 0,
          y: 0,
          rotation: startRotate,
          scale: 1,
          transformOrigin: '50% 50%',
        })
      })

      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: animationRoot,
          start: `top top+=${initialTopOffset}`,
          end: () => `+=${getScrollDistance()}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      animatedCards.forEach((card, index) => {
        timeline.to(
          card,
          {
            x: () => getLayoutTargets()[index].x,
            y: () => getLayoutTargets()[index].y,
            rotation: () => getLayoutTargets()[index].rotate,
            scale: () => getLayoutTargets()[index].scale,
            duration: 1,
          },
          0
        )
      })
    }, animationRoot)

    return () => {
      context.revert()
    }
  }, [])

  return (
    <div ref={animationRootRef} className='relative overflow-x-hidden'>
      <section className='relative mx-auto mt-16 flex min-h-[55vh] w-full max-w-[1280px] items-center justify-center overflow-visible px-4 sm:mt-20 sm:px-6 md:mt-28 lg:mt-36'>

        <div className='relative h-[280px] w-[220px] sm:h-[360px] sm:w-[280px] md:h-[420px] md:w-[320px] lg:h-[500px] lg:w-[360px]'>
          {heroImages.map(({ src, startRotate }, index) => {
            const shouldAnimate = index < 5
            return (
              <img
                key={`${src}-${index}`}
                ref={shouldAnimate ? (element) => setAnimatedCardRef(element, index) : undefined}
                data-start-rotate={shouldAnimate ? startRotate : undefined}
                className={imageClass}
                src={src}
                alt=''
                draggable='false'
                style={{ transform: `rotate(${startRotate}deg)` }}
              />
            )
          })}
        </div>

        <h1 className='pointer-events-none absolute left-1/2 -top-[10%] -translate-x-1/2 text-center font-cbyg text-[4.4rem] leading-none text-[#F39838] sm:text-[6.5rem] md:text-[9rem] lg:text-[12.5rem]'>
          Creating
        </h1>

        <div className='pointer-events-none absolute top-[60%] left-[57%] flex w-full max-w-[980px] -translate-x-1/2 items-center justify-center gap-6 px-1 sm:gap-12 sm:px-6 md:gap-20 md:px-10 lg:gap-50 lg:px-4'>
          <h2 className='font-cbyg text-[2.8rem] leading-none text-black sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem]'>
            Beyond
          </h2>
          <h2 className='text-right font-cbyg text-[2.8rem] leading-none text-black sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem]'>
            Expectations
          </h2>
        </div>

        <div className='pointer-events-none absolute inset-0' style={{ clipPath: textMaskClipPath }}>
          <div className='absolute top-[60%] left-[57%] flex w-full max-w-[980px] -translate-x-1/2 items-center justify-center gap-6 px-1 sm:gap-12 sm:px-6 md:gap-20 md:px-10 lg:gap-50 lg:px-4'>
            <h2 className='font-cbyg text-[2.8rem] leading-none text-white sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem]'>
              Beyond
            </h2>
            <h2 className='text-right font-cbyg text-[2.8rem] leading-none text-white sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem]'>
              Expectations
            </h2>
          </div>
        </div>

<div className='absolute left-1/2 top-[210%] -translate-x-1/2 text-center   text-black   rounded-lg p-5 flex flex-col gap-7 font-switzer'>

<h1 className='text-4xl'>Leading Renovation, Fit-Out & Interior Design Company in Dubai</h1>
<h1 className='text-2xl'>From villas and apartments to office and retail spaces, we deliver complete design-to-handover solutions with clear timelines and quality execution.</h1>



</div>

<div className='absolute left-1/2 top-[280%] -translate-x-1/2 text-center   text-black bg-[#22409a] w-[80vw] rounded-lg p-5'>

<h1 className='text-white text-5xl font-bold mt-7 font-switzer uppercase'>Recent Fit-Out Deliveries</h1>

<hr className='text-gray-500 mt-7' />

<div className='mt-7 flex gap-15'> 
    
    <div className='text-start text-white block'>
<div
  className='project-hover-card relative w-fit overflow-hidden rounded-lg'
  onMouseMove={handleProjectCardMove}
  onMouseLeave={handleProjectCardLeave}
>
<img className='project-hover-media w-190 h-100 object-cover rounded-lg' src={a} alt="Luxury living interior project" />
<div className='project-metric-badge'>
  <p className='text-[1.2rem] leading-[1] font-semibold'>Turnkey Fit-out</p>
  <p className=' text-[.8rem] leading-[1] font-semibold'>in 4 Weeks</p>
</div>
</div>
<h1 className='mt-3 text-3xl font-semibold'>Serene Modern Master Suite</h1>
<p className='text-md font-bold'>Luxury Residential Styling & Fit-out</p>
<p className='text-sm'>for a luxury home.</p>
    </div>

    <div className='text-start text-white block'>
<div
  className='project-hover-card relative w-fit overflow-hidden rounded-lg'
  onMouseMove={handleProjectCardMove}
  onMouseLeave={handleProjectCardLeave}
>
<img className='project-hover-media h-100 w-100 object-cover rounded-lg' src={b} alt="Modern curated interior project" />
<div className='project-metric-badge'>
  <p className='text-[1.2rem] leading-[1] font-semibold'>Commercial Fit-Out</p>
  <p className=' text-[.8rem] leading-[1] font-semibold'>in 12 weeks</p>
</div>
</div>
<h1 className='mt-3 text-3xl font-semibold'>Sell your car, Emirates Auction, Ras Al Khor</h1>
<p className='text-md font-bold'>All Fit-out & Custom Joinery</p>
    </div>

</div>


<div className='mt-7 flex gap-15 pb-60'> 

    <div className='text-start text-white block'>
<div
  className='project-hover-card relative w-fit overflow-hidden rounded-lg'
  onMouseMove={handleProjectCardMove}
  onMouseLeave={handleProjectCardLeave}
>
<img className='project-hover-media h-100 w-100 object-cover rounded-lg' src={c} alt="Modern curated interior project" />
<div className='project-metric-badge'>
  <p className='text-[1.2rem] leading-[1] font-semibold'>Residential Fit-Out</p>
  <p className=' text-[.8rem] leading-[1] font-semibold'>in 8 Weeks</p>
</div>
</div>
<h1 className='mt-3 text-3xl font-semibold'>Modern Classic Grand Foyer</h1>
<p className='text-md font-bold'>Architectural Detailing & Custom Joinery</p>
    </div>

    <div className='text-start text-white block'>
<div
  className='project-hover-card relative w-fit overflow-hidden rounded-lg'
  onMouseMove={handleProjectCardMove}
  onMouseLeave={handleProjectCardLeave}
>
<img className='project-hover-media w-190 h-100 object-cover rounded-lg' src={d} alt="Luxury living interior project" />
<div className='project-metric-badge'>
  <p className='text-[1.2rem] leading-[1] font-semibold'>Bespoke Joinery</p>
  <p className=' text-[.8rem] leading-[1] font-semibold'>in 6 Weeks</p>
</div>
</div>
<h1 className='mt-3 text-3xl font-semibold'>Contemporary Marble Kitchen</h1>
<p className='text-md font-bold'>Luxury Cabinetry & Lighting</p>
    </div>

</div>

<Link to='/projects' className=' flex ml-70 absolute -mt-40'>
  <button type='button' className='all-projects-stack' aria-label='View all projects'>
    <span className='stack-shape stack-back-primary' aria-hidden='true'></span>
    <span className='stack-shape stack-back-pink' aria-hidden='true'></span>
    <span className='stack-shape stack-back-dark' aria-hidden='true'></span>
    <span className='stack-shape stack-middle' aria-hidden='true'>

    </span>
    <span className='stack-shape stack-front'>
      <span className='stack-front-copy font-cbyg'> View All Projects</span>
    </span>
  </button>
</Link>


</div>



      </section>

      <div aria-hidden='true' className='h-[310vh]' />

      
    </div>
  )
}

export default Home1
