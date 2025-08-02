'use client'

export default function CategoriesStrip() {
  const categories = [
    '#BODY LOTION',
    '#MOISTURIZERS',
    '#SUNSCREENS',
    '#FACEWASH',
    '#SERUMS',
    '#MASKS',
    '#MAKEUP',
    '#OILS',
    '#CLEANSERS',
    '#TONERS',
  ]

  return (
    <div className="w-full border-y bg-white overflow-hidden py-3">
      <div className="flex animate-marquee whitespace-nowrap gap-10 text-gray-700 text-sm font-medium">
        {[...categories, ...categories].map((cat, index) => (
          <span key={index} className="hover:text-black transition" style={{ minWidth: 'max-content' }}>
            {cat}
          </span>
        ))}
      </div>
    </div>
  )
}
