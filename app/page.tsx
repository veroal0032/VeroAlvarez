import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProjectCarousel from '@/components/ProjectCarousel'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#FAFAF7] min-h-screen">
      <Navbar />
      <Hero />
      <ProjectCarousel />
      <AboutSection />
      <Footer />
    </main>
  )
}
