// Site configuration
export const SITE = {
  title: 'AS Assembly Solutions SA',
  description: 'Spécialiste en fabrication de sous-ensembles, ensembles et machines complètes',
  url: 'https://assemblysolutions.ch',
  author: 'AS Assembly Solutions SA',
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const;

