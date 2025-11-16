import { ShoppingCart } from 'lucide-react'

export default function ProductCard({ item, onAdd }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-fuchsia-500/50 transition">
      <div className="aspect-square overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-300 line-clamp-2">{item.description}</p>
          </div>
          {item.is_featured && <span className="text-xs px-2 py-1 rounded bg-fuchsia-600 text-white">Featured</span>}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-fuchsia-300 font-semibold">${item.price.toFixed(2)}</span>
          <button onClick={() => onAdd(item)} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-sm">
            <ShoppingCart size={16} /> Add
          </button>
        </div>
      </div>
    </div>
  )
}
