'use client';

import { useState, useMemo } from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

export default function ProductsPage() {
  const uniqueProducts: Product[] = [
    { id: 1, name: 'Organic Face Cream', image: '/pics/productpage1.png', price: 35.0 },
    { id: 2, name: 'Natural Hair Oil', image: '/pics/productpage2.png', price: 25.8 },
    { id: 3, name: 'Soothing Body Butter', image: '/pics/productpage3.png', price: 80.0 },
    { id: 4, name: 'Herbal Face Wash', image: '/pics/productpage4.png', price: 72.9 },
    { id: 5, name: 'Vitamin C Serum', image: '/pics/productpage5.png', price: 55.0 },
    { id: 6, name: 'Glow Night Cream', image: '/pics/productpage6.png', price: 60.75 },
    { id: 7, name: 'Aloe Vera Gel', image: '/pics/productpage7.png', price: 18.5 },
    { id: 8, name: 'Green Tea Toner', image: '/pics/productpage8.png', price: 28.0 },
    { id: 9, name: 'Mineral Sunscreen', image: '/pics/productpage9.png', price: 45.2 },
    { id: 10, name: 'Lip Hydration Balm', image: '/pics/productpage10.png', price: 68.5 },
    { id: 11, name: 'Charcoal Clay Mask', image: '/pics/productpage11.png', price: 38.0 },
  ];

  const allProducts = useMemo(() => {
    return [
      ...uniqueProducts,
      ...Array.from({ length: 13 }).map((_, i) => {
        const random = uniqueProducts[Math.floor(Math.random() * uniqueProducts.length)];
        return {
          ...random,
          id: uniqueProducts.length + i + 1,
        };
      }),
    ];
  }, []);

  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [minPrice, setMinPrice] = useState(15);
  const [maxPrice, setMaxPrice] = useState(95);

  const filteredProducts = allProducts.filter(
    (p) => p.price >= minPrice && p.price <= maxPrice
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * productsPerPage;
    return filteredProducts.slice(start, start + productsPerPage);
  }, [currentPage, filteredProducts]);

  return (
    <main>
      {/* Hero Section */}
      <section className="w-full bg-[#f4e7db] py-20 flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-semibold text-gray-800">Our Products</h1>
          <p className="mt-2 text-sm text-gray-600">Home &gt; Products</p>
        </div>
      </section>

      {/* Price Filter */}
      <section className="py-8">
  <div className="container mx-auto px-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Price Filter</h3>
    <div className="flex flex-wrap items-center gap-6">
      <label className="flex items-center gap-2">
        <span className="text-sm text-gray-700">From:</span>
        <div className="relative">
          <span className="absolute left-2 top-1.5 text-gray-500 text-sm">$</span>
          <input
            type="number"
            min={15}
            max={95}
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="w-24 border border-gray-300 rounded pl-5 pr-2 py-1 text-sm"
          />
        </div>
      </label>

      <label className="flex items-center gap-2">
        <span className="text-sm text-gray-700">To:</span>
        <div className="relative">
          <span className="absolute left-2 top-1.5 text-gray-500 text-sm">$</span>
          <input
            type="number"
            min={15}
            max={85}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-24 border border-gray-300 rounded pl-5 pr-2 py-1 text-sm"
          />
        </div>
      </label>
    </div>
  </div>
</section>

      {/* Product Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded shadow-sm text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
              <p className="text-[#6c4a3f] font-bold mt-2">
                ${product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <section className="pb-20">
        <div className="flex justify-center items-center space-x-2">
          <button
            aria-label="Previous"
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

          <button
            aria-label="Next"
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
