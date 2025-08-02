export default function SPFImportancePage() {
  return (
    <main className="py-10 px-4 max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Daily SPF: Why It Matters</h1>
        <p className="text-sm text-gray-500">Home &gt; Blog &gt; Daily SPF: Why It Matters</p>
      </div>

      <div className="mb-10">
        <img
          src="/pics/blogpage2.webp"
          alt="Daily SPF"
          className="w-full h-auto rounded shadow"
        />
      </div>

      <p className="text-sm text-gray-500 mb-6">Jul 21, 2025</p>

      <article className="space-y-6 text-gray-700 leading-7">
        <p>
          Wearing sunscreen isn’t just for beach vacations — it’s a vital daily habit that protects your skin year-round. UV rays
          penetrate clouds, windows, and even glass — meaning your skin is exposed even on cloudy or indoor days.
        </p>
        <p>
          SPF helps prevent sunburn, premature aging, and skin cancer. Dermatologists recommend using a broad-spectrum SPF 30 or
          higher every morning, regardless of your plans. For oily skin, gel-based SPFs are ideal. For dry skin, opt for creamy or
          hydrating formulations.
        </p>
        <p>
          Don’t forget your neck, ears, and hands — these are often overlooked and show early signs of aging. Reapply every two
          hours if you’re sweating, swimming, or spending time outside.
        </p>

        <div>
          <h2 className="font-semibold text-lg mb-2">What to Look For:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>SPF 30 or higher</li>
            <li>Broad spectrum (UVA + UVB)</li>
            <li>Non-comedogenic (won’t clog pores)</li>
            <li>Water resistant if outdoors</li>
            <li>Zinc oxide or titanium dioxide for sensitive skin</li>
          </ul>
        </div>
      </article>
    </main>
  );
}
