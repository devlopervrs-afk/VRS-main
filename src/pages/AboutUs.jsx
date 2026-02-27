import React, { useLayoutEffect, useRef } from 'react'
import { LiaArrowDownSolid } from "react-icons/lia";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

function AboutUs() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.about-hero-title', {
        y: 30,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
      });

      gsap.from('.about-hero-copy', {
        y: 26,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: 'power3.out',
      });

      gsap.utils.toArray('.about-reveal').forEach((item) => {
        gsap.from(item, {
          y: 42,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      gsap.utils.toArray('.about-stagger').forEach((row) => {
        const items = row.querySelectorAll('.about-stagger-item');
        gsap.from(items, {
          y: 34,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: row,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className='min-h-screen font-switzer'>
<div
  className='about1 about-reveal h-[70vh] bg-cover bg-center bg-no-repeat px-5 pt-20 sm:pt-24 lg:pt-28 flex justify-between'
  style={{
    backgroundImage:
      "linear-gradient(to top, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.82) 100%), url('https://cdn.decorilla.com/online-decorating/wp-content/uploads/2022/03/Dark-interior-design-for-a-moody-lounge.jpg?width=900')",
  }}
>
        <h1 className='about-hero-title text-white text-7xl  w-1/2 font-black'>Leading Renovation, Fit-Out & Interior Design Company in Dubai</h1>
        <p className='about-hero-copy mt-10 text-white w-[40%] text-2xl'>Providing turnkey solutions for joinery, interior fit-outs, and events with uncompromised quality and the best possible finishes.</p>
</div>

<div className='p-5 about2 about-reveal'>

<div className='flex gap-5'>
    <p className='mt-5 leading-none text-sm text-gray-500 flex flex-col'> Based in <span>Dubai, UAE</span></p>
        <h1 className='text-8xl'>Our Story</h1>
</div>

<div className='flex mt-20 text-xl justify-between items-center'>
<div className='w-[40%] flex items-center justify-center'>
<span className='-rotate-135 border-1 rounded-full p-5 border-black text-[5rem] font-light'><LiaArrowDownSolid /></span>
</div>

<div className='w-[60%] text-lg flex flex-col gap-10'>
    <p>V R S Technical Services was established with a singular goal: to provide exceptional turnkey solutions for joinery, interior fit-outs, and exhibition events. Over the years, we have built a reputation for delivering uncompromised quality and maintaining rigorous standards across various projects within the UAE and neighboring GCC countries.</p>
    <p className='text-gray-500'>Our operations are powered by a dedicated team divided across nine self-sustained and well-organized departments. From our in-house manufacturing facility to our site execution teams, we ensure that every client receives adequate backup, precise shop drawings, and flawless final execution without ever compromising on quality.</p>
</div>

</div>
</div>

<section className='about3 about-reveal px-5 pb-16 pt-8 sm:pt-12'>
  <div className='relative mx-auto flex min-h-[58vh] w-full max-w-6xl items-center justify-center overflow-hidden'>
    <img
      src='https://www.decorilla.com/online-decorating/wp-content/uploads/2022/03/Dark-modern-house-interior-design-for-a-home-office.jpg'
      alt='Modern interior'
      className='h-[68%] w-[48%] object-cover sm:h-[62%] sm:w-[45%]'
      loading='lazy'
    />

    <h2 className='pointer-events-none absolute left-[6%] top-[18%] text-[12vw] font-medium leading-[0.95]  sm:text-[8vw] text-[#E4E4E4]'>
      Explore more
    </h2>
    <h2 className='pointer-events-none absolute bottom-[25%] right-[8%] text-[12vw] font-medium leading-[0.95]  sm:text-[8vw] text-[#E4E4E4]'>
      about us
    </h2>

    <button
      type='button'
      aria-label='Scroll Down'
      className='absolute left-[35%] top-[57%] rounded-full border border-white/60 bg-black/25 p-2 text-5xl text-white backdrop-blur-[1px] transition hover:scale-105'
    >
      <LiaArrowDownSolid />
    </button>

    <div
      aria-hidden='true'
      className='pointer-events-none absolute inset-0 text-[#fcf9f9]'
      style={{ clipPath: 'inset(16% 27.5% 1% 27.5%)' }}
    >
      <h2 className='absolute left-[6%] top-[18%] text-[12vw] font-medium leading-[0.95] t sm:text-[8vw] '>
        Explore more
      </h2>
      <h2 className='absolute bottom-[25%] right-[8%] text-[12vw] font-medium leading-[0.95] text-white sm:text-[8vw]'>
        about us
      </h2>
    </div>

  </div>
</section>

<section className='px-5 py-24 bg-white text-black font-switzer about4 about-reveal'>
  
  <div className='flex flex-col md:flex-row justify-between items-start mb-16 relative'>
    <div className='relative'>
      <h2 className='text-7xl md:text-[8rem] leading-none font-medium tracking-tight'>
        How We Work
      </h2>
    </div>
    <p className='max-w-xs text-gray-500 text-sm md:mr-10 leading-relaxed text-left md:text-right self-end'>
      A proven, structured approach to interior fit-outs and joinery, ensuring precision and uncompromised quality from concept to handover.
    </p>
  </div>

  <div className='about-stagger grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-5'>

    <div className='about-stagger-item flex flex-col gap-6 group'>
      <div className='w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-xl text-gray-500   transition-colors group-hover:bg-black group-hover:text-white'>
        01
      </div>
      <h3 className='text-4xl md:text-5xl leading-[1.1] font-medium'>
        Conceptualization & <br /> Design
      </h3>
      <div className='h-[1px] w-12 bg-gray-300 my-2'></div>
      <p className='text-gray-500 text-sm leading-relaxed max-w-[90%]'>
        We begin by translating your vision into practical architectural and interior designs, focusing on space optimization and aesthetics.
      </p>
    </div>

    <div className='about-stagger-item flex flex-col gap-6 md:mt-40 group'>
      <div className='w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-xl text-gray-500   transition-colors group-hover:bg-black group-hover:text-white'>
        02
      </div>
      <h3 className='text-4xl md:text-5xl leading-[1.1] font-medium'>
        Detailed <br /> Estimating
      </h3>
      <div className='h-[1px] w-12 bg-gray-300 my-2'></div>
      <p className='text-gray-500 text-sm leading-relaxed max-w-[90%]'>
        Transparency is key. We provide comprehensive, itemized cost estimates along with detailed timelines and schedules for execution.
      </p>
    </div>

    <div className='about-stagger-item flex flex-col gap-6 md:mt-80 group'>
      <div className='w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-xl text-gray-500   transition-colors group-hover:bg-black group-hover:text-white'>
        03
      </div>
      <h3 className='text-4xl md:text-5xl leading-[1.1] font-medium'>
        Shop Drawings & <br /> Approvals
      </h3>
      <div className='h-[1px] w-12 bg-gray-300 my-2'></div>
      <p className='text-gray-500 text-sm leading-relaxed max-w-[90%]'>
        Our in-house engineers produce precise shop drawings, visual perspective layouts, and sample boards to ensure absolute accuracy before production.
      </p>
    </div>

  </div>

  <div className='about-stagger grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-5'>

    <div className='about-stagger-item flex flex-col gap-6 group'>
      <div className='w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-xl text-gray-500   transition-colors group-hover:bg-black group-hover:text-white'>
        04
      </div>
      <h3 className='text-4xl md:text-5xl leading-[1.1] font-medium'>
        In-House <br /> Manufacturing
      </h3>
      <div className='h-[1px] w-12 bg-gray-300 my-2'></div>
      <p className='text-gray-500 text-sm leading-relaxed max-w-[90%]'>
        Our dedicated factory facility and specialized departments manufacture custom joinery, cabinetry, and architectural detailing to exact specifications.
      </p>
    </div>

    <div className='about-stagger-item flex flex-col gap-6 md:mt-40 group'>
      <div className='w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-xl text-gray-500   transition-colors group-hover:bg-black group-hover:text-white'>
        05
      </div>
      <h3 className='text-4xl md:text-5xl leading-[1.1] font-medium'>
        Project <br /> Management
      </h3>
      <div className='h-[1px] w-12 bg-gray-300 my-2'></div>
      <p className='text-gray-500 text-sm leading-relaxed max-w-[90%]'>
        Our site engineers and project managers coordinate every aspect of the fit-out, ensuring seamless integration between trades and consistent quality control.
      </p>
    </div>

    <div className='about-stagger-item flex flex-col gap-6 md:mt-80 group'>
      <div className='w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-xl text-gray-500   transition-colors group-hover:bg-black group-hover:text-white'>
        06
      </div>
      <h3 className='text-4xl md:text-5xl leading-[1.1] font-medium'>
        Execution & <br /> Handover
      </h3>
      <div className='h-[1px] w-12 bg-gray-300 my-2'></div>
      <p className='text-gray-500 text-sm leading-relaxed max-w-[90%]'>
        We finalize the installation with the best possible finishes. A thorough walkthrough ensures the space meets our rigorous standards and your complete satisfaction.
      </p>
    </div>

  </div>

</section>

<section className='about5 about-reveal px-5 font-switzer'>
  <h2 className='mb-14 text-center text-6xl font-semibold leading-none md:text-7xl'>
    Our Leadership
  </h2>

  <div className='about-stagger flex justify-between gap-6'>
    <article className='about-stagger-item w-1/3'>
      <img
        src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=900&q=80'
        alt='General Manager'
        className='h-[380px] w-full rounded-3xl object-cover'
        loading='lazy'
      />
      <h3 className='mt-5 text-4xl font-semibold leading-none md:text-3xl'>Vinay Kumar Matu Ram</h3>
      <p className='mt-2 text-2xl text-black/85 md:text-lg'>Owner & General Manager</p>
    </article>

    <article className='about-stagger-item w-1/3'>
      <img
        src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80'
        alt='Project Manager'
        className='h-[380px] w-full rounded-3xl object-cover'
        loading='lazy'
      />
      <h3 className='mt-5 text-4xl font-semibold leading-none md:text-3xl'>Project Management</h3>
      <p className='mt-2 text-2xl text-black/85 md:text-lg'>Site Engineering & Coordination</p>
    </article>

    <article className='about-stagger-item w-1/3'>
      <img
        src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80'
        alt='Factory Manager'
        className='h-[380px] w-full rounded-3xl object-cover'
        loading='lazy'
      />
      <h3 className='mt-5 text-4xl font-semibold leading-none md:text-3xl'>Factory Management</h3>
      <p className='mt-2 text-2xl text-black/85 md:text-lg'>Production & Joinery Operations</p>
    </article>
  </div>
</section>

<section className='about6 about-reveal px-5 py-16 text-[#0f1730] sm:py-20'>
  <div className='mx-auto w-full max-w-7xl rounded-[2rem] border border-[#d9dbe6] bg-[#f7f7fb] p-6 sm:p-10'>
    <div className='flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between'>
      <div>
        <p className='text-xs uppercase tracking-[0.2em] text-[#5f74ab] sm:text-sm'>Start Your Project</p>
        <h2 className='mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl'>
          Let&apos;s Build Your Dream Space in Dubai
        </h2>
        <p className='mt-5 max-w-3xl text-base leading-relaxed text-[#4a5368] sm:text-lg'>
          Whether you&apos;re planning a full renovation or a complete fit-out, our team is ready to help
          you start with clarity and confidence.
        </p>
      </div>

      <div className='flex flex-wrap gap-3'>
        <Link
          to='/contact'
          className='rounded-full bg-black px-7 py-3 text-sm font-medium tracking-[0.14em] text-white transition hover:opacity-90 sm:text-base'
        >
          Book a Consultation
        </Link>
        <a
          href='tel:+971524048123'
          className='rounded-full border border-black/40 px-7 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white sm:text-base inline-flex items-center justify-center'
        >
          Call Us Now
        </a>
      </div>
    </div>

    <div className='about-stagger mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4'>
      <article className='about-stagger-item rounded-3xl border border-[#d9dbe6] bg-white p-6'>
        <p className='text-xs uppercase tracking-[0.12em] text-[#5f74ab]'>Projects Finished</p>
        <h3 className='mt-3 text-5xl font-semibold text-black'>1000+</h3>
        <p className='mt-3 text-lg leading-relaxed text-[#4a5368]'>Across villas, apartments, office, and retail spaces</p>
      </article>
      <article className='about-stagger-item rounded-3xl border border-[#d9dbe6] bg-white p-6'>
        <p className='text-xs uppercase tracking-[0.12em] text-[#5f74ab]'>Specialized Departments</p>
        <h3 className='mt-3 text-5xl font-semibold text-black'>9</h3>
        <p className='mt-3 text-lg leading-relaxed text-[#4a5368]'>Self-sustained and well-organized in-house facilities</p>
      </article>
      <article className='about-stagger-item rounded-3xl border border-[#d9dbe6] bg-white p-6'>
        <p className='text-xs uppercase tracking-[0.12em] text-[#5f74ab]'>In-House Workforce</p>
        <h3 className='mt-3 text-5xl font-semibold text-black'>30+</h3>
        <p className='mt-3 text-lg leading-relaxed text-[#4a5368]'>Qualified carpenters, painters, foremen, and assemblers</p>
      </article>
      <article className='about-stagger-item rounded-3xl border border-[#d9dbe6] bg-white p-6'>
        <p className='text-xs uppercase tracking-[0.12em] text-[#5f74ab]'>Service Coverage</p>
        <h3 className='mt-3 text-4xl font-semibold text-black pt-1 pb-1'>UAE & GCC</h3>
        <p className='mt-3 text-lg leading-relaxed text-[#4a5368]'>Delivering turnkey projects across the region</p>
      </article>
    </div>
  </div>
</section>

    </div>
  )
}

export default AboutUs
