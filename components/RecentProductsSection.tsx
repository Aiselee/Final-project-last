'use client'
import ProductCard from './ProductCard'

const recentProducts = [
  { title: 'Anti-Wrinkle Serum', price: '$25.00', image: '/pics/recent1.png' },
  { title: 'Perfect Refining Serum', price: '$39.00', image: '/pics/recent2.png' },
  { title: 'Smoothing Facial Toner', price: '$47.00', image: '/pics/recent3.png' },
  { title: 'Hydrating Face Mist', price: '$35.50', image: '/pics/recent4.png' },
  { title: 'Healthy Glow Daily Face Cream', price: '$23.20', image: '/pics/recent5.png' },
  { title: 'Glossy Lipstick', price: '$41.90', image: '/pics/recent6.png' },
  { title: 'Face Wash Cream', price: '$27.00', image: '/pics/recent7.png' },
  { title: 'Moisturizing Cream', price: '$30.00', image: '/pics/recent8.png' },
]

export default function RecentProductsSection() {
  return (
    <section className="bg-[#fefefe] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest text-gray-400">Best Sellers</p>
          <h2 className="text-3xl font-bold text-gray-800 mt-1">Our Recent Products</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="/products" className="inline-block border px-6 py-2 text-sm rounded hover:bg-black hover:text-white transition">
  View All
</a>
        </div>
      </div>
    </section>
  )
}
