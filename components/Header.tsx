'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Heart, BarChart2, ShoppingCart, User, Menu, X } from 'lucide-react'
import { useCart } from '../src/app/context/card-context'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { state } = useCart()
  const cartCount = state.items.length

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-bold whitespace-nowrap cursor-pointer">PrimPosh</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/products" className="hover:text-black">Products</Link>
          <Link href="/blog" className="hover:text-black">Blog</Link>
          <Link href="/about" className="hover:text-black">About us</Link>
          <Link href="/contacts" className="hover:text-black">Contacts</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-gray-700">
          <Heart className="w-5 h-5 hover:text-black cursor-pointer" />
          <BarChart2 className="w-5 h-5 hover:text-black cursor-pointer" />
          <div className="relative">
            <Link href="/checkout">
              <ShoppingCart className="w-5 h-5 hover:text-black cursor-pointer" />
            </Link>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1.5 text-xs">
              {cartCount}
            </span>
          </div>
          <User className="w-5 h-5 hover:text-black cursor-pointer hidden md:inline" />

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 border-t">
          <nav className="flex flex-col gap-4 text-gray-600 font-medium">
            <Link href="/" className="hover:text-black">Home</Link>
            <Link href="/products" className="hover:text-black">Products</Link>
            <Link href="/blog" className="hover:text-black">Blog</Link>
            <Link href="/about" className="hover:text-black">About us</Link>
            <Link href="/contacts" className="hover:text-black">Contacts</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
