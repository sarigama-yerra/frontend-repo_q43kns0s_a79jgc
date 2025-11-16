import { motion } from 'framer-motion'

export default function Hero({ onShopClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-700/20 via-fuchsia-600/20 to-black"/>
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <motion.h1 
              initial={{opacity:0,y:20}} 
              animate={{opacity:1,y:0}}
              transition={{duration:0.6}}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
              Elevate Your Sound
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-300 to-indigo-300"> Producer Shop</span>
            </motion.h1>
            <p className="mt-6 text-lg text-gray-200/90 max-w-xl">
              Premium drum kits, soulful samples, and pro mixing & mastering designed for modern hip‑hop.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <button onClick={onShopClick} className="px-6 py-3 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold shadow-lg shadow-fuchsia-600/30 transition">
                Browse Products
              </button>
              <a href="#services" className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur border border-white/20 transition">
                Services
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-300">Instant downloads. Royalty‑free sounds. Secure checkout.</p>
          </div>
          <motion.div 
            initial={{opacity:0, scale:0.95}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.8}}
            className="relative">
            <div className="aspect-video w-full rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=60" alt="Studio gear" />
            </div>
            <div className="absolute -bottom-6 -left-6 rotate-3 bg-black/60 text-white p-4 rounded-lg backdrop-blur border border-white/10">
              <p className="text-sm">Trusted by 1,200+ producers</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
