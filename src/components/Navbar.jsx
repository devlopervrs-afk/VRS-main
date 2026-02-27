import React, { useState } from 'react'
import logo from '../assets/images/logo_black.png'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

const link_class = `font-switzer text-[12px]`
const links = [
  { to: '/projects', label: 'PROJECTS' },
  { to: '/case-studies', label: 'CASE STUDIES' },
  { to: '/services', label: 'SERVICES' },
  { to: '/about', label: 'ABOUT' },
  { to: '/contact', label: 'CONTACT' },
  { to: '/faqs', label: 'FAQs' },
];

  return (
<nav className='relative'>
  <div className='flex items-center justify-between rounded-md border border-white/50 bg-white/70 p-2 backdrop-blur-sm'>
    <div className='bg-black flex w-fit items-center gap-5 p-3 rounded-sm'>
        <Link to='/' className='bg-white p-2 rounded-sm'>
          <img className='h-7' src={logo} alt="VRS logo" />
        </Link>

        <div className='hidden items-center gap-5 nav-links-blur-group text-white lg:flex'>
          {links.map((link) => (
            <Link key={link.to} to={link.to} className={`${link_class} nav-blur-link`}>
              {link.label}
            </Link>
          ))}
        </div>
    </div>

    <div className='hidden lg:block'>
      <Link to='/contact' className='book-call-link text-black font-switzer text-[12px] w-fit h-fit'>
        <span className='book-call-left-arrow' aria-hidden='true'>
          <FaArrowRight />
        </span>
        <span className='book-call-label uppercase'>Request Site Visit</span>
        <span className='book-call-right-arrow' aria-hidden='true'>
          <FaArrowRight />
        </span>
        <span className='book-call-line' aria-hidden='true'></span>
      </Link>
    </div>

    <button
      type='button'
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      onClick={() => setMenuOpen((prev) => !prev)}
      className='grid h-11 w-11 place-items-center rounded-sm bg-black text-white lg:hidden'
    >
      {menuOpen ? <FaXmark className='text-xl' /> : <FaBars className='text-xl' />}
    </button>
  </div>

  {menuOpen && (
    <div className='mt-2 rounded-md border border-black/10 bg-white p-4 shadow-md backdrop-blur-md lg:hidden'>
      <div className='flex flex-col gap-3'>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setMenuOpen(false)}
            className='font-switzer text-sm text-black/90'
          >
            {link.label}
          </Link>
        ))}
        <Link
          to='/'
          onClick={() => setMenuOpen(false)}
          className='mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-black px-4 py-2 text-xs text-white'
        >
          <FaArrowRight />
          Request Site Visit
        </Link>
      </div>
    </div>
  )}
</nav>
  )
}

export default Navbar
