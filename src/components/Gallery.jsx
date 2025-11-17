import React from 'react'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=60',
    title: '808 Warfare',
    subtitle: 'Sub-heavy bass for trap and drill'
  },
  {
    src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=60',
    title: 'Soulful Samples',
    subtitle: 'Lush chords and vintage textures'
  },
  {
    src: 'https://images.unsplash.com/photo-1516445034117-fcd56299761a?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjMzMzk5NTV8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'Mixing Service',
    subtitle: 'Clean, punchy, release-ready'
  },
  {
    src: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=1200&q=60',
    title: 'Mastering Service',
    subtitle: 'Loudness with clarity and width'
  },
  {
    src: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXN0ZXJpbmclMjBTZXJ2aWNlfGVufDB8MHx8fDE3NjMzMzk5NTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'Drum Kits',
    subtitle: 'Kicks, snares, hats that slap'
  },
  {
    src: 'https://images.unsplash.com/photo-1647788738075-d9363b39fac6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEcnVtJTIwS2l0c3xlbnwwfDB8fHwxNzYzMzM5OTU2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'Sample Packs',
    subtitle: 'Royalty-free loops and one-shots'
  }
]

export default function Gallery() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Producer Picks</h2>
            <p className="text-gray-300 mt-1">A quick look at what you can get inside.</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((img, i) => (
            <figure
              key={i}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <img
                src={img.src}
                alt={img.title}
                className="h-32 w-full object-cover transition duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent p-3 flex flex-col justify-end">
                <span className="text-xs text-fuchsia-300 font-medium">{img.title}</span>
                <span className="text-[11px] text-gray-300">{img.subtitle}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
