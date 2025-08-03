'use client'

const blogs = [
  {
    direction: 'text-first',
    author: 'John Mathew',
    title: 'The Best Facials For Every Skin Type',
    excerpt: 'Porta facilisis dui, justo laoreet penatibus. Eros penatibus justo, tempor ligula vestibulum vestibulum lacus mauris himenaeos quisque proin. Hostra dapibus...',
    image: '/pics/blog1.png',
  },
  {
    direction: 'image-first',
    author: 'John Mathew',
    title: 'Tips And Tricks For Every Hair Type',
    excerpt: 'Eros penatibus justo, tempor ligula vestibulum vestibulum lacus mauris himenaeos quisque proin. Hostra dapibus varius et semper semper rutrum ad…',
    image: '/pics/blog2.png',
  },
  {
    direction: 'text-first',
    author: 'John Mathew',
    title: 'Treatments Designed To Melt Away Tension',
    excerpt: 'Hostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus libero viverra tempus netus diam vestibulum lorem tincidunt…',
    image: '/pics/blog3.png',
  },
]

export default function BlogSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="uppercase text-sm text-[#a77265] tracking-wide">Trending</p>
          <h2 className="text-4xl font-semibold text-[#542420]">Latest Beauty Blog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="flex flex-col h-full justify-between border rounded shadow-sm overflow-hidden">
              {blog.direction === 'text-first' && (
                <>
                  <div className="p-6 flex flex-col gap-3">
                    <p className="text-sm text-gray-400">{blog.author}</p>
                    <h3 className="font-semibold text-gray-800 leading-snug">{blog.title}</h3>
                    <p className="text-sm text-[#733c2b]">{blog.excerpt}</p>
                    <a href="/blog-posts/masks-at-home" className="inline-block border border-gray-800 px-4 py-2 text-xs tracking-widest hover:bg-black hover:text-white transition w-max mt-2">
                      READ MORE
                    </a>
                  </div>
                  <div className="overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </>
              )}
              {blog.direction === 'image-first' && (
                <>
                  <div className="overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <p className="text-sm text-gray-400">{blog.author}</p>
                    <h3 className="font-semibold text-gray-800 leading-snug">{blog.title}</h3>
                    <p className="text-sm text-[#733c2b]">{blog.excerpt}</p>
                    <a href="/blog-posts/tips-for-hair" className="inline-block border border-gray-800 px-4 py-2 text-xs tracking-widest hover:bg-black hover:text-white transition w-max mt-2">
                      READ MORE
                    </a>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
