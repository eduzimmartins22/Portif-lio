export type CartItem = {
  id: string
  name: string
  price: number
  observation?: string
}

export type CartContextType = {
  cartItems: CartItem[]
  addToCart: (product: CartItem) => void
  removeFromCart: (index: number) => void
  total: number
}
