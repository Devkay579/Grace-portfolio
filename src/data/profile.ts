// data/profile.ts – single source of truth for contact details
export const profile = {
  name: 'Folaranmi Aletan',
  firstName: 'Folaranmi',
  role: 'Social Media Manager',
  location: 'Ikorodu, Lagos State',
  email: 'folaranmialetan@gmail.com',
  phones: [
    { display: '+234 912 340 5631', tel: '+2349123405631' },
    { display: '+234 915 339 7304', tel: '+2349153397304' },
  ],
  cv: {
    href: '/cv/Folaranmi-Aletan-CV.pdf',
    filename: 'Folaranmi-Aletan-CV.pdf',
  },
  photo: '/images/grace.jpg',
};

export const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Education', id: 'education' },
  { name: 'Skills', id: 'skills' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Contact', id: 'contact' },
];
