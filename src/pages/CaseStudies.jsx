import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import caseStudies from '../data/caseStudies';

const filters = ['All', 'Hospitality', 'Commercial', 'Residential'];

function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleItems = useMemo(() => {
    if (activeFilter === 'All') return caseStudies;
    return caseStudies.filter((item) => item.sector === activeFilter);
  }, [activeFilter]);

  return (
    <main className='px-5 pb-16 pt-14 font-switzer text-black'>
      <section className='mx-auto w-full max-w-[1280px] border-b border-black/10 pb-9'>
        <p className='text-xs tracking-[0.16em] text-black/55 uppercase'>Proof Of Delivery</p>
        <h1 className='mt-2 text-[3.1rem] leading-[0.92] font-semibold tracking-tight text-[#0b1329] sm:text-[4.5rem]'>
          Case Studies
        </h1>
        <p className='mt-4 max-w-[760px] text-sm leading-relaxed text-black/70 sm:text-base'>
          Verified project stories showing challenge, execution model, and outcome across hospitality,
          commercial, and residential sectors in UAE and GCC.
        </p>

        <div className='mt-5 flex flex-wrap gap-2'>
          {filters.map((item) => (
            <button
              key={item}
              type='button'
              onClick={() => setActiveFilter(item)}
              className={`rounded-full px-4 py-2 text-[0.72rem] tracking-[0.12em] uppercase transition ${
                activeFilter === item
                  ? 'bg-black text-white'
                  : 'border border-black/20 bg-white text-black/75 hover:border-black/45'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className='mx-auto mt-8 grid w-full max-w-[1280px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
        {visibleItems.map((item) => (
          <article
            key={item.slug}
            className='overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_12px_30px_rgba(10,18,40,0.08)]'
          >
            <img src={item.heroImage} alt={item.title} className='h-56 w-full object-cover' loading='lazy' />
            <div className='p-5'>
              <div className='flex items-center justify-between gap-3'>
                <span className='rounded-full border border-black/20 bg-black/5 px-3 py-1 text-[0.65rem] tracking-[0.1em] uppercase'>
                  {item.sector}
                </span>
                <span className='text-xs text-black/60'>{item.location}</span>
              </div>
              <h2 className='mt-3 text-[1.35rem] font-semibold leading-tight text-[#0b1329]'>{item.title}</h2>
              <p className='mt-2 text-sm leading-relaxed text-black/70'>{item.challenge}</p>

              <div className='mt-4 grid grid-cols-2 gap-3 border-t border-black/10 pt-4 text-[0.78rem]'>
                <div>
                  <p className='text-black/50'>Project Value</p>
                  <p className='font-semibold text-[#1A3278]'>{item.projectValue}</p>
                </div>
                <div>
                  <p className='text-black/50'>Duration</p>
                  <p className='font-semibold text-black'>{item.duration}</p>
                </div>
              </div>

              <Link
                to={`/case-studies/${item.slug}`}
                className='mt-5 inline-flex rounded-full bg-black px-4 py-2 text-[0.72rem] tracking-[0.12em] text-white uppercase'
              >
                View Full Case
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default CaseStudies;
