import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import { products } from '../data/products'
import { routes } from '../lib/routes'

const heroImages = [
  '/images/covers/index-01.jpg',
  '/images/covers/index-02.jpg',
  '/images/covers/index-04.jpg',
  '/images/covers/index-05.jpg',
  '/images/covers/index-08.jpg',
]

const reasons = [
  {
    title: 'Rodinné dedičstvo',
    text: 'Viac ako 6 rokov skúseností. Relax Tub je viac než len podnikanie',
    image: '/images/points/family.png',
  },
  {
    title: 'Rýchla realizácia',
    text: 'Rýchla a efektívna inštalácia vášho zvoleného kúpacieho suda – oddych bez čakania',
    image: '/images/points/swift.png',
  },
  {
    title: '24 mesiacov záruky',
    text: 'Relax Tub poskytuje spoľahlivý záručný plán: 24 mesiacov',
    image: '/images/points/warranty.png',
  },
  {
    title: 'Vlastná výroba',
    text: 'Od začiatku až po koniec – naše sudy vyrábame precízne vo vlastnej výrobe',
    image: '/images/points/production.png',
  },
]

export default function Home() {
  return (
    <>
      <SEO
        title="Kde sa luxus stretáva s odpočinkom"
        pageTitle="Relax Tub - Hot tub production"
        description="Doprajte si dokonalý relaxačný zážitok s Relax Tub – vašou prvou voľbou pre luxusné SPA kúpele."
        path={routes.home}
        image="/images/brand/og.png"
      />

      <section className="relative isolate overflow-hidden bg-night text-white">
        <div className="absolute inset-0">
          {heroImages.map((image) => (
            <img
              key={image}
              src={image}
              alt=""
              className="hero-slide absolute inset-0 h-full w-full object-cover opacity-0"
              fetchPriority={image === heroImages[0] ? 'high' : 'auto'}
            />
          ))}
          <div className="absolute inset-0 bg-night/55" />
        </div>

        <div className="section-shell relative flex min-h-[calc(100vh-5rem)] items-center py-16">
          <div className="max-w-4xl">
            <p className="eyebrow text-copper">Výroba víriviek</p>
            <h1 className="mt-5 font-display text-5xl leading-tight text-white sm:text-7xl lg:text-8xl">
              Kde sa luxus stretáva s odpočinkom
            </h1>
            <a href="#produkty" className="btn-dark mt-9">
              Preskúmajte naše produkty →
            </a>

            <div className="mt-14 max-w-2xl">
              <p className="eyebrow text-copper">Relax Tub: vaša brána k pokoju</p>
              <p className="mt-5 text-base leading-8 text-white/80 sm:text-lg">
                Doprajte si dokonalý relaxačný zážitok s Relax Tub – vašou prvou
                voľbou pre luxusné SPA kúpele. S viac než 8-ročnými skúsenosťami
                s výrobou exkluzívnych kachľových vaní, sáun, víriviek a ďalšieho
                vybavenia vás pozývame na cestu k pokoju, akú ste ešte nezažili.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="produkty" className="scroll-mt-24 bg-cream py-16 sm:scroll-mt-28 sm:py-32">
        <div className="section-shell grid gap-16 sm:gap-32">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.04}>
              <article className="grid items-center gap-8 lg:grid-cols-[42%_58%]">
                <Link
                  to={routes.product(product.slug)}
                  className={`flex items-center justify-center ${
                    index % 2 === 0 ? 'lg:order-2' : ''
                  }`}
                  aria-label={`Zistiť viac o modeli ${product.navName}`}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-[24rem] w-full max-w-[520px] object-contain sm:h-[30rem] lg:h-[34rem]"
                    loading="lazy"
                  />
                </Link>
                <div className="flex flex-col justify-center pl-8 lg:pl-0 lg:pr-12">
                  <p className="eyebrow">Model {index + 1} z {products.length}</p>
                  <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                    <Link to={routes.product(product.slug)}>{product.title}</Link>
                  </h2>
                  <p className="mt-6 text-base leading-8 text-muted">{product.teaserText}</p>
                  <Link to={routes.product(product.slug)} className="btn mt-8 w-fit">
                    Zistiť viac →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal>
            <article className="mx-auto max-w-[600px] text-center">
              <div className="flex flex-col items-center justify-center">
                <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
                  <Link to={routes.compare}>Porovnať modely</Link>
                </h2>
                <p className="mt-6 text-base leading-8 text-muted">
                  Zobrazte si všetky modely na jednej stránke, aby ste ich mohli
                  porovnať a jednoduchšie si vybrať
                </p>
                <Link to={routes.compare} className="btn mt-8">
                  Porovnať →
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-porcelain py-20 sm:py-28">
        <div className="section-shell">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Prečo práve my?</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ink sm:text-7xl">
              Objavte skutočný relax, kde záleží na každom detaile
            </h2>
            <Link to={routes.about} className="btn mt-9">
              Prečítajte si náš príbeh →
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 0.04}>
                <article className="text-center">
                  <img
                    src={reason.image}
                    alt=""
                    className="mx-auto h-24 w-24 object-contain"
                    loading="lazy"
                  />
                  <h3 className="mt-6 font-display text-3xl leading-tight text-ink">
                    {reason.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{reason.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
