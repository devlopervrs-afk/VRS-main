import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Categorized Unsplash placeholders to match the exact project types
const images = {
  hospitality: 'https://images.unsplash.com/photo-1542314831-c6a4d14effd0?auto=format&fit=crop&w=800&q=80',
  residential: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
  commercial: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  retail: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80',
  education: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
  labor: 'https://images.unsplash.com/photo-1541888081692-06764dbfb511?auto=format&fit=crop&w=800&q=80',
};

// All 48 projects extracted directly from the VRS PDF (Pages 29-32)
const allProjects = [
  // --- Hospitality ---
  { id: 1, title: 'Baron Hotel', sector: 'Hospitality', location: 'Iraq', client: 'Leopisc', scope: 'Doors, Cupboards & Paneling',  image: images.hospitality, featured: true },
  { id: 2, title: 'Kempinski 5 Star Hotel', sector: 'Hospitality', location: 'Djibouti, East Africa', client: 'Nakheel / Taisei Corp.', scope: 'Doors, Cabinets, Pergolas, wall paneling', image: images.hospitality, featured: true },
  { id: 3, title: 'Hawthorn Hotel Apartments', sector: 'Hospitality', location: 'Marina, Dubai', client: 'Drawlink Interiors', scope: 'Doors, Cupboards, Interior, furniture', image: images.hospitality, featured: true },
  
  // --- Retail ---
  { id: 4, title: 'Nautica at BurJuman', sector: 'Retail', location: 'Dubai', client: 'Ceejay', scope: 'Full Joinery Works',  image: images.retail, featured: true },
  { id: 5, title: 'Nautica at Outlet Mall', sector: 'Retail', location: 'Dubai', client: 'Ceejay', scope: 'Full Joinery Works',  image: images.retail, featured: false },
  { id: 6, title: 'Lulu Center', sector: 'Retail', location: 'Dibba, Fujeirah', client: 'Amana Contg', scope: 'Doors',  image: images.retail, featured: false },

  // --- Commercial ---
  { id: 7, title: 'Prayer Room at Dubai Mall', sector: 'Commercial', location: 'Dubai', client: 'Emaar', scope: 'Full Joinery Works',  image: images.commercial, featured: true },
  { id: 8, title: 'Gypsum Ceiling at Entertainment Area', sector: 'Commercial', location: 'Dubai Mall', client: 'Emaar', scope: 'Full Joinery Works',  image: images.commercial, featured: true },
  { id: 9, title: 'G+M+4 Storey Comm. Bldg', sector: 'Commercial', location: 'Dubai', client: 'Ashiyana contg', scope: 'Doors',  image: images.commercial, featured: false },
  { id: 10, title: 'G+M+3 Storey Comm. Building', sector: 'Commercial', location: 'Dubai', client: 'Abdulla Zarouni', scope: 'Doors',  image: images.commercial, featured: false },
  { id: 11, title: 'B+G+M Comm. Bldg at Deirah', sector: 'Commercial', location: 'Dubai', client: 'Allied contg', scope: 'Doors',  image: images.commercial, featured: false },

  // --- Education ---
  { id: 12, title: 'Iranian School', sector: 'Education', location: 'Sharjah', client: 'KQ Contracting', scope: 'Doors',  image: images.education, featured: false },

  // --- Labor Accommodations ---
  { id: 13, title: 'G+4 Labour Accom. At Jebel Ali', sector: 'Labor Accommodations', location: 'Dubai', client: 'Allied contg', scope: 'Doors & Cupboards',  image: images.labor, featured: false },
  { id: 14, title: 'G+2 Labour Camp', sector: 'Labor Accommodations', location: 'Dubai', client: 'ANC', scope: 'Doors',  image: images.labor, featured: false },
  { id: 15, title: 'G+2 Labor Accommodation', sector: 'Labor Accommodations', location: 'Dubai', client: 'Obaid Bin Sheikh Contg', scope: 'Doors',  image: images.labor, featured: false },
  { id: 16, title: 'Labor Camp at Sajja', sector: 'Labor Accommodations', location: 'Sharjah', client: 'Ashiyana Contracting', scope: 'Doors',  image: images.labor, featured: false },
  { id: 17, title: 'G+1 Labour Accom. & Office At Sajja', sector: 'Labor Accommodations', location: 'Sharjah', client: 'Ashiyana contg', scope: 'Doors',  image: images.labor, featured: false },

  // --- Residential (High-Value Multi-Unit & Villas) ---
  { id: 18, title: 'Al Maskan, 33 Nos. Villas', sector: 'Residential', location: 'Dubai', client: 'Three Star Contg.', scope: 'Doors & Cupboards',  image: images.residential, featured: true },
  { id: 19, title: '6 Nos Villas at Al Barsha', sector: 'Residential', location: 'Dubai', client: 'Vista Star Constn', scope: 'Doors, Cupboards & Interior',  image: images.residential, featured: false },
  { id: 20, title: '4 Luxury Villas at Al Barsha-1', sector: 'Residential', location: 'Dubai', client: 'Vista Star Constn.', scope: 'Doors & Cupboards',  image: images.residential, featured: false },
  { id: 21, title: 'G+6+R Building at Me\'aisem First', sector: 'Residential', location: 'Dubai', client: 'Ashiyana Contracting', scope: 'Doors, Wardrobes',  image: images.residential, featured: false },
  { id: 22, title: '(1B+G+10F+R) Building at Al Barsha South 3rd', sector: 'Residential', location: 'Dubai', client: 'Ashiyana Contracting', scope: 'Doors & Frames', image: images.residential, featured: false },
  { id: 23, title: 'G+1+R Villa at Pearl Jumeirah', sector: 'Residential', location: 'Dubai', client: 'Mirwais Alizai', scope: 'Full Joinery Works',  image: images.residential, featured: false },
  { id: 24, title: 'G+1+R Villa at Polo Homes', sector: 'Residential', location: 'Dubai', client: 'Mr. Atul Mittal', scope: 'Full Joinery Works',  image: images.residential, featured: false },
  { id: 25, title: 'B+G+2p+10 Storey Bldg', sector: 'Residential', location: 'Sharjah', client: 'UNEC', scope: 'Doors & Cupboards',  image: images.residential, featured: false },
  { id: 26, title: '10 Villas in Mirdif', sector: 'Residential', location: 'Dubai', client: 'Baith Al Yazi Contg', scope: 'Doors & Cupboards',  image: images.residential, featured: false },
  { id: 27, title: 'G+1+R Villa at Polo Homes', sector: 'Residential', location: 'Dubai', client: 'Ravi Hinduja', scope: 'Full Joinery Works',  image: images.residential, featured: false },
  { id: 28, title: 'B+G+6+Gym Bldg at Al Warqa', sector: 'Residential', location: 'Dubai', client: 'Allied contg', scope: 'Doors, cupboards & Kitchen',  image: images.residential, featured: false },
  { id: 29, title: 'G+1 Residential Villa (4 Nos)', sector: 'Residential', location: 'Dubai', client: 'Mohd. Habib Mohd.', scope: 'Doors',  image: images.residential, featured: false },
  { id: 30, title: '5 Nos G+1 Villas at Al Khawaneej', sector: 'Residential', location: 'Dubai', client: 'Dektor Contg', scope: 'Doors & Cupboards',  image: images.residential, featured: false },
  { id: 31, title: 'G+1 Luxury Villa at Pearl Jumeirah', sector: 'Residential', location: 'Dubai', client: 'Allied contg', scope: 'Doors, Cupboards & Interior',  image: images.residential, featured: false },
  { id: 32, title: 'G+3 Bldg at Dubai Land', sector: 'Residential', location: 'Dubai', client: 'Al Ishrak Contracting', scope: 'Doors & Cupboards',  image: images.residential, featured: false },
  { id: 33, title: 'G+1 Residential Villa (3 Nos)', sector: 'Residential', location: 'Dubai', client: 'Latifa Habib Mohd.', scope: 'Doors',  image: images.residential, featured: false },
  { id: 34, title: '4 Nos G+1 Villas at Mirdif', sector: 'Residential', location: 'Dubai', client: 'Dektor contg', scope: 'Doors & Cupboards',  image: images.residential, featured: false },
  { id: 35, title: '3 Nos Res. Luxury Villas at Jumeira', sector: 'Residential', location: 'Dubai', client: 'YACC Contg', scope: 'Doors & Cabinets',  image: images.residential, featured: false },
  { id: 36, title: '6 Villas at Jumeirah', sector: 'Residential', location: 'Dubai', client: 'Kalki Contg', scope: 'Doors & Cupboards',  image: images.residential, featured: false },
  { id: 37, title: 'B+G+4+R Bldg at Al Murar', sector: 'Residential', location: 'Dubai', client: 'Ashiyana contg', scope: 'Doors',  image: images.residential, featured: false },
  { id: 38, title: '6 Villas at Mirdif', sector: 'Residential', location: 'Dubai', client: 'Ashiyana Contg', scope: 'Doors & Cupboards',  image: images.residential, featured: false },
  { id: 39, title: 'G+1 Luxury Villa at Al Warqa', sector: 'Residential', location: 'Dubai', client: 'Tak Constructions', scope: 'Doors', image: images.residential, featured: false },
  { id: 40, title: 'G+3 Residential Building', sector: 'Residential', location: 'Dubai', client: 'Obaid Bin Sheikh Contg', scope: 'Doors',  image: images.residential, featured: false },
  { id: 41, title: 'G+2 Res Building, Naif', sector: 'Residential', location: 'Dubai', client: 'Rotana Contractin', scope: 'Doors',  image: images.residential, featured: false },
  { id: 42, title: 'G+2+Roof Bldg at Muteena', sector: 'Residential', location: 'Dubai', client: 'Dani Construction', scope: 'Doors',  image: images.residential, featured: false },
  { id: 43, title: 'G+1 Villa at Al Barsha', sector: 'Residential', location: 'Dubai', client: 'Arif Al Abbas', scope: 'Doors & Cupboards',  image: images.residential, featured: false },
  { id: 44, title: 'G+2 Res. Bldg at Muteena', sector: 'Residential', location: 'Dubai', client: 'Dani Construction', scope: 'Doors',  image: images.residential, featured: false },
  { id: 45, title: 'G+1 Villa at Nad Al Hamer', sector: 'Residential', location: 'Dubai', client: 'Ashiyana Contg', scope: 'Doors',  image: images.residential, featured: false },
  { id: 46, title: 'G+1 Villa at Umm Suqueim', sector: 'Residential', location: 'Dubai', client: 'Abdul Rahman Ali', scope: 'Doors',  image: images.residential, featured: false },
  { id: 47, title: 'G+M+1 Building, Naif', sector: 'Residential', location: 'Dubai', client: 'Al Menhal Contrg.', scope: 'Doors',  image: images.residential, featured: false },
  { id: 48, title: 'Al Aweer Farm House', sector: 'Residential', location: 'Dubai', client: 'Ashiyana Contg', scope: 'Doors', image: images.residential, featured: false },
];

