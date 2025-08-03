'use client'
import { useCart } from '../../app/context/card-context'
import { useMemo, useState } from 'react'

export default function CheckoutPage() {
  const { state, dispatch } = useCart()
  const [submitted, setSubmitted] = useState(false)

  const total = useMemo(() => {
    return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }, [state.items])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch({ type: 'CLEAR_CART' })
    setSubmitted(true)
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {state.items.length === 0 && !submitted ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {!submitted && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Your Order</h2>
              <ul className="divide-y">
                {state.items.map((item, i) => (
                  <li key={i} className="py-2 flex justify-between">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        {item.quantity} × ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-4 text-lg font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          )}

          {submitted ? (
            <div className="p-4 border rounded text-green-600 font-semibold">
              ✅ Your order has been placed!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  required
                  type="text"
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  required
                  type="email"
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
                <textarea
                  required
                  className="w-full border rounded px-3 py-2 mt-1"
                  rows={3}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
              >
                Place Order
              </button>
            </form>
          )}
        </>
      )}
    </main>
  )
}
