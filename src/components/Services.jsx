const API_BASE = import.meta.env.VITE_BACKEND_URL || ''
import { useState } from 'react'

export default function Services() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name:'', email:'', service_type:'mixing', message:'' })
  const [sent, setSent] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/service-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) setSent(true)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Mixing & Mastering</h2>
            <p className="text-gray-300 mt-2">Get your tracks ready for release. Fast turnaround, radio‑ready quality.</p>
            <ul className="mt-6 space-y-2 text-gray-200 list-disc list-inside">
              <li>Balanced, clear mixes tailored to your vibe</li>
              <li>Loud, clean masters with punch</li>
              <li>One free revision included</li>
            </ul>
          </div>
          <form onSubmit={submit} className="bg-black/40 border border-white/10 rounded-2xl p-6 text-white">
            {sent ? (
              <p>Thanks! Ill get back to you shortly.</p>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input required placeholder="Name" className="px-3 py-2 rounded-lg bg-white/10 border border-white/10" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
                  <input required type="email" placeholder="Email" className="px-3 py-2 rounded-lg bg-white/10 border border-white/10" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
                </div>
                <div className="mt-3">
                  <select className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10" value={form.service_type} onChange={e=>setForm({...form, service_type:e.target.value})}>
                    <option value="mixing">Mixing</option>
                    <option value="mastering">Mastering</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
                <textarea placeholder="Tell me about your track (links, refs)" className="mt-3 w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10" rows={4} value={form.message} onChange={e=>setForm({...form, message:e.target.value})}></textarea>
                <button disabled={loading} className="mt-4 w-full px-4 py-2 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500 disabled:opacity-50">Request Quote</button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
