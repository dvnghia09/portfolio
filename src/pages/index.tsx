import Head from 'next/head'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import { Analytics } from "@vercel/analytics/react"

export default function Home() {

  return (
    <>
      <Head>
        <title>NGHIA DV</title>
        <meta name="description" content="Website introducing Nghiadv" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <meta property="og:image" content="https://nghiadv.vercel.app/logo.png" />
        <meta property="og:title" content="Nghia DV website" />
        <meta property="og:description" content="Nghia DV website" />
        <meta name="keywords" content="nghiadv"></meta>
        <meta name="author" content="nghiadv"></meta>
      </Head>
      <main>
        <Analytics/>
        <Navbar />
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
