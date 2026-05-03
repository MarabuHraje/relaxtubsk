import { Navigate, useParams } from 'react-router-dom'
import ProductConfigurator from '../components/ProductConfigurator'
import ProductGallery from '../components/ProductGallery'
import ProductHero from '../components/ProductHero'
import ProductPlot from '../components/ProductPlot'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import { getProductBySlug } from '../data/products'
import { routes } from '../lib/routes'

const benefits = [
  {
    title: 'Rýchla dodávka',
    text: 'Veľký sklad jacuzzi na sklade',
    image: '/images/points/implementation.png',
  },
  {
    title: 'Doprava',
    text: 'Doprava zadarmo do 300 km',
    image: '/images/points/delivery.png',
  },
  {
    title: 'Malá záloha',
    text: '10 % po schválení',
    image: '/images/points/prepayment.png',
  },
  {
    title: 'Platba',
    text: 'Po inštalácii',
    image: '/images/points/payment.png',
  },
]

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  if (!product) {
    return <Navigate to={routes.compare} replace />
  }

  return (
    <>
      <SEO
        title={product.title}
        description={`${product.title} od ${product.price}. ${product.overview}`}
        path={routes.product(product.slug)}
        image={product.coverImage}
        type="article"
      />

      <ProductHero product={product} />

      <section className="bg-porcelain py-16 sm:py-24">
        <div className="section-shell">
          <h2 className="text-center font-display text-4xl leading-tight text-ink sm:text-6xl">
            Pozrite si vaňu bližšie
          </h2>
          <ProductPlot key={product.slug} product={product} />
        </div>
      </section>

      <ProductGallery product={product} />

      <section className="bg-cream py-16 sm:py-24">
        <div className="section-shell">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Výhody</p>
            <p className="mt-5 max-w-3xl text-xl leading-9 text-muted sm:text-2xl">
              Naše produkty majú životnosť až 25 rokov (vana) a až 10 rokov
              (drevo), čo zaručuje dlhodobú kvalitu
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 0.04}>
                <article className="text-center">
                  <img
                    src={benefit.image}
                    alt=""
                    className="mx-auto h-24 w-24 object-contain"
                    loading="lazy"
                  />
                  <h3 className="mt-6 font-display text-3xl text-ink">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{benefit.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="poziadavka" className="scroll-mt-24 bg-white py-16 sm:scroll-mt-28 sm:py-24">
        <ProductConfigurator key={product.slug} product={product} />
      </section>
    </>
  )
}
