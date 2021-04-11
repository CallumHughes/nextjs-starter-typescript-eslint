import React from 'react'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import Layout from '../components/Layout'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default App
