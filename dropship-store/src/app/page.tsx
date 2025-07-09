import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import TrendingProducts from '@/components/TrendingProducts'
import NewsletterPopup from '@/components/NewsletterPopup'
import CategoryShowcase from '@/components/CategoryShowcase'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedProducts />
      <CategoryShowcase />
      <TrendingProducts />
      <Testimonials />
      <Footer />
      <NewsletterPopup />
    </main>
  )
}
