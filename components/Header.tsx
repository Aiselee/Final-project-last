'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Heart, BarChart2, ShoppingCart, User, Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold whitespace-nowrap">PrimPosh</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/shop" className="hover:text-black">Shop</Link>
          <Link href="/blog" className="hover:text-black">Blog</Link>
          <Link href="/about" className="hover:text-black">About us</Link>
          <Link href="/contacts" className="hover:text-black">Contacts</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-gray-700">
          <Heart className="w-5 h-5 hover:text-black cursor-pointer" />
          <BarChart2 className="w-5 h-5 hover:text-black cursor-pointer" />
          <div className="relative">
            <ShoppingCart className="w-5 h-5 hover:text-black cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1.5 text-xs">0</span>
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
            <Link href="/shop" className="hover:text-black">Shop</Link>
            <Link href="/blog" className="hover:text-black">Blog</Link>
            <Link href="/about" className="hover:text-black">About us</Link>
            <Link href="/contacts" className="hover:text-black">Contacts</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
