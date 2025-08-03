'use client'
import { CartSidebarProvider, useCartSidebar } from '../hooks/use-cart-sidebar'
import CartSidebar from './CartSidebar'

function SidebarContent() {
  const { isOpen, close } = useCartSidebar()
  return <CartSidebar isOpen={isOpen} onClose={close} />
}

export default function SidebarWrapper() {
  return (
    <CartSidebarProvider>
      <SidebarContent />
    </CartSidebarProvider>
  )
}
