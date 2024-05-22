'use client'

import store from '@/lib/store'
import { Provider } from 'react-redux'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:4000'
import Context from '@/context/AppContext'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <Provider store={store}>
        <Context>
          <html lang='en'>
            <body className={inter.className}>
              <Header />
              {children}
            </body>
          </html>
        </Context>
      </Provider>
    </ClerkProvider>
  )
}
