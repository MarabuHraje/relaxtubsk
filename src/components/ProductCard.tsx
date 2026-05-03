import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import { routes } from '../lib/routes'

type ProductCardProps = {
  product: Product
  index?: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <article className="surface group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <Link
        to={routes.product(product.slug)}
        className="relative block aspect-[1.05/1] overflow-hidden bg-gradient-to-br from-porcelain via-cream to-white p-5"
        aria-label={`Zistiť viac o modeli ${product.navName}`}
      >
        {typeof index === 'number' && (
          <span className="absolute left-4 top-4 rounded-full border border-wood/10 bg-white/80 px-3 py-1 text-xs text-muted backdrop-blur">
            Model {index + 1} z 5
          </span>
        )}
        <span className="absolute right-4 top-4 rounded-full bg-wood px-3 py-1.5 text-xs text-white shadow-soft">
          Od {product.price}
        </span>
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain drop-shadow-[0_18px_34px_rgba(14,36,24,0.16)] transition duration-500 group-hover:scale-[1.06]"
          loading="lazy"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-display text-2xl leading-tight text-ink">
            <Link to={routes.product(product.slug)}>{product.navName}</Link>
          </h2>
        </div>
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-muted">{product.description}</p>
        <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg border border-wood/10 bg-wood/5 p-3">
            <dt className="text-xs text-muted">Sedenie</dt>
            <dd className="mt-1 text-sm text-ink">{product.seating}</dd>
          </div>
          <div className="rounded-lg border border-wood/10 bg-wood/5 p-3">
            <dt className="text-xs text-muted">Ohrev</dt>
            <dd className="mt-1 text-sm text-ink">{product.heatingTime}</dd>
          </div>
        </dl>
        <Link
          to={routes.product(product.slug)}
          className="mt-6 inline-flex items-center gap-2 text-sm text-wood transition hover:text-moss"
        >
          Zistiť viac
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
