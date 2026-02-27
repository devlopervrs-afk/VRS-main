import React from 'react'
import {  FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa'
import logo from '../assets/images/logo_white.png'
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const socialLinks = [
  { id: 'linkedin', href: 'https://www.linkedin.com/', icon: FaLinkedin, label: 'LinkedIn' },
  { id: 'whatsapp', href: 'https://wa.me/971500000000', icon: FaWhatsapp, label: 'WhatsApp' },
  { id: 'facebook', href: 'https://www.facebook.com/', icon: FaFacebookF, label: 'Facebook' },
  { id: 'instagram', href: 'https://www.instagram.com/', icon: FaInstagram, label: 'Instagram' },
]

function Footer() {
  return (
    <footer className='mt-20 w-full border-t border-black/10 bg-[#1A3278] px-5 py-8 text-white sm:px-7 sm:py-10 rounded-xl'>
      <div className='flex w-full flex-col gap-8'>
        <div className='flex flex-col gap-6 md:flex-row md:items-start md:justify-between'>
          <div className='max-w-[300px]'>
<img src={logo} alt="" />
          </div>

          <div className='flex flex-col gap-3 font-switzer text-[0.88rem] text-white/90'>
          <h1 className='text-2xl font-black'>Quick Links</h1>
<Link className='transition text-md hover:text-[#f7b35a]' to='/projects'>WORK</Link>
<Link className='transition text-md hover:text-[#f7b35a]' to='/case-studies'>CASE STUDIES</Link>
<Link className='transition text-md hover:text-[#f7b35a]' to='/services'>SERVICES</Link>
<Link className='transition text-md hover:text-[#f7b35a]' to='/about'>ABOUT</Link>
<Link className='transition text-md hover:text-[#f7b35a]' to='/contact'>CONTACT</Link>
          </div>

          <div className='flex flex-col gap-3 font-switzer text-[0.88rem] text-white/90'>
          <h1 className='text-2xl font-black'>Reach Out</h1>
            <a href='mailto:info@vrsinteriors.com' className='transition text-lg hover:text-[#f7b35a] flex items-center  gap-2'>
            <span><MdOutlineMailOutline /></span>  info@vrsinteriors.com
            </a>
            <a href='tel:+971 52 404 8123' className='transition text-lg hover:text-[#f7b35a] flex items-center  gap-2'>
             <span><IoMdCall /></span> +971 52 404 8123
            </a>
            <a
              href='https://maps.google.com/?q=Business+Bay,+Dubai,+UAE'
              target='_blank'
              rel='noreferrer'
              className='max-w-[340px] transition text-md hover:text-[#f7b35a] flex  gap-2'
            >
               <span className='mt-1'><LuMapPin /></span> V R S TECHNICAL SERVICES LLC
Street No. 29, Al Quoz Industrial Area 4,
Dubai, U.A.E.
            </a>
          </div>
        </div>

        <div className='h-px w-full bg-white/20' />

        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex items-center gap-3'>
            {socialLinks.map((item) => {
              const IconComponent = item.icon
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target='_blank'
                  rel='noreferrer'
                  aria-label={item.label}
                  className='flex h-9 w-12 items-center justify-center  text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#f7b35a] hover:text-[#f7b35a]'
                >
                  <IconComponent size={23} />
                </a>
              )
            })}
          </div>

          <p className='font-switzer text-[0.7rem] tracking-[0.12em] text-white/65 uppercase'>
            © 2026 VRS Interiors. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
