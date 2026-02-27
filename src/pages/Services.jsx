import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Building, ClipboardCheck, Hammer, PenTool, Presentation, Ruler } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const serviceCards = [
  {
    icon: PenTool,
    title: 'Architectural & Interior Design',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
    summary:
      'Concept design, technical detailing, shop drawings, perspective layouts, and coordinated sample selections.',
    deliverables: ['Concept + design intent', 'Shop drawings', 'Material/sample board'],
  },
  {
    icon: ClipboardCheck,
    title: 'Project Management',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356f27?auto=format&fit=crop&w=1400&q=80',
    summary:
      'End-to-end project coordination with itemized cost estimates, phased schedules, and execution tracking.',
    deliverables: ['Cost estimate', 'Execution schedule', 'Progress coordination'],
  },
  {
    icon: Hammer,
    title: 'Custom Joinery Works',
    image:
      'https://images.unsplash.com/photo-1615875605825-5eb9bb5d52cb?auto=format&fit=crop&w=1400&q=80',
    summary:
      'In-house joinery production for solid wood doors, wardrobes, kitchen cabinetry, vanity units, and custom wood packages.',
    deliverables: ['Joinery production', 'Factory finishing', 'On-site installation'],
  },
  {
    icon: Presentation,
    title: 'Exhibitions & Events',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80',
    summary:
      'Design, fabrication, and installation of exhibition stands and event spaces with execution-ready detailing.',
    deliverables: ['Booth design', 'Fabrication package', 'Site assembly'],
  },
  {
    icon: Ruler,
    title: 'Architectural Detailing',
    image:
      'https://images.unsplash.com/photo-1617104551722-3b2d513664c5?auto=format&fit=crop&w=1400&q=80',
    summary:
      'Wood paneling, decorative handrails, flooring detailing, and pergola systems tailored to project specifications.',
    deliverables: ['Detail drawings', 'Fabrication output', 'Finish coordination'],
  },
  {
    icon: Building,
    title: 'Turnkey Fit-Out Solutions',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
    summary:
      'Complete renovation and fit-out delivery for villas, apartments, offices, retail spaces, and mixed-use projects.',
    deliverables: ['Design-to-handover', 'Multi-scope execution', 'Final delivery support'],
  },
];

const processSteps = [
  { id: '01', title: 'Project Brief & Site Review', text: 'Scope capture, site conditions, and objective alignment.' },
  { id: '02', title: 'Design, Drawings & BOQ', text: 'Technical detailing, material selections, and commercial breakdown.' },
  { id: '03', title: 'Execution Planning', text: 'Program finalization, procurement alignment, and team mobilization.' },
  { id: '04', title: 'On-Site Delivery', text: 'Coordinated execution with supervision, QA checks, and reporting.' },
  { id: '05', title: 'Snagging & Handover', text: 'Final inspection, closeout actions, and formal handover.' },
];

