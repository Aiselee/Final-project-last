'use client'
import { Heart, BarChart2, ShoppingCart } from 'lucide-react'

type Product = {
  title: string
  price: string
  image: string
  onAddToCart?: () => void // 👈 новый необязательный проп
}

export default function ProductCard({ title, price, image, onAddToCart }: Product) {
  return (
    <div className="group relative border rounded overflow-hidden bg-white shadow hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
      />

      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{price}</p>
      </div>

      {/* Hover Add to Cart Button */}
      <div className="absolute bottom-16 left-0 w-full px-4 z-10 opacity-0 group-hover:opacity-100 transition duration-300">
        <button
          className="w-full bg-black/50 text-white py-2 text-sm rounded-md shadow-md backdrop-blur-sm flex items-center justify-center gap-2"
          onClick={() => {
            onAddToCart?.()
          }} // 👈 добавлен хендлер
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>

      {/* Hover side icons */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
        <button className="bg-white p-1 rounded shadow hover:bg-gray-100">
          <Heart className="w-4 h-4 text-gray-700" />
        </button>
        <button className="bg-white p-1 rounded shadow hover:bg-gray-100">
          <BarChart2 className="w-4 h-4 text-gray-700" />
        </button>
      </div>
    </div>
  )
}
