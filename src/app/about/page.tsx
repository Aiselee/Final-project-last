import { Users, Package, Leaf, Globe, Clock, ThumbsUp } from 'lucide-react';
import PartnersSection from '../../../components/PartnersSection';

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="w-full bg-[#f4e7db] py-20 flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-semibold text-gray-800">About Us</h1>
          <p className="mt-2 text-sm text-gray-600">Home &gt; About Us</p>
        </div>
      </section>

      {/* Image Composition + Text Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Image Composition */}
          <div className="w-full lg:w-1/2 relative h-[400px] overflow-hidden">
            {/* Top Left */}
            <img
              src="/pics/abouthero1.webp"
              alt="About 1"
              className="absolute top-0 left-0 w-1/2 h-auto max-w-[260px] z-10"
            />

            {/* Top Right */}
            <img
              src="/pics/abouthero2.webp"
              alt="About 2"
              className="absolute top-0 right-0 w-1/2 h-auto max-w-[260px] z-20"
            />

            {/* Bottom Centered */}
            <img
              src="/pics/abouthero3.webp"
              alt="About 3"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-auto max-h-[240px] object-cover z-0"
            />
          </div>

          {/* Text block */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="uppercase text-sm text-gray-500 mb-2 tracking-widest">About us</p>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              The Best Skin Shine Is What We Provide For You
            </h2>
            <p className="text-gray-600 mb-4 leading-7">
              We believe that beauty starts with healthy skin and confidence. Our mission is to create products that enhance your
              natural radiance using gentle, effective, and science-backed ingredients. Whether you're starting a new skincare
              journey or refining your self-care routine, we're here to guide you with expert-approved solutions.
            </p>
            <p className="text-gray-600 leading-7">
              From our carefully crafted creams to daily serums, we combine tradition and innovation to deliver visible results you
              can trust. Because every face tells a story — and we want yours to shine, naturally and unapologetically.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Block */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
<p className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-10">
            We are committed to bringing high-quality, skin-loving formulas made with ingredients you can pronounce. Every product is a
            reflection of our belief that beauty should feel good, do good, and last long. From the first touch to the final result, we
            promise authenticity, care, and results that make you shine with confidence.
          </p>

          <div className="mt-12">
            <p className="text-lg font-semibold text-gray-900">Natalia Lisa</p>
            <p className="text-sm text-gray-500">CEO & Founder</p>
          </div>
        </div>
      </section>

      <section className="py-20">
  <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
    {/* Image */}
    <div className="w-full lg:w-1/2">
      <img
        src="/pics/aboutbanner.webp"
        alt="Promo Banner"
        className="w-full h-auto rounded shadow"
      />
    </div>

    {/* Text */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <p className="text-sm uppercase text-gray-500 tracking-wide mb-2">Get up to 50% off</p>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Great Deals on Organic Skincare</h2>
      <p className="text-gray-600 mb-6 leading-7">
        Explore our exclusive line of clean and healthy beauty products designed to nourish your skin from within.
      </p>
      <button className="bg-[#6c4a3f] text-white py-3 px-6 rounded text-sm uppercase tracking-wide">
        Explore Now
      </button>
    </div>
  </div>
</section>

<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
    {/* 1 */}
    <div className="flex flex-col items-center">
      <Users className="w-8 h-8 mb-2 text-[#6c4a3f]" />
      <h3 className="text-2xl font-bold text-gray-800">50K</h3>
      <p className="text-gray-600">Satisfied Customers</p>
    </div>

    {/* 2 */}
    <div className="flex flex-col items-center">
      <Package className="w-8 h-8 mb-2 text-[#6c4a3f]" />
      <h3 className="text-2xl font-bold text-gray-800">65+</h3>
      <p className="text-gray-600">Cosmetics Creams</p>
    </div>

    {/* 3 */}
    <div className="flex flex-col items-center">
      <Leaf className="w-8 h-8 mb-2 text-[#6c4a3f]" />
      <h3 className="text-2xl font-bold text-gray-800">35</h3>
      <p className="text-gray-600">Organic Products</p>
    </div>

    {/* 4 */}
    <div className="flex flex-col items-center">
      <Globe className="w-8 h-8 mb-2 text-[#6c4a3f]" />
      <h3 className="text-2xl font-bold text-gray-800">150K</h3>
      <p className="text-gray-600">Global Stores</p>
    </div>

    {/* 5 */}
    <div className="flex flex-col items-center">
      <Clock className="w-8 h-8 mb-2 text-[#6c4a3f]" />
      <h3 className="text-2xl font-bold text-gray-800">15</h3>
      <p className="text-gray-600">Years of Experience</p>
    </div>

    {/* 6 */}
    <div className="flex flex-col items-center">
      <ThumbsUp className="w-8 h-8 mb-2 text-[#6c4a3f]" />
      <h3 className="text-2xl font-bold text-gray-800">98%</h3>
      <p className="text-gray-600">Positive Feedback</p>
    </div>
  </div>
</section>
<section className="py-20 bg-[#f4e7db]">
  <div className="container mx-auto px-4 text-center">
    <p className="text-sm uppercase tracking-wide text-gray-600 mb-2">Team Members</p>
    <h2 className="text-3xl font-bold text-gray-800 mb-10">Beauty Team</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { id: 1, name: 'Julia Santos' },
        { id: 2, name: 'Mia Harper' },
        { id: 3, name: 'Olivia Bennett' },
        { id: 4, name: 'Emma Collins' },
      ].map((member) => (
        <div key={member.id} className="flex flex-col items-center">
          <img
            src={`/pics/aboutteam${member.id}.webp`}
            alt={member.name}
            className="w-40 h-40 object-cover rounded-full mb-4 shadow"
          />
          <p className="text-lg font-medium text-gray-800">{member.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<PartnersSection />
    </main>

  );
}
