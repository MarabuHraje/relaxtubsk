import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import type { FAQItem } from '../data/faq'

type FAQAccordionProps = {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="grid gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${index}`
        const buttonId = `faq-button-${index}`

        return (
          <article key={item.question} className="surface overflow-hidden border-wood/10 transition hover:shadow-lift">
            <h2>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-lg text-ink transition hover:bg-wood/5"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                {item.question}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </h2>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="border-t border-wood/10 bg-white/50 px-5 py-5"
              >
                {item.answer.length > 1 ? (
                  <ul className="grid gap-3 text-sm leading-7 text-muted">
                    {item.answer.map((line) => (
                      <li key={line} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-wood" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm leading-7 text-muted">{item.answer[0]}</p>
                )}
              </div>
            )}
          </article>
        )
      })}
    </div>
  )
}
