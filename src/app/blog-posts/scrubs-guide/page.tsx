export default function ScrubsGuidePage() {
  return (
    <main className="py-10 px-4 max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">The Truth About Body Scrubs</h1>
        <p className="text-sm text-gray-500">Home &gt; Blog &gt; The Truth About Body Scrubs</p>
      </div>

      <div className="mb-10">
        <img
          src="/pics/blogpage4.webp"
          alt="Body Scrubs"
          className="w-full h-auto rounded shadow"
        />
      </div>

      <p className="text-sm text-gray-500 mb-6">May 10, 2025</p>

      <article className="space-y-6 text-gray-700 leading-7">
        <p>
          Body scrubs can make your skin feel smooth and refreshed — but only if used correctly. Over-exfoliation or using the wrong
          type of scrub can damage your skin barrier and lead to sensitivity, redness, or breakouts.
        </p>
        <p>
          Sugar scrubs are gentle and good for dry or sensitive skin. Salt scrubs are coarser and better for rough areas like elbows
          and feet. Always scrub in gentle circular motions and follow up with a rich moisturizer to lock in hydration.
        </p>
        <p>
          Limit exfoliation to 1–2 times a week. If your skin feels raw, tight, or stings — it’s a sign to pull back. And remember:
          never use body scrubs on your face — facial skin is much thinner and more delicate.
        </p>

        <div>
          <h2 className="font-semibold text-lg mb-2">Scrub Safely:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Patch test new scrubs on your arm before full use</li>
            <li>Always moisturize after exfoliating</li>
            <li>Don’t scrub after shaving — your skin is already sensitized</li>
            <li>Use lukewarm water, not hot</li>
          </ul>
        </div>
      </article>
    </main>
  );
}
