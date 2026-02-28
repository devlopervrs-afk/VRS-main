import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const ChooseUs = () => {
  const sectionRef = useRef(null)
  const imageWrapRef = useRef(null)
  const imageCardRef = useRef(null)

  const differentiators = [
    {
      category: 'IN-HOUSE TECHNICAL DEPTH',
      items: [
        { id: '01', name: 'Dedicated in-house capability for shop drawings, sample approvals, and execution-ready detailing.' },
      ],
    },
    {
      category: 'JOINERY CONTROL',
      items: [
        { id: '02', name: 'Factory-backed custom joinery delivery for doors, wardrobes, kitchens, cabinetry, and wood packages.' },
      ],
    },
    {
      category: 'PROJECT GOVERNANCE',
      items: [
        { id: '03', name: 'Structured project management with itemized estimates, planned schedules, and execution coordination.' },
      ],
    },
    {
      category: 'PROVEN DELIVERY SCALE',
      items: [
        { id: '04', name: 'Track record across hospitality, residential, retail, commercial, and institutional project segments.' },
      ],
    },
    {
      category: 'REGIONAL EXECUTION',
      items: [
        { id: '05', name: 'Operational readiness for Dubai, wider UAE, and GCC project requirements with quality-first finishing.' },
      ],
    },
  ]

  useLayoutEffect(() => {
    const sectionElement = sectionRef.current
    if (!sectionElement) return

    const textElements = sectionElement.querySelectorAll('h1, h2, h3, p, span, [data-rise-text]')
    const imageWrapElement = imageWrapRef.current
    const imageCardElement = imageCardRef.current
    let removeMouseHandlers = () => {}

    const context = gsap.context(() => {
      gsap.set(textElements, { autoAlpha: 0, y: 56, filter: 'blur(10px)' })

      if (imageWrapElement) {
        gsap.set(imageWrapElement, { autoAlpha: 0, y: 64, scale: 0.96 })
      }

      const revealTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement,
          start: 'top 62%',
          toggleActions: 'play none none none',
          once: true,
        },
      })

      revealTimeline.to(textElements, {
        autoAlpha: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.35,
        stagger: 0.08,
        ease: 'power4.out',
      }, 0)

      if (imageWrapElement) {
        revealTimeline.to(
          imageWrapElement,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.55,
            ease: 'power4.out',
          },
          0.08
        )

        const floatTween = gsap.to(imageWrapElement, {
          x: () => gsap.utils.random(-24, 24),
          y: () => gsap.utils.random(-48, -18),
          rotation: () => gsap.utils.random(-3.6, 3.6),
          scale: () => gsap.utils.random(0.985, 1.06),
          duration: () => gsap.utils.random(4.2, 7.4),
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          repeatRefresh: true,
          paused: true,
        })

        revealTimeline.call(() => {
          floatTween.play()
        }, [], '>-0.12')
      }

      if (imageWrapElement && imageCardElement) {
        gsap.set(imageCardElement, {
          transformPerspective: 1000,
          transformOrigin: '50% 50%',
          transformStyle: 'preserve-3d',
        })

        const xTo = gsap.quickTo(imageCardElement, 'x', { duration: 0.32, ease: 'power3.out' })
        const yTo = gsap.quickTo(imageCardElement, 'y', { duration: 0.32, ease: 'power3.out' })
        const rotateYTo = gsap.quickTo(imageCardElement, 'rotationY', { duration: 0.42, ease: 'power3.out' })
        const rotateXTo = gsap.quickTo(imageCardElement, 'rotationX', { duration: 0.42, ease: 'power3.out' })

        const handleMouseMove = (event) => {
          const bounds = imageWrapElement.getBoundingClientRect()
          const px = (event.clientX - bounds.left) / bounds.width - 0.5
          const py = (event.clientY - bounds.top) / bounds.height - 0.5

          xTo(px * 22)
          yTo(py * 18)
          rotateYTo(px * 13)
          rotateXTo(py * -11)
        }

        const handleMouseEnter = () => {
          gsap.to(imageCardElement, {
            scale: 1.055,
            duration: 0.28,
            ease: 'power2.out',
          })
        }

        const handleMouseLeave = () => {
          xTo(0)
          yTo(0)
          rotateYTo(0)
          rotateXTo(0)
          gsap.to(imageCardElement, {
            scale: 1,
            duration: 0.45,
            ease: 'power3.out',
          })
        }

        imageWrapElement.addEventListener('mousemove', handleMouseMove)
        imageWrapElement.addEventListener('mouseenter', handleMouseEnter)
        imageWrapElement.addEventListener('mouseleave', handleMouseLeave)

        removeMouseHandlers = () => {
          imageWrapElement.removeEventListener('mousemove', handleMouseMove)
          imageWrapElement.removeEventListener('mouseenter', handleMouseEnter)
          imageWrapElement.removeEventListener('mouseleave', handleMouseLeave)
        }
      }
    }, sectionElement)

    return () => {
      removeMouseHandlers()
      context.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} className='w-full text-black'>
      <div className='mx-auto w-full max-w-[1280px] px-4 pt-16 pb-24 sm:px-6 sm:pt-20 md:pt-28 lg:pt-36'>
        <div className='mb-14 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row'>
          <div className='mt-1 flex items-start gap-3 pt-2 lg:w-1/4'>
            <div className='mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#22409a]'></div>
            <h2 data-rise-text className='font-switzer text-[0.72rem] tracking-[0.18em] text-black/80 uppercase'>
              WHY VRS
            </h2>
          </div>

          <div className='space-y-1 lg:w-3/4'>
            <h1 data-rise-text className='font-switzer text-[2.45rem] leading-[0.95] font-semibold tracking-tight text-[#0b1329] sm:text-[3.2rem] lg:text-[4.25rem]'>
              Why Clients Choose VRS Over Other Fit-Out Companies
            </h1>
            <p data-rise-text className='font-switzer text-[1.05rem] leading-[1.35] tracking-tight md:text-[1.2rem] lg:max-w-[95%]'>
              VRS combines in-house technical capability, controlled joinery execution, and structured project management.
              This gives clients better visibility, stronger quality control, and lower execution risk from planning to handover.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14 '>
          <div className='rounded-lg border border-black/6 bg-white/95 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.08)] md:p-10'>
            <div className='mb-6 grid gap-3 rounded-lg border border-black/10 bg-[#f8f9fc] p-4 text-sm leading-relaxed text-black/70 md:grid-cols-2'>
              <p data-rise-text>Typical Market Challenge: fragmented vendors and limited accountability.</p>
              <p data-rise-text>VRS Approach: integrated design, joinery, and execution with one delivery structure.</p>
            </div>

            <div className='flex flex-col gap-9'>
              {differentiators.map((section) => (
                <div
                  key={section.category}
                  className='grid gap-5 border-b border-black/10 pb-7 last:border-none last:pb-0 md:grid-cols-[0.36fr_0.64fr] md:gap-8'
                >
                  <div>
                    <span data-rise-text className='font-switzer text-[0.86rem] leading-[1.5] tracking-[0.08em] text-black/55 uppercase whitespace-pre-line'>
                      {section.category}
                    </span>
                  </div>

                  <div className='flex flex-col gap-3'>
                    {section.items.map((item) => (
                      <div
                        key={item.id}
                        data-rise-text
                        className='font-switzer text-[1rem] leading-[1.35] tracking-tight text-black transition-all duration-500 hover:translate-x-2 hover:text-[#22409a] md:text-[1.08rem]'
                      >
                        ({item.id}) {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-8 border-t border-black/10 pt-6 flex flex-wrap gap-3'>
              <Link
                to='/contact'
                className='rounded-full bg-[#22409a] px-5 py-2.5 font-switzer text-[0.72rem] tracking-[0.14em] text-white uppercase transition duration-300 hover:translate-y-[-1px] hover:bg-[#1a3278]'
              >
                Request Site Visit
              </Link>
              <Link
                to='/projects'
                className='rounded-full border border-black/30 px-5 py-2.5 font-switzer text-[0.72rem] tracking-[0.14em] text-black uppercase transition duration-300 hover:bg-black/5'
              >
                View Delivered Projects
              </Link>
            </div>
          </div>

          <div ref={imageWrapRef} className='relative mx-auto w-full max-w-[350px] lg:mx-0 lg:ml-auto mt-30'>
            <div ref={imageCardRef} className='relative will-change-transform'>
              <div className='pointer-events-none absolute -inset-3 -z-10 rounded-lg bg-[#22409a]/16 rotate-[4deg]'></div>
              <img
                src='https://cityfurnish.com/blog/wp-content/uploads/2023/09/modren-room-home-interior-design-min.jpg'
                alt='Interior design workspace'
                className='h-[430px] w-full rounded-lg object-cover shadow-[0_24px_55px_rgba(0,0,0,0.18)]'
              />
              <div className='absolute right-4 bottom-4 rounded-lg bg-black/70 px-4 py-3 text-white backdrop-blur-sm'>
                <p data-rise-text className='font-switzer text-[0.62rem] tracking-[0.16em] text-white/80 uppercase'>Verified Delivery Strength</p>
                <p data-rise-text className='font-switzer text-[1.05rem] leading-tight font-semibold text-[#F39838]'>1000+ Projects | 9 Specialized Departments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs
