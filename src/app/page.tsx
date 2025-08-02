import Hero from '../../components/Hero'
import CategoriesStrip from '../../components/CategoriesStrip'
import ProductsSection from '../../components/ProductsSection'
import CategoryBannerSection from '../../components/CategoryBannerSection'
import RecentProductsSection from '../../components/RecentProductsSection'
import VideoBannerSection from '../../components/VideoBannerSection'
import TestimonialsSection from '../../components/TestimonialsSection'
import BlogSection from '../../components/BlogSection'
import PartnersSection from '../../components/PartnersSection'
import InstagramSection from '../../components/InstagramSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CategoriesStrip />
      <ProductsSection />
      <CategoryBannerSection />
      <RecentProductsSection />
      <VideoBannerSection />
      <TestimonialsSection />
      <BlogSection />
      <PartnersSection />
      <InstagramSection />
    </main>
  )
}
