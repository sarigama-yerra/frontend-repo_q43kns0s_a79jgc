import { useEffect, useState, useMemo } from 'react'
import ProductCard from './ProductCard'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Products({ onAdd }) {
  const [items, setItems] = useState([])
  const [q, setQ] = useState('')
  const [category, setCategory] = useState('All')

  const categories = ['All', 'Drum Kits', 'Samples', 'Services']

  const filtered = useMemo(() => {
    let arr = items
    if (category !== 'All') arr = arr.filter(i => i.category === category)
    if (q) arr = arr.filter(i => (i.title+ ' ' + (i.description||'')).toLowerCase().includes(q.toLowerCase()))
    return arr
  }, [items, q, category])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`${API_BASE}/products/query`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ featured: true })
        })
        const data = await res.json()
        if (data.items) setItems(data.items)
      } catch (e) {
        console.error(e)
      }
    }
    fetchItems()
  }, [])

  return (
    <section id="products" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Products</h2>
            <p className="text-gray-300 mt-1">Drum kits, samples, and services curated for you.</p>
          </div>
          <div className="flex gap-3 items-center">
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search..." className="px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-gray-300 focus:outline-none" />
            <select value={category} onChange={e=>setCategory(e.target.value)} className="px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white">
              {categories.map(c=> <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <ProductCard key={item._id} item={item} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  )
}
