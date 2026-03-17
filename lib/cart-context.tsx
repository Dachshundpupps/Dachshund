"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface CartItem {
  id: number
  name: string
  price: number
  type: "puppy" | "product"
  image: string
  quantity?: number
  paymentType?: "full" | "deposit"
  breed?: string
  color?: string
  gender?: string
  age?: string
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem, paymentType?: "full" | "deposit") => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  cartTotal: number
  cartCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("dachshund-cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("dachshund-cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (item: CartItem, paymentType: "full" | "deposit" = "full") => {
    setCart((prev) => {
      // For puppies, don't allow duplicates
      if (item.type === "puppy") {
        if (prev.find((i) => i.id === item.id && i.type === "puppy")) {
          return prev
        }
        return [...prev, { ...item, quantity: 1, paymentType }]
      }

      // For products, increase quantity if already in cart
      const existingItem = prev.find((i) => i.id === item.id && i.type === "product")
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id && i.type === "product" ? { ...i, quantity: (i.quantity || 1) + 1 } : i,
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setCart([])
  }

  const cartTotal = cart.reduce((sum, item) => {
    const itemPrice = item.price * (item.quantity || 1)
    const finalPrice = item.paymentType === "deposit" ? itemPrice * 0.5 : itemPrice
    return sum + finalPrice
  }, 0)

  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
