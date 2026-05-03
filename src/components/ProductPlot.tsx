import { useState } from 'react'
import type { Product } from '../data/products'

type ProductPlotProps = {
  product: Product
}

export default function ProductPlot({ product }: ProductPlotProps) {
  const [activePoint, setActivePoint] = useState<string>()
  const notes = product.plotNotes ?? product.plotPoints

  return (
    <div>
      <div className="mx-auto max-w-[960px] px-1 sm:px-2 lg:px-3">
        <div className="relative -ml-[20%] -mt-10 w-[140%] min-[390px]:-ml-[5%] min-[390px]:w-[110%] md:-ml-0 md:-mb-16 md:-mt-20 md:w-full">
          <div className="absolute bottom-[52px] left-[calc(20%_-_24px)] right-[calc(20%_-_24px)] top-16 rounded-lg bg-[url('/images/plot/bg.jpg')] bg-cover bg-center min-[390px]:bottom-20 min-[390px]:left-[calc(5%_-_4px)] min-[390px]:right-[calc(5%_-_4px)] md:bottom-28 md:left-0 md:right-0 md:top-32 md:rounded-2xl" />
          <img
            src={product.plotImage}
            alt={`Technický pohľad na model ${product.navName}`}
            className="relative z-10 block w-full select-none"
            loading="lazy"
          />
          {product.plotPoints.map((point) => (
            <button
              key={point.id}
              type="button"
              className={`plot-dot absolute z-20 h-11 w-11 -translate-x-1/2 -translate-y-1/2 ${
                activePoint === point.id ? 'plot-dot--active' : ''
              }`}
              style={{ top: point.top, left: point.left }}
              aria-label={point.title}
              onClick={() => setActivePoint(point.id)}
              onMouseEnter={() => setActivePoint(point.id)}
            >
              <span className="plot-dot__body" />
            </button>
          ))}
        </div>
      </div>

      {notes.map((note) => (
        <article
          key={note.id}
          className={`fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-xl rounded-lg bg-night p-4 text-center text-white shadow-lift transition duration-200 ${
            activePoint === note.id
              ? '-translate-x-1/2 translate-y-0 opacity-100'
              : 'pointer-events-none -translate-x-1/2 translate-y-2 opacity-0'
          }`}
          aria-hidden={activePoint !== note.id}
        >
          <h3 className="font-display text-xl text-copper sm:text-2xl">{note.title}</h3>
          {note.text && <p className="mt-2 text-sm leading-6 text-white/75">{note.text}</p>}
        </article>
      ))}

      <div className="mx-auto max-w-3xl pt-16 text-center sm:pt-28">
        <p className="text-base leading-7 text-ink">Možnosť pridať ďalšie voliteľné prvky</p>
        <p className="mt-4 text-base leading-8 text-muted">
          {product.plotFooterOptions.join(' · ')}
        </p>
        <a href="#poziadavka" className="btn mt-6">
          Vypočítať možnosti →
        </a>
      </div>
    </div>
  )
}
