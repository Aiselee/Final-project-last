'use client'

const partners = [
  '/pics/partner1.webp',
  '/pics/partner2.webp',
  '/pics/partner3.webp',
  '/pics/partner4.webp',
  '/pics/partner5.webp',
  '/pics/partner6.webp',
  '/pics/partner7.webp',
]

export default function PartnersSection() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="w-full max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
          {partners.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Partner ${i + 1}`}
              className="h-12 object-contain grayscale hover:grayscale-0 hover:opacity-80 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
