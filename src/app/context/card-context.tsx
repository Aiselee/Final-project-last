'use client'
import { createContext, useContext, useReducer, ReactNode } from 'react'

type CartItem = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

type Action =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; index: number }
  | { type: 'INCREASE_QUANTITY'; index: number }
  | { type: 'DECREASE_QUANTITY'; index: number }
  | { type: 'CLEAR_CART' }

type CartState = {
  items: CartItem[]
}

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<Action>
}>({ state: { items: [] }, dispatch: () => {} })

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((_, i) => i !== action.index),
      }
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item, i) =>
          i === action.index ? { ...item, quantity: item.quantity + 1 } : item
        ),
      }
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item, i) =>
          i === action.index && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      }
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      }
    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
