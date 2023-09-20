import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Master Js',
  description: 'E-books',
  other:{
    'theme-color':'#0d1117',
    'color-scheme':'dark only',
    'twitter:image':'',
    'twitter:card':'summary_large-image',
    'og:url':'jsmastery',
    'og:image':'',
    'og:type':'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-black-100 font-poppins'>
        {children}
      </body>
    </html>
  )
}
