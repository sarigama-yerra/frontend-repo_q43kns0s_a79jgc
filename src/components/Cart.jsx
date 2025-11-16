import { useMemo } from 'react'
import { Trash2 } from 'lucide-react'

export default function Cart({ cart, onRemove, onCheckout }) {
  const total = useMemo(() => cart.reduce((s,i)=> s + i.price * (i.quantity||1), 0), [cart])

  return (
    <aside className="bg-black/40 border border-white/10 rounded-2xl p-5 text-white">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Your Cart</h3>
        <span className="text-sm text-gray-300">{cart.length} items</span>
      </div>
      <div className="mt-4 space-y-3 max-h-72 overflow-auto pr-2">
        {cart.length === 0 && <p className="text-gray-400 text-sm">Cart is empty</p>}
        {cart.map((it, idx) => (
          <div key={idx} className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium">{it.title}</p>
              <p className="text-xs text-gray-300">${it.price.toFixed(2)} x {it.quantity||1}</p>
            </div>
            <button onClick={()=>onRemove(idx)} className="text-gray-300 hover:text-red-400"><Trash2 size={16} /></button>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-gray-300">Total</span>
        <span className="font-semibold">${total.toFixed(2)}</span>
      </div>
      <button onClick={onCheckout} disabled={cart.length===0} className="mt-4 w-full px-4 py-2 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500 disabled:opacity-50 disabled:cursor-not-allowed">Checkout</button>
    </aside>
  )
}
