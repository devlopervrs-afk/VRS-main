import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MainLayout({children}) {
  return (
<div>

<div className='fixed left-0 right-0 top-0 z-50 p-3 sm:p-5'>
    <Navbar/>
</div>

<div className='pt-24 sm:pt-28'>
{children}
</div>

<div className='p-5'>
    <Footer/>
</div>

</div>
  )
}

export default MainLayout
