import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '400', '600', '800'] })

export const metadata = {
  title: 'DEMO',
  description: 'PROJECT DEMO',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <Main />
        {children}
        </body>
    </html>
  )
}
