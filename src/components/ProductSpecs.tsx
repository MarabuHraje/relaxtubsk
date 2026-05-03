import type { Product } from '../data/products'
import { comparisonRows } from '../data/products'

type ProductSpecsProps = {
  product: Product
}

export default function ProductSpecs({ product }: ProductSpecsProps) {
  const rows = comparisonRows.filter((row) => row.key !== 'price')

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-porcelain" />
      <div className="section-shell relative">
        <div className="max-w-2xl">
          <p className="eyebrow">Technické parametre</p>
          <h2 className="section-title mt-3">Jasné rozmery, výkon a kapacita</h2>
        </div>
        <dl className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {rows.map((row) => (
            <div key={row.key} className="surface border-wood/10 p-5 transition hover:-translate-y-1 hover:border-copper/30 hover:shadow-lift">
              <dt className="text-sm text-muted">{row.label}</dt>
              <dd className="mt-3 text-xl text-ink">{product[row.key]}</dd>
              <div className="mt-4 h-1 w-10 rounded-full bg-copper/70" />
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
