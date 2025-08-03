'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

type SidebarContextType = {
  isOpen: boolean
  open: () => void
  close: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

type SidebarProviderProps = {
  children: ReactNode
}

export function CartSidebarProvider({ children }: SidebarProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <SidebarContext.Provider value={{ isOpen, open, close }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useCartSidebar() {
  const context = useContext(SidebarContext)
  if (!context) throw new Error('useCartSidebar must be used within a CartSidebarProvider')
  return context
}
