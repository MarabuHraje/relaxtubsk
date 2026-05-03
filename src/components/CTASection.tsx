import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type CTASectionProps = {
  eyebrow?: string
  title: string
  text: string
  primaryLabel: string
  primaryTo: string
  secondaryLabel?: string
  secondaryTo?: string
}

export default function CTASection({
  eyebrow,
  title,
  text,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-lg bg-night px-5 py-12 text-white shadow-lift sm:px-8 lg:px-12">
          <img
            src="/images/covers/index-05.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-24"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-night/70" />
          <div className="relative max-w-3xl">
            {eyebrow && <p className="eyebrow text-copper">{eyebrow}</p>}
            <h2 className="mt-3 font-display text-3xl leading-tight sm:text-5xl">{title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">{text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to={primaryTo} className="btn bg-copper text-night hover:bg-white">
                {primaryLabel}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
              {secondaryLabel && secondaryTo && (
                <Link
                  to={secondaryTo}
                  className="btn-outline border-white/25 bg-white/10 text-white hover:bg-white/15 hover:text-white"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
