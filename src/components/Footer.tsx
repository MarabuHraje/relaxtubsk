import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { routes } from '../lib/routes'

export default function Footer() {
  return (
    <footer className="bg-night text-white">
      <div className="section-shell grid gap-12 py-16 sm:grid-cols-3 sm:py-24">
        <nav aria-label="Modely">
          <ul className="grid gap-3 text-base leading-6 text-copper/70">
            {products.map((product) => (
              <li key={product.slug}>
                <Link to={routes.product(product.slug)} className="border-b border-copper/10 transition hover:border-white/30 hover:text-white">
                  {product.slug === 'quadro' ? 'Štvorec' : product.navName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Stránky">
          <ul className="grid gap-3 text-base leading-6 text-copper/70 sm:justify-center">
            <li>
              <Link to={routes.compare} className="border-b border-copper/10 transition hover:border-white/30 hover:text-white">Porovnať kade</Link>
            </li>
            <li>
              <Link to={routes.faq} className="border-b border-copper/10 transition hover:border-white/30 hover:text-white">FAQ</Link>
            </li>
            <li>
              <Link to={routes.about} className="border-b border-copper/10 transition hover:border-white/30 hover:text-white">O nás</Link>
            </li>
            <li>
              <Link to={routes.contact} className="border-b border-copper/10 transition hover:border-white/30 hover:text-white">Kontakt</Link>
            </li>
            <li>
              <a href="https://relaxtubsk.com/" className="border-b border-copper/10 transition hover:border-white/30 hover:text-white">English</a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Kontakt">
          <ul className="grid gap-3 text-base leading-6 text-copper/70 sm:justify-end sm:text-right">
            <li>
              <a href="https://www.facebook.com/profile.php?id=61556302495783" className="border-b border-copper/10 transition hover:border-white/30 hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/relax_tub.sk" className="border-b border-copper/10 transition hover:border-white/30 hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="mailto:furako.relax@gmail.com" className="border-b border-copper/10 transition hover:border-white/30 hover:text-white">
                furako.relax@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:421951875337" className="border-b border-copper/10 transition hover:border-white/30 hover:text-white">
                +421 951 875 337
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-8 py-10 text-base leading-6 text-copper/65 sm:flex-row sm:items-center sm:justify-between">
          <Link to={routes.home} className="flex items-center gap-3">
            <img src="/images/brand/icon.svg" alt="" className="h-14 w-14" width="56" height="56" />
            <span className="font-display text-4xl text-white">Relax Tub</span>
          </Link>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 sm:justify-end">
            <li>
              © <Link to={routes.home}>Relax Tub</Link> 2024—2026
            </li>
            <li>
              <a href="https://instagram.com/dankaorange">Designed by DankaOrange</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
