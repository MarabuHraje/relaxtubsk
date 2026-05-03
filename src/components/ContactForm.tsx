import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { products } from '../data/products'

type ContactFormProps = {
  initialModel?: string
  compact?: boolean
}

type FormState = {
  name: string
  email: string
  phone: string
  model: string
  message: string
  consent: boolean
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialState = (initialModel = ''): FormState => ({
  name: '',
  email: '',
  phone: '',
  model: initialModel,
  message: '',
  consent: false,
})

const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email)

export default function ContactForm({ initialModel, compact = false }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(() => initialState(initialModel))
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)

  const updateField = <Key extends keyof FormState>(key: Key, value: FormState[Key]) => {
    setForm((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  const validate = () => {
    const nextErrors: FormErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Zadajte meno.'
    }

    if (!isValidEmail(form.email)) {
      nextErrors.email = 'Zadajte platný e-mail.'
    }

    if (!form.consent) {
      nextErrors.consent = 'Súhlas je potrebný na odoslanie formulára.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!validate()) {
      return
    }

    setSent(true)
    setForm(initialState(initialModel))
  }

  if (sent) {
    return (
      <div className="surface border-wood/10 p-6">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-wood/10">
          <CheckCircle2 className="h-7 w-7 text-wood" aria-hidden="true" />
        </span>
        <h2 className="mt-4 font-display text-3xl text-ink">Požiadavka bola odoslaná</h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          Ďakujeme. Zvyčajne odpovedáme do jedného dňa a následne spolu prejdeme
          model, vybavenie aj termín dodania.
        </p>
        <button type="button" className="btn-outline mt-6" onClick={() => setSent(false)}>
          Poslať ďalšiu požiadavku
        </button>
      </div>
    )
  }

  return (
    <form className="surface border-wood/10 p-5 sm:p-6" onSubmit={handleSubmit} noValidate>
      <div className={compact ? 'grid gap-4' : 'grid gap-4 sm:grid-cols-2'}>
        <label className="grid gap-2 text-sm text-ink">
          Meno
          <input
            className="field"
            type="text"
            name="name"
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <span className="text-xs text-red-700">{errors.name}</span>}
        </label>

        <label className="grid gap-2 text-sm text-ink">
          E-mail
          <input
            className="field"
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <span className="text-xs text-red-700">{errors.email}</span>}
        </label>

        <label className="grid gap-2 text-sm text-ink">
          Telefón
          <input
            className="field"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            autoComplete="tel"
          />
        </label>

        <label className="grid gap-2 text-sm text-ink">
          Vybraný model
          <select
            className="field"
            name="model"
            value={form.model}
            onChange={(event) => updateField('model', event.target.value)}
          >
            <option value="">Vyberte model</option>
            {products.map((product) => (
              <option key={product.slug} value={product.navName}>
                {product.navName}
              </option>
            ))}
          </select>
        </label>

        <label className={compact ? 'grid gap-2 text-sm text-ink' : 'grid gap-2 text-sm text-ink sm:col-span-2'}>
          Správa
          <textarea
            className="field min-h-36 resize-y"
            name="message"
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            placeholder="Napíšte, kam chcete kaďu umiestniť, aký model vás zaujíma alebo aké doplnky zvažujete."
          />
        </label>
      </div>

      <label className="mt-5 flex gap-3 text-sm leading-6 text-muted">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(event) => updateField('consent', event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-wood/20 text-wood"
          aria-invalid={Boolean(errors.consent)}
        />
        <span>Súhlasím so spracovaním údajov na účely vybavenia mojej požiadavky.</span>
      </label>
      {errors.consent && <p className="mt-2 text-xs text-red-700">{errors.consent}</p>}

      <p className="mt-5 text-sm leading-6 text-muted">ESOX - možnosť splácania</p>

      <button type="submit" className="btn mt-6 w-full sm:w-auto">
        Odošlite svoju požiadavku
      </button>
    </form>
  )
}
