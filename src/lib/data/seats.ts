export interface StackedBarData {
  label: PartyType;
  amount: number;
  color: string;
  image?: string;
}

export type PartyType = typeof PARTIES[number];

export const PARTIES = [
  'Liberi e Uguali',
  'Centro Sinistra',
  'Centro Sinistra',
  'Movimento 5',
  'Centro Destra',
  'Forza Italia',
  'Lega',
  'Partito Democratico',
  'Frateli',
  'Non assegnati',
  'Casapound Italia',
  "Noi con l'Italia UDC",
  '+Europa',
  'SVP - PATT',
] as const;

export const CHAMBER_SEATS: StackedBarData[] = [
  {
    label: 'Liberi e Uguali',
    amount: 14,
    color: '#FC3116',
    image: '/images/loghi/lib.jpg',
  },
  {
    label: 'Centro Sinistra',
    amount: 86,
    color: 'darkred',
  },
  {
    label: 'Partito Democratico',
    amount: 24,
    color: 'red',
    image: '/images/loghi/patito.jpg',
  },
  {
    label: 'Movimento 5',
    amount: 221,
    color: '#EECC00',
    image: '/images/loghi/movimento.jpg',
  },
  {
    label: 'Centro Destra',
    amount: 109,
    color: '#2B6DAB',
  },
  {
    label: 'Forza Italia',
    amount: 59,
    color: '#0E68A7',
    image: '/images/loghi/fi.jpg',
  },
  {
    label: 'Lega',
    amount: 73,
    color: '#096224',
    image: '/images/loghi/lega.jpg',
  },
  {
    label: 'Frateli',
    amount: 19,
    color: '#096224',
    image: '/images/loghi/fti.jpg',
  },
  {
    label: 'SVP - PATT',
    amount: 2,
    color: '#6B3D6A',
  },
];

export const SENATE_SEATS: StackedBarData[] = [
  {
    label: 'Liberi e Uguali',
    amount: 4,
    color: '#FC3116',
    image: '/images/loghi/lib.jpg',
  },
  {
    label: 'Centro Sinistra',
    amount: 13,
    color: 'darkred',
  },
  {
    label: 'Partito Democratico',
    amount: 43,
    color: 'red',
    image: '/images/loghi/patito.jpg',
  },
  {
    label: 'Movimento 5',
    amount: 112,
    color: '#EECC00',
    image: '/images/loghi/movimento.jpg',
  },
  {
    label: 'Centro Destra',
    amount: 58,
    color: '#2B6DAB',
  },
  {
    label: 'Forza Italia',
    amount: 33,
    color: '#0E68A7',
    image: '/images/loghi/fi.jpg',
  },
  {
    label: 'Lega',
    amount: 37,
    color: '#096224',
    image: '/images/loghi/lega.jpg',
  },
  {
    label: 'Frateli',
    amount: 7,
    color: '#074A71',
    image: '/images/loghi/fti.jpg',
  },
];
