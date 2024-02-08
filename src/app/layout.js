import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import { Toaster } from 'react-hot-toast'
import NextTopLoader from 'nextjs-toploader';
import 'bootstrap-icons/font/bootstrap-icons.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
      <NextTopLoader color="#E60000" height={2} speed={200}   showSpinner={false} />
        <Navbar />
        <Toaster />
       <div className=' mt-4'>
       {children} 
       </div>
        </body>
    </html>
  )
}
