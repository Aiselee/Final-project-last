'use client'
import { Send } from 'lucide-react'

export default function Footer() {
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
          <div className="relative mt-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full border-b border-gray-400 bg-transparent px-2 py-2 pr-10 placeholder-gray-400 outline-none"
            />
            <Send className="absolute right-2 top-2.5 text-blue-500 w-5 h-5" />
          </div>
        </div>

        {/* Footer columns */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-black mb-2">Service</h3>
          <p>Pricing</p>
          <p>Support</p>
          <p>Easy Return</p>
          <p>Faq’s</p>
          <p>Manufactures</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-black mb-2">About Us</h3>
          <p>Contact Us</p>
          <p>Careers</p>
          <p>Portfolio</p>
          <p>Testimonials</p>
          <p>Support Center</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-black mb-2">Pages</h3>
          <p>News</p>
          <p>Products</p>
          <p>Legal</p>
          <p>Site Map</p>
          <p>Orders</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-black mb-2">Location</h3>
          <p>New York</p>
          <p>Los Angeles</p>
          <p>Chicago</p>
          <p>Houston</p>
          <p>Washington</p>
        </div>
      </div>
    </footer>
  )
}
