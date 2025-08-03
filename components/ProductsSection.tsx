'use client'
import { useCart } from '../src/app/context/card-context'
import ProductCard from './ProductCard'

const products = [
  {
    title: 'Moisturizing Lotion',
    price: '$18.99',
    image: '/pics/product1.png',
  },
  {
    title: 'Daily Face Wash',
    price: '$12.50',
    image: '/pics/product2.png',
  },
  {
    title: 'Sunscreen SPF 50',
    price: '$22.00',
    image: '/pics/product3.png',
  },
  {
    title: 'Hydrating Serum',
    price: '$27.75',
    image: '/pics/product4.png',
  },
]

export default function ProductsSection() {
  const { dispatch } = useCart();
  return (
    <section className="bg-[#f9f9f9] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Hot Selling Products</h2>
          <p className="text-gray-500 text-sm mt-2">Shop the most loved skincare favorites</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              onAddToCart={() => {
                dispatch({
                  type: 'ADD_ITEM',
                  payload: {
                    id: index + 1000,
                    name: product.title,
                    price: parseFloat(product.price.replace('$', '')),
                    image: product.image,
                  },
                })
                window.dispatchEvent(new CustomEvent('open-cart'))
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
