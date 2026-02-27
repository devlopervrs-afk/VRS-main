import React from 'react'
import Marquee from 'react-fast-marquee'

const Logo1 = 'https://ail-media.pages.dev/1.png';
const Logo2 = 'https://ail-media.pages.dev/2.png';
const Logo4 = 'https://ail-media.pages.dev/4.png';
const Logo5 = 'https://ail-media.pages.dev/5.png';
const Logo6 = 'https://ail-media.pages.dev/6.png';
const Logo7 = 'https://ail-media.pages.dev/7.png';
const Logo8 = 'https://ail-media.pages.dev/8.png';
const Logo9 = 'https://ail-media.pages.dev/9.png';
const Logo10 = 'https://ail-media.pages.dev/10.png';
const Logo11 = 'https://ail-media.pages.dev/11.png';
const Logo12 = 'https://ail-media.pages.dev/12.png';
const Logo13 = 'https://ail-media.pages.dev/13.png';
const Logo14 = 'https://ail-media.pages.dev/14.png';
const Logo15 = 'https://ail-media.pages.dev/15.png';
const Logo16 = 'https://ail-media.pages.dev/16.png';
const Logo17 = 'https://ail-media.pages.dev/17.png';
const Logo20 = 'https://ail-media.pages.dev/20.png';
const Logo21 = 'https://ail-media.pages.dev/21.png';
const Logo23 = 'https://ail-media.pages.dev/23.png';
const Logo24 = 'https://ail-media.pages.dev/24.png';
const Logo25 = 'https://ail-media.pages.dev/25.png';





function Marque() {
  return (
    <section className='relative w-full overflow-hidden  mt-16'>

<h1 className='text-3xl font-bold text-center'>Trusted by</h1>

      <div className='mx-auto w-full max-w-[1400px] space-y-10'>
        <Marquee speed={80}  autoFill gradient={false} direction='left'>
<img className="sm:h-40 h-25 " src={Logo1} alt="" />
<img className="sm:h-40 h-25 " src={Logo2} alt="" />
<img className="sm:h-40 h-25 " src={Logo4} alt="" />
<img className="sm:h-40 h-25 " src={Logo5} alt="" />
<img className="sm:h-40 h-25 " src={Logo6} alt="" />
<img className="sm:h-40 h-25 " src={Logo7} alt="" />
<img className="sm:h-40 h-25 " src={Logo8} alt="" />
<img className="sm:h-40 h-25 " src={Logo9} alt="" />
<img className="sm:h-40 h-25 " src={Logo10} alt="" />
<img className="sm:h-40 h-25 " src={Logo11} alt="" />
<img className="sm:h-40 h-25 " src={Logo12} alt="" />

        </Marquee>

        <Marquee speed={80}  autoFill gradient={false} direction='right'>
<img className="sm:h-40 h-25 " src={Logo14} alt="" />
<img className="sm:h-40 h-25 " src={Logo15} alt="" />
<img className="sm:h-40 h-25 " src={Logo16} alt="" />
<img className="sm:h-40 h-25 " src={Logo17} alt="" />
<img className="sm:h-40 h-25 " src={Logo20} alt="" />
<img className="sm:h-40 h-25 " src={Logo21} alt="" />
<img className="sm:h-40 h-25 " src={Logo23} alt="" />
<img className="sm:h-40 h-25 " src={Logo24} alt="" />
<img className="sm:h-40 h-25 " src={Logo25} alt="" />
<img className="sm:h-40 h-25 " src={Logo13} alt="" />

        </Marquee>
      </div>

    </section>
  )
}

export default Marque
