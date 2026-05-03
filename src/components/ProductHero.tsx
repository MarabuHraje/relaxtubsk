import type { Product } from '../data/products'

type ProductHeroProps = {
  product: Product
}

const originalNumber = (value: string) => value.replace('1 000', '1,000').replace('1 250', '1,250')
const originalPeople = (value: string) => value.replace('–', '—') + (value.endsWith('.') ? '' : '.')

export default function ProductHero({ product }: ProductHeroProps) {
  const heroStats = [
    { label: 'Hmotnosť bez vody', value: product.tareWeight },
    { label: 'Objem vody', value: originalNumber(product.waterCapacity) },
    { label: 'Výška', value: product.height },
    { label: 'Sedenie', value: originalPeople(product.seating) },
    { label: 'Hĺbka suda', value: product.tubDepth },
    { label: 'Záruka', value: '24 mesiacov' },
  ]

  return (
    <section className="relative isolate overflow-hidden bg-night text-white">
      <img
        src={product.coverImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-55"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-night/55" />

      <div className="section-shell relative flex min-h-[calc(100vh-5rem)] items-center pt-[7rem] pb-16">
        <div className="w-full min-w-0 max-w-[calc(100vw-2rem)] sm:max-w-5xl">
          <h1 className="max-w-5xl font-display text-3xl leading-tight text-white sm:text-6xl lg:text-9xl">
            {product.title}
          </h1>

          <dl className="mt-8 grid max-w-3xl grid-cols-2 divide-x divide-y divide-copper/10 border-y border-copper/10 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="p-4 lg:p-6">
                <dt className="text-sm text-white/60 lg:text-base">{stat.label}</dt>
                <dd className="mt-1 text-xl text-copper lg:text-2xl">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
            <a href="#poziadavka" className="btn-dark">
              Vypočítať možnosti →
            </a>
            <div className="font-display text-4xl text-copper lg:text-5xl">Od&nbsp;{product.price}</div>
          </div>

          <div className="mt-14 max-w-3xl">
            <p className="eyebrow text-copper">Prehľad</p>
            <p className="mt-5 break-words text-base leading-8 text-white/80 sm:text-lg">
              {product.overview}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
