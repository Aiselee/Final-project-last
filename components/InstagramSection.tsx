'use client'

const images = [
  '/pics/insta1.webp',
  '/pics/insta2.webp',
  '/pics/insta3.webp',
  '/pics/insta4.webp',
  '/pics/insta5.webp',
]

export default function InstagramSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <p className="uppercase text-sm text-[#a77265] tracking-wide">Insta Shop</p>
        <h2 className="text-4xl font-semibold text-[#542420]">Tag us on instagram</h2>
      </div>

      <div className="flex overflow-hidden gap-2 justify-center">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden w-1/5">
            <img
              src={src}
              alt={`Instagram ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 hover:rotate-[3deg]"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
