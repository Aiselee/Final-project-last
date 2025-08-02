'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Mrs. Adhars',
    role: 'Aesthetician',
    image: '/pics/testimonial1.png',
    stars: 4,
    text: '“ Lobortis feugiat vivamus at augue eget arcu. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Praesent. “',
  },
  {
    name: 'Mrs. Nishriya',
    role: 'Skin Therapist',
    image: '/pics/testimonial2.png',
    stars: 4,
    text: '“ Velit scelerisque in dictum non consectetur a erat nam at. Fermentum iaculis eu non diam phasellus. Mollis aliquam ut porttitor leo. “',
  },
  {
    name: 'Mrs. Jenifer',
    role: 'Skin Specialist',
    image: '/pics/testimonial3.png',
    stars: 5,
    text: '“ Tincidunt vitae semper quis lectus nulla. Urna et pharetra pharetra massa massa ultricies mi. Dolor sed viverra ipsum nunc aliquet bibendum. “',
  },
]

export default function TestimonialsSection() {
  const [start, setStart] = useState(0)

  const showPrev = () => {
    if (start > 0) setStart(start - 1)
  }

  const showNext = () => {
    if (start + 3 < testimonials.length) setStart(start + 1)
  }

  return (
    <section className="bg-[#fcefe9] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <p className="uppercase text-xs tracking-widest text-gray-500">Testimonials</p>
          <h2 className="text-5xl font-semibold text-[#542420] mt-2 leading-tight">
            Happy <span className="italic text-gray-500">Customers</span><br />
            Thoughts
          </h2>
          <p className="mt-4 text-gray-600">
            Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus.
          </p>
        </div>

        <div className="flex items-center gap-4 mt-8">
          <button onClick={showPrev} className="bg-[#542420] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#3d1a15]">
            <ChevronLeft size={20} />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
            {testimonials.slice(start, start + 3).map((t, i) => (
              <div key={i} className="bg-white rounded-md shadow p-6 flex flex-col justify-between min-h-[280px]">
                <p className="text-[#542420] text-sm mb-6 leading-relaxed">{t.text}</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                    <div className="flex mt-1">
                      {Array.from({ length: 5 }, (_, j) => (
                        <Star key={j} size={16} fill={j < t.stars ? '#facc15' : 'none'} color="#facc15" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={showNext} className="bg-[#542420] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#3d1a15]">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
