import '../_styles/globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { cookies } from 'next/headers';
import { ClientCookiesProvider } from '../../components/cookiesComponent/cookiesClient';

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TokenService from '@/services/tokenService'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  admin,
  customer
}: {
  children: React.ReactNode
  admin: React.ReactNode
  customer: React.ReactNode
}) {

  // const { getTokenCookies } = TokenService()

  // const isAuthenticated = getTokenCookies()

  // useEffect(() => {
  //   console.log(isAuthenticated, 'aiiii');
  // }, [])
  return (
    <html lang="en">
      <body className={`${roboto.className} bodyClass`}>
        <ClientCookiesProvider value={cookies().getAll()}>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {admin}
          {/* {children} */}
        {/* '' */}
          {/* {customer} */}
        </ClientCookiesProvider>
      </body>
    </html>
  )
}
