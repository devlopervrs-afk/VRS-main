const images = {
  hospitality: 'https://images.unsplash.com/photo-1542314831-c6a4d14effd0?auto=format&fit=crop&w=800&q=80',
  residential: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
  commercial: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  retail: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80',
  education: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
  labor: 'https://images.unsplash.com/photo-1541888081692-06764dbfb511?auto=format&fit=crop&w=800&q=80',
};

export const allProjects = [
  { id: 4, title: 'Nautica at BurJuman', sector: 'Retail', location: 'Dubai', client: 'Ceejay', scope: 'Full Joinery Works', image: images.retail, featured: true },
  { id: 1, title: 'G+1 Villa at Emirates Hills ', sector: 'Retail', location: 'Dubai', client: 'Owner', scope: 'Full Joinery Works', image: images.retail, featured: true },
  { id: 2, title: 'G+1 Villa at Mirador la Coleccion, Arebian Renches', sector: 'Retail', location: 'Dubai', client: 'Owner', scope: 'Full Joinery Works', image: images.retail, featured: true },
  { id: 3, title: 'Occ Room  at Al Warsen Dubai', sector: 'Retail', location: 'Dubai', client: 'Owner', scope: 'Full Joinery Works', image: images.retail, featured: true },
  { id: 5, title: 'Nautica at Dubai Outlet Mall', sector: 'Retail', location: 'Dubai', client: 'Ceejay', scope: 'Full Joinery Works', image: images.retail, featured: false },
  { id: 7, title: 'Prayer Rooms at Dubai Mall', sector: 'Commercial', location: 'Dubai Mall', client: 'Resolve(Emaar)', scope: 'Full Joinery Works', image: images.commercial, featured: true },
  { id: 8, title: 'Gypsum Ceiling at Entertainment Area at Dubai Mall', sector: 'Commercial', location: 'Dubai Mall', client: 'Resolve(Emaar)', scope: 'Full Gypsum Works', image: images.commercial, featured: true },
  { id: 9, title: 'G+M+4 Storey Comm. Bldg at Arjan Dubai', sector: 'Commercial', location: 'Dubai', client: 'Ashiyana contg', scope: 'Doors', image: images.commercial, featured: false },
  { id: 23, title: 'G+1+R Villa at Pearl Jumeirah, Dubai', sector: 'Residential', location: 'Dubai', client: 'Mirwais Alizai', scope: 'Full Joinery Works', image: images.residential, featured: false },
  { id: 24, title: 'G+1+R Villa at Polo Homes, Arabian Renches', sector: 'Residential', location: 'Dubai', client: 'Mr. Atul Mittal', scope: 'Full Joinery Works', image: images.residential, featured: false },
  { id: 27, title: 'G+1+R Villa at Polo Homes, Arabian Renches', sector: 'Residential', location: 'Dubai', client: 'Ravi Hinduja', scope: 'Full Joinery Works', image: images.residential, featured: false },
  ];

export function getProjectSlug(project) {
  const base = String(project.title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `${base}-${project.id}`;
}

export function findProjectBySlug(slug) {
  return allProjects.find((project) => getProjectSlug(project) === slug);
}

