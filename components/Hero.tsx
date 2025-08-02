export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Левая карточка */}
        <div className="relative min-h-[500px] overflow-hidden group rounded">
          <img
            src="/pics/hero-woman.png"
            alt="Woman"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          </div>

        {/* Средняя карточка */}
        <div className="flex flex-col justify-center items-center text-center bg-[#c79f85] min-h-[500px] rounded p-6">
          <h2 className="text-white text-2xl font-bold">Use Our Cosmetics</h2>
          <p className="text-white mt-2 text-sm">Best For Your Natural Skin Look</p>
          <a
            href="/shop"
            className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Shop Now
          </a>
        </div>

        {/* Правая карточка */}
        <div className="relative min-h-[500px] overflow-hidden group rounded">
          <img
            src="/pics/hero-serum.png"
            alt="Serum"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}
