import { Karla, Syne, Bebas_Neue } from 'next/font/google';

export const syneFont = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
});

export const bebasNeueFont = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
  weight: '400',
});

export const karlaFont = Karla({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karla',
});
