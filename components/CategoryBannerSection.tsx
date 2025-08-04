'use client'

const banners = [
  {
    title: 'Eye Brow Makeup',
    subtitle: 'Most Attractive',
    image: '/pics/category1.png',
  },
  {
    title: 'Maskara Collections',
    subtitle: 'Classy Look',
    image: '/pics/category2.png',
  },
  {
    title: 'Vitamin Face Serum',
    subtitle: 'Facecare',
    image: '/pics/category3.png',
  },
  {
    title: 'Nourish & Revitalize',
    subtitle: 'Radiant Complexion',
    image: '/pics/category4.png',
  },
]

export default function CategoryBannerSection() {
  return (
    <section className="px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 flex flex-col gap-4">
          <CategoryCard {...banners[0]} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CategoryCard {...banners[2]} />
            <CategoryCard {...banners[3]} />
          </div>
        </div>
        <CategoryCard {...banners[1]} />
      </div>
    </section>
  )
}

function CategoryCard({
  title,
  subtitle,
  image,
}: {
  title: string
  subtitle: string
  image: string
}) {
  return (
    <div className="relative overflow-hidden group rounded">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:translate-x-2"
      />
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="absolute bottom-6 left-6 z-10 text-white">
        <p className="uppercase text-xs tracking-widest">{subtitle}</p>
        <h3 className="text-xl font-semibold">{title}</h3>
        <button className="mt-4 px-4 py-1 border text-xs rounded hover:bg-white hover:text-black transition">
          Shop Now
        </button>
      </div>
    </div>
  )
}
