'use client'
import { Heart, BarChart2, ShoppingCart, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold whitespace-nowrap">PrimPosh</h1>
        <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">Shop</a>
          <a href="#" className="hover:text-black">Blog</a>
          <a href="#" className="hover:text-black">About us</a>
          <a href="#" className="hover:text-black">Contacts</a>
        </nav>
        <div className="flex items-center space-x-4 text-gray-700">
          <Heart className="w-5 h-5 hover:text-black cursor-pointer" />
          <BarChart2 className="w-5 h-5 hover:text-black cursor-pointer" />
          <div className="relative">
            <ShoppingCart className="w-5 h-5 hover:text-black cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1.5 text-xs">0</span>
          </div>
          <User className="w-5 h-5 hover:text-black cursor-pointer" />
        </div>
      </div>
    </header>
  )
}
