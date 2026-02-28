import React from 'react'
import { FiCheckCircle, FiClock, FiShield, FiUsers } from 'react-icons/fi'

const credibilityStats = [
  { label: 'Projects Finished', value: '1000+', hint: 'Across villas, apartments, office, and retail spaces' },
  { label: 'Specialized Departments', value: '9', hint: 'Self-sustained and well-organized in-house facilities' },
  { label: 'In-House Workforce', value: '30+', hint: 'Qualified carpenters, painters, foremen, and assemblers' },
  { label: 'Service Coverage', value: 'UAE & GCC', hint: 'Delivering projects within UAE and neighboring countries' },
]

const credibilityPillars = [
  {
    icon: FiUsers,
    title: 'Experienced Team',
    copy: 'Designers, site and in-house engineers, and fit-out specialists working as one integrated delivery unit.',
  },
  {
    icon: FiClock,
    title: 'Transparent Timelines',
    copy: 'Detailed and itemized cost estimates alongside detailed timelines and schedules.',
  },
  {
    icon: FiShield,
    title: 'Quality & Finishes',
    copy: 'We take care of the desired quality and materials with the best possible finishes.',
  },
  {
    icon: FiCheckCircle,
    title: 'Turnkey Solutions',
    copy: 'Providing end-to-end turnkey solutions for joinery, interior fit-outs, and events.',
  },
]

function CredibilityBlock() {
  return (
    <section className='w-full px-4 pb-12 sm:px-6 sm:pb-16'>
      <div className='mx-auto w-full max-w-[1280px] overflow-hidden rounded-lg border border-[#1A3278]/10  p-6 shadow-[0_24px_60px_rgba(21,39,99,0.12)] sm:p-8 lg:p-10'>
        <div className='mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between'>
          <div className='max-w-[780px]'>
            <h2 className='mt-2 font-switzer text-[1.55rem] leading-tight font-semibold text-[#0b1329] sm:text-[2rem] lg:text-[2.35rem]'>
              Turnkey Solutions with Uncompromised Quality
            </h2>
            <p className='mt-3 max-w-[700px] font-switzer text-[0.95rem] leading-relaxed text-[#0b1329]/75 sm:text-[1.02rem]'>
              V R S TECHNICAL SERVICES is a leading renovation, fit-out and interior design company in Dubai, UAE. We offer the full range of services to help you create your dream home or commercial space, from smaller renovations to major projects.
            </p>
          </div>

          <a
            href='tel:+971524048123'
            className='inline-flex w-fit items-center rounded-full bg-[#1A3278] px-5 py-2.5 font-switzer text-[0.72rem] tracking-[0.15em] text-white uppercase transition duration-300 hover:-translate-y-0.5 hover:bg-[#0f2462]'
          >
            Book Site Visit
          </a>
        </div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {credibilityStats.map((item) => (
            <article key={item.label} className='rounded-lg border border-[#1A3278]/10 bg-white/80 p-5 shadow-[0_10px_28px_rgba(16,35,95,0.08)] backdrop-blur-sm'>
              <p className='font-switzer text-[0.72rem] tracking-[0.1em] text-[#1A3278]/70 uppercase'>{item.label}</p>
              <p className='mt-2 font-switzer text-[2rem] leading-none font-semibold text-[#1A3278]'>{item.value}</p>
              <p className='mt-3 font-switzer text-[0.86rem] leading-relaxed text-[#0b1329]/70'>{item.hint}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CredibilityBlock