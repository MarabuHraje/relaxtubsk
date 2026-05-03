import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { products } from '../data/products'
import { routes } from '../lib/routes'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 text-sm text-copper/80 transition hover:text-copper ${
    isActive ? 'text-copper' : ''
  }`

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute left-0 top-0 z-50 w-full text-copper">
      <div className="section-shell flex h-[5.5rem] items-center justify-between gap-5 border-b border-copper/10 py-5">
        <Link to={routes.home} className="flex items-center gap-3" aria-label="Relax Tub domov">
          <img
            src="/images/brand/icon.svg"
            alt=""
            className="h-10 w-10"
            width="40"
            height="40"
          />
          <span className="text-xs uppercase tracking-[0.55em] text-copper/70">Relax Tub</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Hlavná navigácia">
          <a href="https://relaxtubsk.com/" className="px-3 py-2 text-sm text-copper/80 transition hover:text-copper">
            English
          </a>
          <div className="group relative">
            <NavLink
              to={routes.compare}
              className={({ isActive }) =>
                `inline-flex items-center gap-1 px-3 py-2 text-sm text-copper/80 transition hover:text-copper ${
                  isActive ? 'text-copper' : ''
                }`
              }
            >
              Kade
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </NavLink>
            <div className="invisible absolute right-0 top-full w-[820px] pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-lg border border-copper/15 bg-night/95 p-3 shadow-lift backdrop-blur-2xl">
                <div className="grid grid-cols-5 gap-2">
                {products.map((product) => (
                  <Link
                    key={product.slug}
                    to={routes.product(product.slug)}
                    className="group/item rounded-lg border border-transparent p-3 text-center transition duration-200 hover:-translate-y-1 hover:border-copper/30 hover:shadow-soft"
                  >
                    <img
                      src={product.previewImage}
                      alt={`Model ${product.navName}`}
                      className="mx-auto h-[7.5rem] w-full object-contain transition duration-300 group-hover/item:scale-105"
                      loading="lazy"
                    />
                    <span className="mt-3 block text-sm text-copper">{product.shortName}</span>
                    <span className="mt-2 inline-flex rounded-full border border-copper/15 px-2.5 py-1 text-xs text-copper/70">
                      {product.price}
                    </span>
                  </Link>
                ))}
                </div>
                <Link
                  to={routes.compare}
                  className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-copper/20 px-4 py-3 text-sm text-copper transition hover:border-copper"
                >
                  Porovnať modely
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
          <NavLink to={routes.faq} className={navLinkClass}>
            FAQ
          </NavLink>
          <NavLink to={routes.about} className={navLinkClass}>
            O nás
          </NavLink>
          <NavLink to={routes.contact} className={navLinkClass}>
            Kontakt
          </NavLink>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-copper/20 bg-transparent text-copper lg:hidden"
          aria-label={isOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="bg-night/95 backdrop-blur-xl lg:hidden">
          <nav
            className="section-shell py-5"
            aria-label="Mobilná navigácia"
            onClick={() => setIsOpen(false)}
          >
            <div className="grid gap-2">
              <Link to={routes.products} className="px-3 py-3 text-sm text-copper">
                Kade
              </Link>
              <div className="grid grid-cols-2 gap-2">
                {products.map((product) => (
                  <Link
                    key={product.slug}
                    to={routes.product(product.slug)}
                    className="flex items-center gap-3 rounded-lg border border-copper/10 p-3 text-copper transition hover:border-copper/30"
                  >
                    <img
                      src={product.previewImage}
                      alt=""
                      className="h-14 w-12 object-contain"
                      loading="lazy"
                    />
                    <span className="text-sm text-copper/80">
                      {product.slug === 'quadro' ? 'Štvorec' : product.navName}
                    </span>
                  </Link>
                ))}
              </div>
              <NavLink to={routes.compare} className={navLinkClass}>
                Porovnať kade
              </NavLink>
              <NavLink to={routes.faq} className={navLinkClass}>
                FAQ
              </NavLink>
              <NavLink to={routes.about} className={navLinkClass}>
                O nás
              </NavLink>
              <NavLink to={routes.contact} className={navLinkClass}>
                Kontakt
              </NavLink>
              <a href="https://relaxtubsk.com/" className="px-3 py-3 text-sm text-copper/80">
                English
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
