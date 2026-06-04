import type { Metadata } from 'next'
import {
  Darker_Grotesque,
  Inter,
  Caveat,
  Montserrat,
  Plus_Jakarta_Sans,
  Nunito,
  Fredoka,
  Poppins,
} from 'next/font/google'
import './globals.css'

const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-darker-grotesque',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-caveat',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nunito',
  display: 'swap',
})

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-fredoka',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Verónica Alvarez — UX/UI Designer',
  description:
    'Venezuelan-born designer based in Buenos Aires. Combining UX/UI, no-code, and digital experiences.',
  openGraph: {
    title: 'Verónica Alvarez — UX/UI Designer',
    description: 'Venezuelan-born designer based in Buenos Aires.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${darkerGrotesque.variable} ${inter.variable} ${caveat.variable} ${montserrat.variable} ${plusJakartaSans.variable} ${nunito.variable} ${fredoka.variable} ${poppins.variable}`}
    >
      <body className="bg-[#FAFAF7] text-[#333333] font-inter antialiased">
        {children}
      </body>
    </html>
  )
}
