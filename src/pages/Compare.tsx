import ComparisonTable from '../components/ComparisonTable'
import SEO from '../components/SEO'
import { routes } from '../lib/routes'

export default function Compare() {
  return (
    <>
      <SEO
        title="Porovnávacia tabuľka"
        description="Porovnávacia tabuľka kúpacích kadí Relax Tub."
        path={routes.compare}
      />

      <section className="bg-night pb-8 pt-36 text-copper sm:pb-12 sm:pt-44">
        <div className="section-shell grid gap-5 md:grid-cols-[260px_1fr]">
          <p className="text-base leading-6 text-white/80 md:max-w-20">
            Všetky<br className="hidden md:block" /> modely
          </p>
          <h1 className="max-w-4xl font-display text-5xl leading-tight text-copper sm:text-7xl">
            Porovnávacia tabuľka
          </h1>
        </div>
      </section>

      <ComparisonTable />
    </>
  )
}