function Services() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.services-hero-line', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
      });

      gsap.utils.toArray('.services-reveal').forEach((section) => {
        const cards = section.querySelectorAll('.services-card, .services-step');
        gsap.from(cards, {
          y: 30,
          opacity: 0,
          duration: 0.75,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className='font-switzer px-5 pb-14 pt-14 text-black sm:pb-16 sm:pt-18'>
      <section className='mx-auto w-full max-w-[1280px]'>
        <div className='services-hero-line flex flex-col gap-4 border-b border-black/10 pb-8 sm:pb-10 lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <p className='text-[0.72rem] tracking-[0.16em] text-black/55 uppercase'>Service Route</p>
            <h1 className='mt-2 text-[3.2rem] leading-[0.92] font-semibold tracking-tight text-[#0b1329] sm:text-[4.2rem] lg:text-[5.4rem]'>
              VRS Technical Services
            </h1>
            <h2 className='text-[1.3rem] leading-tight text-black/70 sm:text-[1.6rem] lg:text-[1.8rem]'>
              Turnkey Fit-Out, Joinery, And Project Delivery
            </h2>
          </div>

          <p className='services-hero-line max-w-[560px] text-sm leading-relaxed text-black/70 sm:text-base'>
            We provide integrated renovation, fit-out, and joinery services with in-house technical capability,
            disciplined coordination, and practical execution across UAE and GCC.
          </p>
        </div>

        <div className='services-hero-line mt-5 flex flex-wrap gap-3'>
          <Link
            to='/contact'
            className='rounded-full bg-black px-5 py-2.5 text-[0.72rem] font-medium tracking-[0.14em] text-white uppercase transition hover:-translate-y-0.5'
          >
            Request Site Visit
          </Link>
          <Link
            to='/projects'
            className='rounded-full border border-black/30 px-5 py-2.5 text-[0.72rem] tracking-[0.14em] text-black uppercase transition hover:bg-black/5'
          >
            View Delivered Projects
          </Link>
        </div>
      </section>

      <section className='services-reveal mx-auto mt-10 grid w-full max-w-[1280px] grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'>
        {serviceCards.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className='services-card rounded-2xl border border-black/10 bg-white p-5 shadow-[0_12px_30px_rgba(10,18,40,0.08)] sm:p-6'>
              <div className='mb-4 h-44 w-full overflow-hidden rounded-xl'>
                <img
                  src={item.image}
                  alt={item.title}
                  loading='lazy'
                  className='h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]'
                />
              </div>
              <div className='mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f2f4f8] text-[#1A3278]'>
                <Icon size={20} />
              </div>
              <h3 className='text-[1.25rem] font-semibold leading-tight text-[#0b1329]'>{item.title}</h3>
              <p className='mt-2 text-sm leading-relaxed text-black/70'>{item.summary}</p>

              <div className='mt-4 border-t border-black/10 pt-3'>
                {item.deliverables.map((line) => (
                  <p key={line} className='text-[0.78rem] leading-relaxed text-black/65'>
                    • {line}
                  </p>
                ))}
              </div>
            </article>
          );
        })}
      </section>

      <section className='services-reveal mx-auto mt-12 w-full max-w-[1280px] rounded-2xl border border-black/10 bg-[#f8f9fc] p-5 sm:p-6 lg:p-8'>
        <div className='mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <p className='text-[0.7rem] tracking-[0.14em] text-black/55 uppercase'>Execution Framework</p>
            <h2 className='mt-1 text-2xl font-semibold leading-tight text-[#0b1329] sm:text-3xl'>How We Deliver Projects</h2>
          </div>
          <p className='max-w-[520px] text-sm leading-relaxed text-black/70 sm:text-base'>
            Structured from brief to handover with defined checkpoints, commercial clarity, and coordinated site execution.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5'>
          {processSteps.map((step) => (
            <article key={step.id} className='services-step rounded-xl border border-black/10 bg-white p-4'>
              <p className='text-[0.72rem] font-medium tracking-[0.1em] text-[#1A3278] uppercase'>{step.id}</p>
              <h3 className='mt-1 text-[1.02rem] font-semibold leading-tight text-[#0b1329]'>{step.title}</h3>
              <p className='mt-2 text-[0.82rem] leading-relaxed text-black/65'>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='mx-auto mt-12 w-full max-w-[1280px] rounded-2xl border border-black/15 p-6 sm:p-8'>
        <div className='flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between'>
          <div className='max-w-[760px]'>
            <p className='text-[0.7rem] tracking-[0.14em] text-black/75 uppercase'>Service Enquiry</p>
            <h2 className='mt-2 text-2xl font-semibold leading-tight sm:text-3xl'>Need A Detailed Scope And Estimate?</h2>
            <p className='mt-3 text-sm leading-relaxed text-black/80 sm:text-base'>
              Share your project type, location, and timeline. Our team will propose a practical delivery approach
              aligned with your project goals.
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
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
