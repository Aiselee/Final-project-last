'use client'
import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.')
      setSubmitted(false)
    } else {
      setError('')
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-[#fcefe9] px-4 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 text-sm text-gray-800">
        {/* Subscribe block */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-[#542420]">
            <span className="text-[#733c2b]">PRIM</span>POSH
          </h1>
          <h2 className="text-lg font-medium text-black">Subscribe Today For Wonderful Offers</h2>
          <p className="text-sm text-gray-600">Elementum pulvinar etiam non quam lacus.</p>

          <form onSubmit={handleSubmit} className="relative mt-2">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-400 bg-transparent px-2 py-2 pr-10 placeholder-gray-400 outline-none"
            />
            <button type="submit" className="absolute right-2 top-2.5 text-blue-500">
              <Send className="w-5 h-5" />
            </button>
          </form>

          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          {submitted && <p className="text-green-600 text-sm mt-1">Thank you for subscribing!</p>}
        </div>

        {/* Column 1 */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold mb-1">Categories</h3>
          <a href="#" className="hover:underline">Face Care</a>
          <a href="#" className="hover:underline">Body Care</a>
          <a href="#" className="hover:underline">Hair Care</a>
          <a href="#" className="hover:underline">Sun Protection</a>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold mb-1">Information</h3>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Returns</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold mb-1">Help</h3>
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Shipping Info</a>
          <a href="#" className="hover:underline">Order Tracking</a>
          <a href="#" className="hover:underline">Support</a>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold mb-1">Follow Us</h3>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">TikTok</a>
          <a href="#" className="hover:underline">YouTube</a>
        </div>
      </div>
    </footer>
  )
}
