import React, { useState } from 'react';

const faqData = [
  {
    category: 'Services',
    question: 'What specific services does VRS Technical Services provide?',
    answer:
      'We provide turnkey solutions for joinery, interior fit-outs, and events. Our in-house facilities manufacture wooden doors, wardrobes, kitchen cabinets, vanity units, wooden paneling, and pergolas.',
  },
  {
    category: 'Project Types',
    question: 'What types of properties do you work on?',
    answer:
      'Our team handles a wide range of projects including villas, apartments, office spaces, retail environments, hotel interiors, and custom exhibition stands.',
  },
  {
    category: 'Process',
    question: 'How do you manage project timelines and costs?',
    answer:
      'We provide detailed and itemized cost estimates alongside detailed timelines and schedules to ensure transparent and reliable project execution.',
  },
  {
    category: 'Design',
    question: 'Do you handle the design and architectural planning?',
    answer:
      'Yes. We offer comprehensive conceptualization and design, architectural design, and generate precise shop drawings and visual perspective layouts.',
  },
  {
    category: 'Quality',
    question: 'How do you ensure the quality of materials used?',
    answer:
      'We manage the desired quality and materials to achieve the best possible finishes. We also provide adequate backups to our clients with physical samples directly from our in-house manufacturing facility.',
  },
  {
    category: 'Execution',
    question: 'Does your team manage the on-site execution?',
    answer:
      'Absolutely. Our dedicated staff includes experienced project managers, site and in-house engineers, and nine well-organized departments of qualified carpenters, painters, and assemblers.',
  },
  {
    category: 'Custom Joinery',
    question: 'Do you build custom furniture or just install standard units?',
    answer:
      'We manufacture bespoke items. Our facility builds solid wood and veneered reception counters, decorative bookshelves, TV units, walk-in closets, and specialized wood cladding.',
  },
  {
    category: 'Location',
    question: 'Where do you operate?',
    answer:
      'We are based in Al Quoz Industrial Area 4, Dubai, and successfully deliver projects across the UAE and neighboring GCC countries.',
  },
  {
    category: 'Credibility',
    question: 'What is your track record in the region?',
    answer:
      'We have successfully finished over 1,000 projects, ranging from luxury hotel fit-outs like Kempinski to major commercial joinery at Dubai Mall and numerous premium residential villas.',
  },
  {
    category: 'Contact',
    question: 'How can I initiate a project with VRS?',
    answer:
      'You can reach our team directly at +971 52 4048123 or +971 52 4378112 to schedule an initial consultation and site visit.',
  },
];

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className='px-5 pb-20 pt-6 font-switzer text-black '>
      <section className='mx-auto max-w-6xl'>
        <div className='border-b border-black/15 pb-8'>
          <p className='text-xs uppercase tracking-[0.18em] text-black/55 sm:text-sm'>Support</p>
          <h1 className='mt-3 text-6xl font-semibold leading-none sm:text-8xl'>FAQs</h1>
          <p className='mt-5 max-w-3xl text-sm leading-relaxed text-black/65 sm:text-lg'>
            Direct answers about our turnkey joinery, interior fit-out capabilities, and execution process.
          </p>
        </div>

        <div className='mt-7 space-y-3'>
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <article key={item.question} className='rounded-2xl border border-black/10 bg-[#f8f8f8]'>
                <button
                  type='button'
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  className='flex w-full items-start justify-between gap-6 px-4 py-5 text-left sm:px-6 sm:py-6'
                >
                  <div>
                    <p className='text-[10px] uppercase tracking-[0.16em] text-black/45 sm:text-xs'>{item.category}</p>
                    <h2 className='mt-2 text-xl font-medium leading-snug sm:text-2xl'>{item.question}</h2>
                  </div>
                  <span className='mt-1 text-2xl leading-none text-black/70'>{isOpen ? '−' : '+'}</span>
                </button>

                {isOpen && (
                  <div className='border-t border-black/10 px-4 py-4 sm:px-6 sm:py-5'>
                    <p className='max-w-4xl text-sm leading-relaxed text-black/70 sm:text-base'>{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default FAQs;