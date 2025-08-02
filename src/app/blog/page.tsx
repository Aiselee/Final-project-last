'use client';
import { useState, useMemo } from 'react';

interface BlogPost {
  id: number;
  title: string;
  image: string;
  preview: string;
  date: string;
}

const allPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Secret to Glowing Skin',
    image: '/pics/blogpage1.webp',
    preview:
      'Discover how hydration, gentle exfoliation, and a consistent night routine can reveal your skin’s natural glow. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo, erat nec facilisis aliquet, lacus purus tincidunt mi, et gravida erat velit sed felis. Suspendisse massa elit, condimentum at lacinia in, auctor eleifend dui. Sed tincidunt enim quis vestibulum aliquet. Aenean sit amet condimentum dolor, in porttitor urna. Phasellus ultrices leo vitae ipsum dictum, a lacinia tellus sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus...',
    date: 'Apr 4, 2025',
  },
  {
    id: 2,
    title: 'How to Choose a Cleanser for Oily Skin',
    image: '/pics/blogpage2.webp',
    preview:
      'Not all cleansers are created equal — learn which ingredients to avoid and which to embrace. Suspendisse id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Suspendisse massa elit, condimentum at lacinia in, auctor eleifend dui. Sed tincidunt enim quis vestibulum aliquet. Aenean sit amet condimentum dolor, in porttitor urna. Phasellus ultrices leo vitae ipsum dictum, a lacinia tellus sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam viverra molestie fringilla...',
    date: 'Apr 16, 2025',
  },
  {
    id: 3,
    title: 'Deep Conditioning Tips for Curly Hair',
    image: '/pics/blogpage3.webp',
    preview:
      'Curly hair needs moisture and structure. Learn how deep conditioning can enhance curl definition. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet. Suspendisse massa elit, condimentum at lacinia in, auctor eleifend dui. Sed tincidunt enim quis vestibulum aliquet. Aenean sit amet condimentum dolor, in porttitor urna. Phasellus ultrices leo vitae ipsum dictum, a lacinia tellus sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam viverra molestie...',
    date: 'Apr 28, 2025',
  },
  {
    id: 4,
    title: 'The Truth About Body Scrubs',
    image: '/pics/blogpage4.webp',
    preview:
      'Are sugar or salt scrubs better? We break down how to exfoliate without damaging your skin barrier. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam suscipit purus et diam auctor, vel cursus est gravida. In dolor quam, sagittis non dui id, convallis tincidunt risus. Nam ipsum ante, vehicula et risus eu, eleifend mattis neque. Nulla facilisi. Integer pharetra massa quis gravida vestibulum. Nunc vulputate elit sit amet pellentesque egestas. Vestibulum eget posuere risus. Nullam tempus lacus quis iaculis luctus...',
    date: 'May 10, 2025',
  },
  {
    id: 5,
    title: '3 Steps to a Perfect At-Home Facial',
    image: '/pics/blogpage5.webp',
    preview:
      'You don’t need a spa to treat your face. We explain how to steam, exfoliate, and mask properly. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Nullam suscipit purus et diam auctor, vel cursus est gravida. In dolor quam, sagittis non dui id, convallis tincidunt risus. Nam ipsum ante, vehicula et risus eu, eleifend mattis neque. Nulla facilisi. Integer pharetra massa quis gravida vestibulum. Nunc vulputate elit sit amet pellentesque egestas. Vestibulum eget posuere risus...',
    date: 'May 22, 2025',
  },
  {
    id: 6,
    title: 'Hair Oils That Actually Work',
    image: '/pics/blogpage6.webp',
    preview:
      'Coconut, argan, jojoba… which oil is right for your hair type? Here’s what the science says. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Vestibulum arcu orci, pretium eu ipsum vestibulum, tincidunt dignissim purus. Duis luctus dui porttitor ante sodales, in egestas leo cursus. Quisque id elit lacinia, euismod lectus et, sollicitudin nulla. Donec a pretium risus. Maecenas sagittis tincidunt mi vel suscipit. Donec ac lectus massa...',
    date: 'Jun 3, 2025',
  },
  {
    id: 7,
    title: 'Skincare Myths Busted',
    image: '/pics/blogpage7.webp',
    preview:
      'No, your pores can’t open and close. We tackle 6 common skincare myths you probably believe. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent ut urna magna. Aliquam lectus magna, feugiat ut vehicula non, tristique a dolor. Nunc ultrices pretium sem, lacinia semper sapien mollis at. Etiam maximus dapibus ipsum, ut volutpat arcu finibus a. Etiam et leo ex. Phasellus mi magna, auctor vel ante a, finibus feugiat velit...',
    date: 'Jun 15, 2025',
  },
  {
    id: 8,
    title: 'The Minimalist’s Guide to Beauty',
    image: '/pics/blogpage8.webp',
    preview:
      'Do less and glow more — minimalist skincare routines are rising in popularity for a reason. Aenean lacinia bibendum nulla sed consectetur. Praesent ut urna magna. Aliquam lectus magna, feugiat ut vehicula non, tristique a dolor. Nunc ultrices pretium sem, lacinia semper sapien mollis at. Etiam maximus dapibus ipsum, ut volutpat arcu finibus a. Etiam et leo ex. Phasellus mi magna, auctor vel ante...',
    date: 'Jun 27, 2025',
  },
  {
    id: 9,
    title: 'Weekly Hair Masks You’ll Love',
    image: '/pics/blogpage4.webp',
    preview:
      'Consistent masking improves strength, softness, and shine. Discover the right formula for you. Donec ullamcorper nulla non metus auctor fringilla. Praesent ut urna magna. Aliquam lectus magna, feugiat ut vehicula non, tristique a dolor. Nunc ultrices pretium sem, lacinia semper sapien mollis at. Etiam maximus dapibus ipsum, ut volutpat arcu finibus a. Etiam et leo ex. Phasellus mi magna, auctor vel ante a, finibus feugiat velit volutpat arcu... ',
    date: 'Jul 9, 2025',
  },
  {
    id: 10,
    title: 'Daily SPF: Why It Matters',
    image: '/pics/blogpage6.webp',
    preview:
      'It’s not just for beach days. Daily SPF is essential — even indoors. Here’s what dermatologists say. Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce interdum nisl quam, nec ornare felis tempor sit amet. Pellentesque nec arcu consectetur, blandit odio sed, scelerisque nisl. Proin ullamcorper interdum porttitor. Sed bibendum semper eleifend. Cras ac urna magna. Nam gravida ut metus vitae ullamcorper. Sed at erat urna...',
    date: 'Jul 21, 2025',
  },
  {
    id: 11,
    title: 'Shower Mistakes You Didn’t Know',
    image: '/pics/blogpage2.webp',
    preview:
      'Long, hot showers might feel great but could be drying your skin. Tips for post-shower care. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce interdum nisl quam, nec ornare felis tempor sit amet. Pellentesque nec arcu consectetur, blandit odio sed, scelerisque nisl. Proin ullamcorper interdum porttitor. Sed bibendum semper eleifend. Cras ac urna magna. Nam gravida ut metus vitae ullamcorper...',
    date: 'Aug 2, 2025',
  },
  {
    id: 12,
    title: 'What to Know About Eye Creams',
    image: '/pics/blogpage5.webp',
    preview:
      'Do they really work? The truth about hydration, puffiness, and those miracle claims. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce consectetur eu sem sit amet iaculis. Curabitur eu odio pharetra, gravida tellus a, varius ex. In mattis lorem sed tristique egestas. Morbi sollicitudin fringilla sodales. Morbi euismod maximus bibendum. Nullam egestas volutpat blandit. Mauris in dui libero...',
    date: 'Aug 14, 2025',
  },
];