// Updated filter options representing actual portfolio segments
const filterOptions = ['All', 'Residential', 'Commercial', 'Hospitality', 'Retail', 'Education', 'Labor Accommodations'];

function ProjectCard({ project }) {
  return (
    <article className='work-card overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_12px_34px_rgba(10,18,40,0.08)] flex flex-col'>
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
    </article>
  );
}

function Works() {
  const rootRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const featuredProjects = useMemo(() => allProjects.filter((item) => item.featured), []);
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return allProjects;
    return allProjects.filter((item) => item.sector === activeFilter);
  }, [activeFilter]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.work-hero-kicker', { y: 18, opacity: 0, duration: 0.7, ease: 'power3.out' });
      gsap.from('.work-hero-title', { y: 28, opacity: 0, duration: 0.85, delay: 0.08, ease: 'power3.out' });
      gsap.from('.work-hero-copy', { y: 20, opacity: 0, duration: 0.7, delay: 0.16, ease: 'power3.out' });

      gsap.utils.toArray('.work-grid').forEach((grid) => {
        const cards = grid.querySelectorAll('.work-card');
        gsap.from(cards, {
          y: 34,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.05, // Faster stagger since there are many cards
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className='-mx-5 px-5 pb-12 text-black sm:pb-16 '>
      <section className='pb-8 pt-16 sm:pb-10 sm:pt-20 lg:pb-12 lg:pt-24'>
        <div className='work-hero-kicker flex items-center justify-between px-4 text-xs tracking-[0.16em] text-black/55 uppercase sm:px-5'>
          <p>Projects Portfolio</p>
          <p>UAE & GCC</p>
        </div>

        <div className='mt-3 flex flex-col gap-5 px-4 sm:px-5 lg:flex-row lg:items-end lg:justify-between'>
          <h1 className='work-hero-title text-[18vw] font-semibold leading-[0.84] tracking-tight text-[#0b1329] sm:text-[12vw] lg:text-[8vw]'>
            Delivered Projects
          </h1>
          <p className='work-hero-copy max-w-[560px] text-sm leading-relaxed text-black/70 sm:text-base lg:pb-3'>
            Explore  verified V R S TECHNICAL SERVICES projects across 6 core sectors. Data reflects actual client scopes, locations.
          </p>
        </div>
      </section>


      {/* Featured Projects Grid */}
      <section className='work-grid grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4 p-5'>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      {/* Filter Options */}
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

      {/* All/Filtered Projects Grid */}
      <section className='work-grid mt-6 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4 p-5'>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <section className='mt-12 rounded-lg border border-black/15 p-6 text-black sm:p-8 m-5'>
        <div className='flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between'>
          <div className='max-w-[760px]'>
            <p className='text-[0.7rem] tracking-[0.14em] text-black/75 uppercase'>Project Enquiry</p>
            <h2 className='mt-2 text-2xl font-semibold leading-tight sm:text-3xl'>
              Planning A Similar Fit-Out In UAE Or GCC?
            </h2>
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
            <a
              href='tel:+971524048123'
              className='rounded-full border border-black/40 px-5 py-2.5 text-[0.72rem] tracking-[0.14em] text-black uppercase transition hover:bg-black/10'
            >
              Call Now
            </a>
            <a
              href='mailto:vrstechservice@gmail.com'
              className='rounded-full border border-black/40 px-5 py-2.5 text-[0.72rem] tracking-[0.14em] text-black uppercase transition hover:bg-black/10'
            >
              Email Team
            </a>
            <Link
              to='/case-studies'
              className='rounded-full border border-black/40 px-5 py-2.5 text-[0.72rem] tracking-[0.14em] text-black uppercase transition hover:bg-black/10'
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Works;
