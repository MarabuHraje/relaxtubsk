import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { comparisonRows, products } from '../data/products'
import { routes } from '../lib/routes'

const formatValue = (product: (typeof products)[number], key: (typeof comparisonRows)[number]['key']) => {
  const rawValue = product[key]

  if (key === 'waterCapacity') {
    return rawValue.replaceAll('1 000', '1,000').replaceAll('1 250', '1,250')
  }

  if (key === 'seating' || key === 'heatingTime') {
    return rawValue.replaceAll('–', '—') + (rawValue.endsWith('.') ? '' : '.')
  }

  if (key === 'stove' && product.slug === 'quadro') {
    return 'Aisi 304'
  }

  return rawValue
}

export default function ComparisonTable() {
  const parameterRows = comparisonRows.filter((row) => row.key !== 'price')

  return (
    <section className="relative overflow-hidden bg-night py-10 text-copper sm:py-16">
      <div className="section-shell relative">
        <div className="hidden lg:block" aria-label="Porovnanie modelov Relax Tub">
          <div>
            <div className="grid grid-cols-5 gap-x-12">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  to={routes.product(product.slug)}
                  className="group flex min-h-64 items-end justify-center text-center transition hover:-translate-y-1"
                >
                  <img
                    src={product.previewImage}
                    alt={`Model ${product.navName}`}
                    className="mx-auto h-56 w-full object-contain drop-shadow-[0_26px_46px_rgba(0,0,0,0.38)] transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-5 gap-x-12 border-b border-copper/10 pb-8">
              {products.map((product) => (
                <div key={product.slug}>
                  <h2 className="font-display text-3xl text-white/70">
                    <Link to={routes.product(product.slug)}>{product.shortName}</Link>
                  </h2>
                  <div className="mt-2 text-base text-copper/70">
                    Od {product.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="divide-y divide-copper/10">
              {parameterRows.map((row) => (
                <section key={row.key} className="grid grid-cols-5 gap-x-12 py-7">
                  {products.map((product) => (
                    <div key={product.slug}>
                      <h3 className="text-sm text-white/25">{row.label}</h3>
                      <div className="mt-2 font-serif text-2xl leading-tight text-copper/70">
                        {formatValue(product, row.key)}
                      </div>
                    </div>
                  ))}
                </section>
              ))}
            </div>

            <div className="grid grid-cols-5 gap-x-12 border-t border-copper/10 pt-8">
              {products.map((product) => (
                <div key={product.slug}>
                  <Link to={routes.product(product.slug)} className="btn-dark w-full">
                    Viac
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:hidden">
          {products.map((product) => (
            <article key={product.slug} className="overflow-hidden rounded-lg border border-copper/15">
              <div className="p-5 text-copper">
                <div className="flex items-center gap-5">
                <img
                  src={product.previewImage}
                  alt=""
                  className="h-32 w-28 object-contain drop-shadow-[0_20px_36px_rgba(0,0,0,0.35)]"
                  loading="lazy"
                />
                <div>
                  <h2 className="font-display text-3xl text-white/80">{product.navName}</h2>
                  <p className="mt-2 text-base text-copper/70">
                    Od {product.price}
                  </p>
                </div>
                </div>
              </div>
              <dl className="divide-y divide-copper/10">
                {parameterRows.map((row) => (
                  <div key={row.key} className="px-5 py-4">
                    <dt className="text-sm text-white/35">{row.label}</dt>
                    <dd className="mt-1 font-serif text-2xl leading-tight text-copper/75">
                      {formatValue(product, row.key)}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="p-5">
                <Link to={routes.product(product.slug)} className="btn-dark w-full">
                  Zistiť viac
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
