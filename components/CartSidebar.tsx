'use client'
import Link from 'next/link'
import { useCart } from '../src/app/context/card-context'
import { X, Plus, Minus, Trash2 } from 'lucide-react'
import { useEffect, useRef, useMemo } from 'react'

export default function CartSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { state, dispatch } = useCart()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  const totalPrice = useMemo(() => {
    return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }, [state.items])

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div
        ref={ref}
        className="absolute right-0 top-0 w-full max-w-md h-full bg-white shadow-lg flex flex-col"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {state.items.length === 0 ? (
            <p className="text-gray-500 text-sm">Your cart is empty.</p>
          ) : (
            state.items.map((item, index) => (
              <div key={index} className="flex gap-4 border rounded p-2 items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{item.name}</h4>
                  <p className="text-xs text-gray-500">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => dispatch({ type: 'DECREASE_QUANTITY', index })}
                      className="p-1 border rounded hover:bg-gray-100"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      onClick={() => dispatch({ type: 'INCREASE_QUANTITY', index })}
                      className="p-1 border rounded hover:bg-gray-100"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => dispatch({ type: 'REMOVE_ITEM', index })}
                  className="text-gray-500 hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {state.items.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="text-sm text-gray-600">Total:</span>
              <span className="text-lg font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <Link href="/checkout" onClick={onClose}>
              <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
