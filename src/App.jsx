import { useEffect, useRef, useState } from 'react'
import Hero from './components/Hero'
import Products from './components/Products'
import Cart from './components/Cart'
import Services from './components/Services'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

function App() {
  const [cart, setCart] = useState([])
  const productsRef = useRef(null)

  useEffect(() => {
    const seed = async () => {
      try { await fetch(`${API_BASE}/seed`, { method: 'POST' }) } catch {}
    }
    seed()
  }, [])

  const addToCart = (item) => {
    setCart(prev => {
      const idx = prev.findIndex(p => p._id === item._id)
      if (idx >= 0) {
        const copy = [...prev]
        copy[idx] = { ...copy[idx], quantity: (copy[idx].quantity||1)+1 }
        return copy
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }
  const removeFromCart = (idx) => setCart(prev => prev.filter((_,i)=>i!==idx))

  const checkout = async () => {
    try {
      const res = await fetch(`${API_BASE}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: 'Guest',
          customer_email: 'guest@example.com',
          items: cart.map(c=>({ product_id: c._id, title: c.title, quantity: c.quantity, price: c.price }))
        })
      })
      const data = await res.json()
      if (data.id) {
        alert(`Order placed! Total $${data.total.toFixed(2)}`)
        setCart([])
      }
    } catch (e) {
      console.error(e)
    }
  }

  const scrollToProducts = () => {
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <header className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="font-extrabold tracking-tight text-white text-lg">Producer Shop</div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-300">
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#services" className="hover:text-white">Services</a>
          </nav>
          <div className="w-72 hidden lg:block">
            <Cart cart={cart} onRemove={removeFromCart} onCheckout={checkout} />
          </div>
        </div>
      </header>

      <Hero onShopClick={scrollToProducts} />

      <main>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_320px] gap-8">
          <Products onAdd={addToCart} />
          <div className="lg:hidden">
            <Cart cart={cart} onRemove={removeFromCart} onCheckout={checkout} />
          </div>
        </div>
        <Services />
      </main>

      <footer className="py-10 text-center text-gray-400 text-sm">© {new Date().getFullYear()} Producer Shop. All rights reserved.</footer>
    </div>
  )
}

export default App
