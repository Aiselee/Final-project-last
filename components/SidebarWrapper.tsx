'use client'
import { useEffect } from 'react'
import { CartSidebarProvider, useCartSidebar } from '../hooks/use-cart-sidebar'
import CartSidebar from './CartSidebar'

function SidebarContent() {
  const { isOpen, close, open } = useCartSidebar()

  useEffect(() => {
    const handler = () => open()
    window.addEventListener('open-cart', handler)
    return () => window.removeEventListener('open-cart', handler)
  }, [open])

  return <CartSidebar isOpen={isOpen} onClose={close} />
}

export default function SidebarWrapper() {
  return (
    <CartSidebarProvider>
      <SidebarContent />
    </CartSidebarProvider>
  )
}
