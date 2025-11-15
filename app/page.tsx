import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { GuitarCollection } from '@/components/guitar-collection'
import { Lessons } from '@/components/lessons'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { Testimonials } from '@/components/testimonials'
import { Gallery } from '@/components/gallery'
import { Contact } from '@/components/contact'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <GuitarCollection />
      <Lessons />
      <Services />
      <Process />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
