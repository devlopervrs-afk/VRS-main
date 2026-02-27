import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className='flex min-h-[65vh] w-full items-center justify-center px-4 py-16 sm:px-6'>
      <div className='w-full max-w-[760px] rounded-[24px] border border-black/10 bg-[#f8f9ff] p-8 text-center shadow-[0_18px_40px_rgba(15,30,79,0.1)] sm:p-12'>
        <p className='font-switzer text-[0.78rem] tracking-[0.16em] text-[#1A3278]/75 uppercase'>Error 404</p>
        <h1 className='mt-3 font-switzer text-[2rem] leading-tight font-semibold text-[#0b1329] sm:text-[2.7rem]'>
          Page Not Found
        </h1>
        <p className='mx-auto mt-4 max-w-[560px] font-switzer text-[0.95rem] leading-relaxed text-black/70 sm:text-[1.02rem]'>
          The page you are looking for does not exist or may have been moved.
        </p>

        <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
          <Link
            to='/'
            className='rounded-full bg-[#1A3278] px-5 py-2.5 font-switzer text-[0.74rem] tracking-[0.14em] text-white uppercase transition duration-300 hover:-translate-y-0.5 hover:bg-[#102866]'
          >
            Go To Home
          </Link>
          <Link
            to='/contact'
            className='rounded-full border border-[#1A3278]/35 bg-white px-5 py-2.5 font-switzer text-[0.74rem] tracking-[0.14em] text-[#1A3278] uppercase transition duration-300 hover:-translate-y-0.5 hover:border-[#1A3278]'
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
