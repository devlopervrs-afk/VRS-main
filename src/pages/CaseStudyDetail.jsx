import React from 'react';
import { Link, useParams } from 'react-router-dom';
import caseStudies from '../data/caseStudies';

function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return (
      <main className='px-5 pb-16 pt-16 font-switzer text-black'>
        <div className='mx-auto w-full max-w-4xl rounded-2xl border border-black/10 p-8'>
          <h1 className='text-3xl font-semibold'>Case study not found</h1>
          <p className='mt-3 text-black/70'>The requested case study does not exist or may have been moved.</p>
          <Link to='/case-studies' className='mt-5 inline-flex rounded-full bg-black px-4 py-2 text-xs uppercase text-white'>
            Back To Case Studies
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className='px-5 pb-16 pt-14 font-switzer text-black'>
      <section className='mx-auto w-full max-w-[1280px]'>
        <Link to='/case-studies' className='text-[0.72rem] tracking-[0.12em] text-black/60 uppercase'>
          Back To Case Studies
        </Link>

        <div className='mt-3 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]'>
          <img
            src={study.heroImage}
            alt={study.title}
            className='h-[420px] w-full rounded-2xl object-cover sm:h-[520px]'
          />

          <div className='rounded-2xl border border-black/10 bg-[#f8f9fc] p-6'>
            <p className='text-[0.7rem] tracking-[0.14em] text-black/55 uppercase'>{study.sector}</p>
            <h1 className='mt-2 text-3xl font-semibold leading-tight text-[#0b1329] sm:text-4xl'>{study.title}</h1>
            <p className='mt-2 text-sm text-black/65'>{study.location}</p>

            <div className='mt-5 space-y-3 text-sm'>
              <p>
                <span className='text-black/55'>Client:</span> <span className='font-medium'>{study.client}</span>
              </p>
              <p>
                <span className='text-black/55'>Project Value:</span>{' '}
                <span className='font-semibold text-[#1A3278]'>{study.projectValue}</span>
              </p>
              <p>
                <span className='text-black/55'>Duration:</span> <span className='font-medium'>{study.duration}</span>
              </p>
            </div>

            <div className='mt-5 border-t border-black/10 pt-4'>
              <p className='text-[0.72rem] tracking-[0.1em] text-black/55 uppercase'>Services Delivered</p>
              <div className='mt-2 flex flex-wrap gap-2'>
                {study.services.map((service) => (
                  <span key={service} className='rounded-full border border-black/20 px-3 py-1 text-xs'>
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto mt-8 grid w-full max-w-[1280px] grid-cols-1 gap-5 lg:grid-cols-3'>
        <article className='rounded-2xl border border-black/10 p-5'>
          <p className='text-[0.7rem] tracking-[0.12em] text-black/55 uppercase'>Challenge</p>
          <p className='mt-2 text-sm leading-relaxed text-black/75'>{study.challenge}</p>
        </article>
        <article className='rounded-2xl border border-black/10 p-5'>
          <p className='text-[0.7rem] tracking-[0.12em] text-black/55 uppercase'>Scope</p>
          <p className='mt-2 text-sm leading-relaxed text-black/75'>{study.scope}</p>
        </article>
        <article className='rounded-2xl border border-black/10 p-5'>
          <p className='text-[0.7rem] tracking-[0.12em] text-black/55 uppercase'>Execution</p>
          <p className='mt-2 text-sm leading-relaxed text-black/75'>{study.execution}</p>
        </article>
      </section>

      <section className='mx-auto mt-6 grid w-full max-w-[1280px] grid-cols-1 gap-5 lg:grid-cols-2'>
        <img src={study.gallery[0]} alt={`${study.title} gallery 1`} className='h-72 w-full rounded-2xl object-cover' />
        <img src={study.gallery[1]} alt={`${study.title} gallery 2`} className='h-72 w-full rounded-2xl object-cover' />
      </section>

      <section className='mx-auto mt-8 grid w-full max-w-[1280px] grid-cols-1 gap-5 lg:grid-cols-[1.05fr_0.95fr]'>
        <article className='rounded-2xl border border-black/10 p-6'>
          <p className='text-[0.7rem] tracking-[0.12em] text-black/55 uppercase'>Outcomes</p>
          <ul className='mt-3 space-y-2 text-sm text-black/80'>
            {study.outcomes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>

        <article className='rounded-2xl border border-black/10 bg-[#f8f9fc] p-6'>
          <p className='text-[0.7rem] tracking-[0.12em] text-black/55 uppercase'>Client Feedback</p>
          <p className='mt-3 text-base leading-relaxed text-black/80'>"{study.testimonial}"</p>
          <p className='mt-4 text-sm font-medium text-black/75'>{study.testimonialBy}</p>
        </article>
      </section>

      <section className='mx-auto mt-10 w-full max-w-[1280px] rounded-2xl border border-black/15 p-6 sm:p-8'>
        <h2 className='text-2xl font-semibold leading-tight sm:text-3xl'>Planning A Similar Project?</h2>
        <p className='mt-3 max-w-[760px] text-sm leading-relaxed text-black/75 sm:text-base'>
          Share your scope, location, and timeline. Our team will provide a practical execution roadmap and estimate.
        </p>
        <div className='mt-5 flex flex-wrap gap-3'>
          <Link
            to='/contact'
            className='rounded-full bg-black px-5 py-2.5 text-[0.72rem] font-medium tracking-[0.14em] text-white uppercase'
          >
            Request Site Visit
          </Link>
          <a
            href='tel:+971524048123'
            className='rounded-full border border-black/40 px-5 py-2.5 text-[0.72rem] tracking-[0.14em] text-black uppercase'
          >
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
}

export default CaseStudyDetail;
