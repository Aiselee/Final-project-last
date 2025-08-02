export default function MasksAtHomePage() {
  return (
    <main className="py-10 px-4 max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">3 Steps to a Perfect At-Home Facial</h1>
        <p className="text-sm text-gray-500">Home &gt; Blog &gt; 3 Steps to a Perfect At-Home Facial</p>
      </div>

      <div className="mb-10">
        <img
          src="/pics/blogpage5.webp"
          alt="At-Home Facial"
          className="w-full h-auto rounded shadow"
        />
      </div>

      <p className="text-sm text-gray-500 mb-6">May 22, 2025</p>

      <article className="space-y-6 text-gray-700 leading-7">
        <p>
          You don’t have to book a spa visit to enjoy a refreshing facial. With the right products and a little time, you can create
          a soothing, rejuvenating experience right at home. All it takes is three steps — and a bit of consistency.
        </p>
        <p>
          Start with a double cleanse to remove dirt and impurities. Follow up with steam using a bowl of hot water and a towel.
          Steaming helps open pores and soften skin for better product absorption. Next, exfoliate gently and apply a treatment mask
          tailored to your skin type.
        </p>
        <p>
          Rinse the mask and apply a hydrating serum or oil. Lock everything in with moisturizer. Finish with a facial massage using
          upward circular motions to relax muscles and stimulate blood flow. Your skin will feel soft, clean, and revived.
        </p>
        <p>
          Repeat this routine weekly for the best results. Over time, you’ll notice smoother texture, reduced breakouts, and a
          healthier glow — no professional needed!
        </p>

        <div>
          <h2 className="font-semibold text-lg mb-2">Essentials You’ll Need:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Gentle cleanser</li>
            <li>Exfoliating scrub or enzyme mask</li>
            <li>Clay or hydrating mask</li>
            <li>Serum or facial oil</li>
            <li>Moisturizer and sunscreen</li>
          </ul>
        </div>
      </article>
    </main>
  );
}
