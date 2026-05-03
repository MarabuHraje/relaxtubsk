import { CheckCircle2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import type { Product } from '../data/products'

type ProductConfiguratorProps = {
  product: Product
}

type LeadForm = {
  name: string
  phone: string
  email: string
}

const formatPrice = (price: number) => `${price.toLocaleString('en-US')} €`

const getInitialSelects = (product: Product) =>
  Object.fromEntries(
    product.configurator.selectGroups.map((group) => [
      group.id,
      group.options[0]?.value ?? '',
    ]),
  )

const getInitialChecks = (product: Product) =>
  Object.fromEntries(
    product.configurator.options.map((option) => [option.id, option.checked]),
  )

export default function ProductConfigurator({ product }: ProductConfiguratorProps) {
  const [selects, setSelects] = useState<Record<string, string>>(() =>
    getInitialSelects(product),
  )
  const [checks, setChecks] = useState<Record<string, boolean>>(() =>
    getInitialChecks(product),
  )
  const [form, setForm] = useState<LeadForm>({ name: '', phone: '', email: '' })
  const [sent, setSent] = useState(false)

  const total = useMemo(() => {
    const selectTotal = product.configurator.selectGroups.reduce((sum, group) => {
      const selected = group.options.find((option) => option.value === selects[group.id])
      return sum + (selected?.price ?? 0)
    }, 0)

    const optionTotal = product.configurator.options.reduce((sum, option) => {
      return checks[option.id] ? sum + option.price : sum
    }, 0)

    return product.configurator.basePrice + selectTotal + optionTotal
  }, [checks, product.configurator, selects])

  const selectedOptions = product.configurator.options
    .filter((option) => checks[option.id])
    .map((option) => option.label)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="section-shell">
        <div className="mx-auto max-w-2xl bg-cream p-8 text-center">
          <CheckCircle2 className="mx-auto h-10 w-10 text-ink" aria-hidden="true" />
          <h2 className="mt-4 font-display text-4xl text-ink">Žiadosť bola odoslaná</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            Konfiguráciu sme si uložili pre ďalší krok. Zvyčajne odpovedáme do jedného dňa.
          </p>
          <button type="button" className="btn-outline mt-6" onClick={() => setSent(false)}>
            Upraviť konfiguráciu
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="section-shell">
      <h2 className="text-center font-display text-4xl leading-tight text-ink sm:text-6xl">
        Odošlite svoju požiadavku
      </h2>

      <form className="mt-10 grid gap-8 lg:grid-cols-2" name="calc" method="post" onSubmit={handleSubmit}>
        <div>
          <div className="grid gap-4">
            {product.configurator.selectGroups.map((group) => (
              <label key={group.id}>
                <span className="sr-only">{group.label}</span>
                <select
                  name={group.id}
                  id={group.id}
                  className="field"
                  value={selects[group.id]}
                  onChange={(event) =>
                    setSelects((current) => ({ ...current, [group.id]: event.target.value }))
                  }
                >
                  {group.options.map((option) => (
                    <option key={option.value} value={option.value} data-price={option.price}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>

          <div className="my-8 divide-y divide-wood/10">
            {product.configurator.options.map((option) => (
              <label
                key={option.id}
                className={`flex items-center gap-3 py-3 ${
                  option.disabled ? 'cursor-default' : 'cursor-pointer'
                }`}
              >
                <input
                  id={option.id}
                  type="checkbox"
                  name={option.label}
                  className="sr-only"
                  checked={Boolean(checks[option.id])}
                  disabled={option.disabled}
                  data-price={option.price}
                  onChange={(event) =>
                    setChecks((current) => ({
                      ...current,
                      [option.id]: event.target.checked,
                    }))
                  }
                />
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded bg-wood/10 p-1.5 transition sm:h-8 sm:w-8 sm:p-2.5 ${
                    checks[option.id] && !option.disabled ? 'bg-cream' : ''
                  }`}
                >
                  <span
                    className={`h-full w-full rounded-sm bg-wood transition ${
                      checks[option.id] ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                    } ${option.disabled ? 'opacity-40' : ''}`}
                    aria-hidden="true"
                  />
                </span>
                <span className="flex-1 text-base text-ink sm:text-xl">{option.label}</span>
                <span className="text-base text-muted sm:text-xl">{formatPrice(option.price)}</span>
              </label>
            ))}
          </div>

          <div className="grid gap-4">
            <input
              name="yourname"
              id="yourname"
              className="field"
              placeholder="Vaše meno"
              required
              value={form.name}
              onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            />
            <input
              name="phone"
              id="phone"
              className="field"
              type="tel"
              placeholder="Telefón"
              required
              value={form.phone}
              onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            />
            <input type="hidden" name="id" id="id" value={product.formId} />
            <input type="hidden" name="total" id="total" value={total} />
            <input
              name="email"
              id="email"
              className="field"
              type="email"
              placeholder="E-mail"
              required
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            />
            <input
              type="hidden"
              name="configuration"
              value={JSON.stringify({
                selects,
                options: selectedOptions,
                total,
              })}
            />
          </div>
        </div>

        <aside className="lg:pl-8">
          <div className="sticky bottom-0 top-8 z-30 bg-cream p-4 text-center lg:p-8">
            <h3 className="hidden font-display text-2xl text-ink lg:block">{product.title}</h3>
            <p className="mt-2 hidden text-sm text-muted lg:block">24 mesiacov záruky</p>
            <img
              src={product.previewImage}
              alt=""
              className="mx-auto my-8 hidden h-48 object-contain lg:block"
              loading="lazy"
            />
            <div className="font-display text-2xl text-ink sm:text-4xl lg:text-5xl">
              {formatPrice(total)}
            </div>
            <button type="submit" className="btn mt-6 w-full bg-wood text-white">
              Odoslať žiadosť →
            </button>
            <p className="mt-4 text-sm text-muted">Nemusíte teraz nič platiť</p>
          </div>
        </aside>
      </form>
    </div>
  )
}