export default function BlogPage() {
  const postsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    return allPosts.slice(start, start + postsPerPage);
  }, [currentPage]);

  return (
    <main>
      {/* Hero Section */}
      <section className="w-full bg-[#f4e7db] py-20 flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-semibold text-gray-800">Blog</h1>
          <p className="mt-2 text-sm text-gray-600">Home &gt; Blog</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid gap-16">
          {paginatedPosts.map((post) => (
            <article key={post.id} className="flex flex-col lg:flex-row gap-6">
              {/* Image */}
              <div className="lg:w-1/2">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto rounded shadow"
                />
              </div>

              {/* Text */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">
                  {post.preview}{' '}
                  <a href="#" className="text-[#6c4a3f] underline hover:opacity-80">
                    Read more
                  </a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <section className="pb-20">
        <div className="flex justify-center items-center space-x-2">
          {/* Prev arrow */}
          <button
            aria-label="Previous page"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 disabled:opacity-50"
          >
            &larr;
          </button>

          {[...Array(totalPages)].map((_, n) => (
            <button
              key={n}
              onClick={() => setCurrentPage(n + 1)}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentPage === n + 1
                  ? 'bg-[#6c4a3f] text-white'
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {n + 1}
            </button>
          ))}

          {/* Next arrow */}
          <button
            aria-label="Next page"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 disabled:opacity-50"
          >
            &rarr;
          </button>
        </div>
      </section>
    </main>
  );
}
