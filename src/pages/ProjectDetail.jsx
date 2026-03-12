import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { allProjects, findProjectBySlug, getProjectSlug } from '../data/projects';

function ProjectDetail() {
  const { slug } = useParams();
  const project = findProjectBySlug(slug || '');

  if (!project) {
    return (
      <main className='px-5 pb-16 pt-16 font-switzer text-black'>
        <div className='mx-auto w-full max-w-4xl rounded-lg border border-black/10 p-8'>
          <h1 className='text-3xl font-semibold'>Project not found</h1>
          <p className='mt-3 text-black/70'>The requested project does not exist or may have been moved.</p>
          <Link to='/projects' className='mt-5 inline-flex rounded-full bg-black px-4 py-2 text-xs uppercase text-white'>
            Back To Projects
          </Link>
        </div>
      </main>
    );
  }

  const related = allProjects
    .filter((item) => item.id !== project.id && item.sector === project.sector)
    .slice(0, 3);

  return (
    <main className='px-5 pb-16 pt-14 font-switzer text-black'>
      <section className='mx-auto w-full max-w-[1280px]'>
        <Link to='/projects' className='text-[0.72rem] tracking-[0.12em] text-black/60 uppercase'>
          Back To Projects
        </Link>

        <div className='mt-3 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]'>
          <img src={project.image} alt={project.title} className='h-[420px] w-full rounded-lg object-cover sm:h-[520px]' />

          <div className='rounded-lg border border-black/10 bg-[#f8f9fc] p-6'>
            <p className='text-[0.7rem] tracking-[0.14em] text-black/55 uppercase'>{project.sector}</p>
            <h1 className='mt-2 text-3xl font-semibold leading-tight text-[#0b1329] sm:text-4xl'>{project.title}</h1>
            <p className='mt-2 text-sm text-black/65'>{project.location}</p>

            <div className='mt-5 space-y-3 text-sm'>
              <p><span className='text-black/55'>Client:</span> <span className='font-medium'>{project.client}</span></p>
              <p><span className='text-black/55'>Scope:</span> <span className='font-medium'>{project.scope}</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto mt-8 w-full max-w-[1280px] rounded-lg border border-black/10 p-6'>
        <p className='text-[0.72rem] tracking-[0.12em] text-black/55 uppercase'>Project Overview</p>
        <p className='mt-3 text-sm leading-relaxed text-black/75 sm:text-base'>
          This project was executed as part of our turnkey joinery and fit-out portfolio, with focus on quality finishes,
          schedule discipline, and practical handover standards for {project.sector.toLowerCase()} assets in {project.location}.
        </p>
      </section>

      {related.length > 0 && (
        <section className='mx-auto mt-8 w-full max-w-[1280px]'>
          <h2 className='text-2xl font-semibold'>Related Projects</h2>
          <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-3'>
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/projects/${getProjectSlug(item)}`}
                className='overflow-hidden rounded-lg border border-black/10 bg-white'
              >
                <img src={item.image} alt={item.title} className='h-44 w-full object-cover' loading='lazy' />
                <div className='p-4'>
                  <h3 className='text-base font-semibold text-[#0b1329]'>{item.title}</h3>
                  <p className='mt-1 text-xs text-black/60'>{item.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default ProjectDetail;
