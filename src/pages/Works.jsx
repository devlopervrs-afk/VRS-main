import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { allProjects, getProjectSlug } from '../data/projects';

const filterOptions = ['All', 'Residential', 'Commercial', 'Hospitality', 'Retail', 'Education', 'Labor Accommodations'];

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${getProjectSlug(project)}`}
      className='work-card overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_12px_34px_rgba(10,18,40,0.08)] flex flex-col transition hover:-translate-y-0.5'
    >
      <div className='h-[240px] w-full overflow-hidden shrink-0'>
        <img
          src={project.image}
          alt={project.title}
          className='h-full w-full object-cover transition-transform duration-700 hover:scale-[1.05]'
          loading='lazy'
        />
      </div>

      <div className='flex flex-col flex-grow p-5 space-y-4'>
        <div className='flex items-center justify-between gap-3'>
          <span className='rounded-full border border-black/20 bg-black/5 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.1em] text-black uppercase'>
            {project.sector}
          </span>
          <span className='text-[0.75rem] font-medium text-black/60'>{project.location}</span>
        </div>

        <div className='flex-grow'>
          <h3 className='text-[1.25rem] leading-snug font-semibold text-[#0b1329]'>{project.title}</h3>
          <p className='mt-1 text-[0.85rem] leading-relaxed text-black/70 line-clamp-2'>{project.scope}</p>
        </div>

        <div className='grid grid-cols-2 gap-3 border-t border-black/10 pt-4 text-[0.8rem]'>
          <div>
            <span className='block text-[0.65rem] uppercase tracking-wider text-black/50 mb-1'>Client</span>
            <span className='font-medium text-black line-clamp-1'>{project.client}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Works() {
  const [activeFilter, setActiveFilter] = useState('All');

  const featuredProjects = useMemo(() => allProjects.filter((item) => item.featured), []);
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return allProjects;
    return allProjects.filter((item) => item.sector === activeFilter);
  }, [activeFilter]);

  return (
    <main className='-mx-5 px-5 pb-12 text-black sm:pb-16'>
      <section className='pb-8 pt-16 sm:pb-10 sm:pt-20 lg:pb-12 lg:pt-24'>
        <div className='mt-3 flex flex-col gap-5 px-4 sm:px-5 lg:flex-row lg:items-end lg:justify-between'>
          <h1 className='work-hero-title text-[18vw] font-semibold leading-[0.84] tracking-tight text-[#0b1329] sm:text-[12vw] lg:text-[8vw]'>
            Delivered Projects
          </h1>
          <p className='work-hero-copy max-w-[560px] text-sm leading-relaxed text-black/70 sm:text-base lg:pb-3'>
            Explore our portfolio of turnkey interior fit-outs and custom joinery executed by V R S Technical Services across the UAE and GCC.Explore our portfolio of turnkey interior fit-outs and custom joinery executed by V R S Technical Services across the UAE and GCC.
          </p>
        </div>
      </section>

      <section className='work-grid grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4 p-5'>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <section className='mt-10 rounded-lg border border-black/10 bg-[#f8f9fc] p-4 sm:p-5 m-5'>
        <div className='mb-3 flex items-center justify-between gap-3'>
          <p className='text-[0.7rem] tracking-[0.12em] text-black/55 uppercase'>
            Showing {filteredProjects.length} Project{filteredProjects.length === 1 ? '' : 's'}
          </p>
        </div>

        <div className='flex flex-wrap items-center gap-2'>
          {filterOptions.map((item) => (
            <button
              key={item}
              type='button'
              onClick={() => setActiveFilter(item)}
              className={`rounded-full px-4 py-2 text-[0.72rem] tracking-[0.12em] uppercase transition ${
                activeFilter === item
                  ? 'bg-black text-white'
                  : 'border border-black/15 bg-white text-black/75 hover:border-black/45'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className='work-grid mt-6 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4 p-5'>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <section className='mt-12 rounded-lg border border-black/15 p-6 text-black sm:p-8 m-5'>
        <div className='flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between'>
          <div className='max-w-[760px]'>
            <p className='text-[0.7rem] tracking-[0.14em] text-black/75 uppercase'>Project Enquiry</p>
            <h2 className='mt-2 text-2xl font-semibold leading-tight sm:text-3xl'>Planning A Similar Fit-Out In UAE Or GCC?</h2>
            <p className='mt-3 text-sm leading-relaxed text-black/80 sm:text-base'>
              Share your scope, required joinery details, and location. Our team will provide a practical execution approach and accurate project estimate.
            </p>
          </div>

          <div className='flex flex-wrap items-center gap-3'>
            <Link
              to='/contact'
              className='rounded-full bg-black px-5 py-2.5 text-[0.72rem] font-medium tracking-[0.14em] text-white uppercase transition hover:-translate-y-0.5'
            >
              Request Site Visit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Works;
