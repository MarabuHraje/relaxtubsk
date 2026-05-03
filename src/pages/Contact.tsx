import SEO from '../components/SEO'
import { routes } from '../lib/routes'

const contacts = [
  {
    type: '',
    value: 'furako.relax@gmail.com',
    href: 'mailto:furako.relax@gmail.com',
  },
  {
    type: 'Telefón',
    value: '+421 951 875 337',
    href: 'tel:+421951875337',
  },
  {
    type: 'Instagram',
    value: 'relax_tub.sk',
    href: 'https://www.instagram.com/relax_tub.sk',
  },
  {
    type: 'Facebook',
    value: 'Relax Tub',
    href: 'https://www.facebook.com/profile.php?id=61556302495783',
  },
]

export default function Contact() {
  return (
    <>
      <SEO
        title="Toto sú naše kontakty. Zvyčajne odpovedáme do jedného dňa."
        description="Toto sú naše kontakty. Zvyčajne odpovedáme do jedného dňa. E-mail furako.relax@gmail.com, telefón +421 951 875 337."
        path={routes.contact}
      />

      <section className="bg-night pb-24 pt-36 text-white sm:pb-32 sm:pt-44">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-center font-display text-5xl leading-tight text-copper sm:text-7xl">
              Toto sú naše kontakty. Zvyčajne odpovedáme do jedného dňa.
            </h1>
          </div>

          <div className="mx-auto mt-24 max-w-4xl space-y-14">
            {contacts.map((contact, index) => (
              <div key={contact.value} className="grid gap-4 md:grid-cols-[260px_1fr]">
                <div className="text-base text-white/85">{contact.type}</div>
                <a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                  className={`block w-fit max-w-full border-b border-current font-serif leading-tight ${
                    index === 0
                      ? 'break-all text-[1.75rem] min-[430px]:text-4xl sm:text-5xl'
                      : 'break-words text-4xl sm:text-5xl'
                  } ${
                    index === 1 ? 'text-copper' : 'text-white'
                  }`}
                >
                  {contact.value}
                </a>
              </div>
            ))}

            <div className="grid gap-4 md:grid-cols-[260px_1fr]">
              <div className="text-base text-white/85">Adresa</div>
              <div>
                <p className="break-words font-serif text-4xl leading-tight text-copper sm:text-5xl">
                  Horný dvor, 2, 900 27, Bernolákovo, Slovakia
                </p>
                <a
                  href="https://www.google.com/maps/place/Horný+dvor+1514%2F2,+900+27+Bernolákovo,+Slovakia/@48.2056909,17.2840258,17z/data=!3m1!4b1!4m6!3m5!1s0x476c853a0ae8548b:0xc45b4cca25b2f5bd!8m2!3d48.2056874!4d17.2866007!16s%2Fg%2F11cslwlvj7?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex border-b border-white/40 font-serif text-2xl leading-tight text-white"
                >
                  Zobraziť na Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
