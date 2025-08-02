export default function TipsForHairPage() {
  return (
    <main className="py-10 px-4 max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Tips And Tricks For Every Hair Type</h1>
        <p className="text-sm text-gray-500">Home &gt; Blog &gt; Tips And Tricks For Every Hair Type</p>
      </div>

      <div className="mb-10">
        <img
          src="/pics/blogpage1.webp"
          alt="Tips And Tricks For Every Hair Type"
          className="w-full h-auto rounded shadow"
        />
      </div>

      <p className="text-sm text-gray-500 mb-6">Apr 4, 2025</p>

      <article className="space-y-6 text-gray-700 leading-7">
        <p>
          Managing different hair types doesn’t have to be a struggle. Whether you have straight, wavy, curly, or coily hair,
          knowing what your strands need is the key to maintaining healthy and beautiful locks. In this post, we share expert-backed
          tips that work across all hair types.
        </p>
        <p>
          First, hydration is essential. Many hair concerns like frizz, dullness, and breakage stem from lack of moisture. Use a
          sulfate-free shampoo and a deep conditioner once a week. For styling, avoid excessive heat and always apply a
          heat-protectant.
        </p>
        <p>
          Avoid brushing hair when it's wet (unless you’re using a wide-tooth comb on conditioned strands) and trim regularly to
          prevent split ends. If you're not sure what products work best for your hair, start simple and add one product at a time.
        </p>
        <p>
          Diet and lifestyle also impact hair health. Nutrient-rich foods, hydration, and stress management all contribute to the
          condition of your scalp and strands. Massage your scalp regularly to boost blood flow and encourage hair growth.
        </p>
        <p>
          Switch to microfiber towels to minimize damage after washing. Sleep with your hair in a loose braid or satin bonnet to
          prevent tangles. And don’t underestimate the value of consistent care — small habits lead to long-term results.
        </p>

        <div>
          <h2 className="font-semibold text-lg mb-2">Top Tips:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Use silk pillowcases to reduce breakage overnight</li>
            <li>Don't skip scalp care — a clean scalp promotes growth</li>
            <li>Protect your hair from sun and chlorine during summer</li>
            <li>Consider oiling your ends before every wash</li>
            <li>Trim every 6–8 weeks to keep hair healthy</li>
          </ul>
        </div>
      </article>
    </main>
  );
}
