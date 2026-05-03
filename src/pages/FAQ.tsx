import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { routes } from '../lib/routes'

export default function FAQ() {
  return (
    <>
      <SEO
        title="Často kladené otázky"
        description="Otázky a odpovede Relax Tub k objednávke, záruke, cene, materiálom, používaniu a platbe."
        path={routes.faq}
      />

      <section className="bg-night pb-24 pt-36 text-copper sm:pb-32 sm:pt-44">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-center font-display text-5xl leading-tight text-copper sm:text-7xl">
              Neváhajte nás{' '}
              <Link to={routes.contact} className="border-b border-copper/35 text-white">
                kontaktovať
              </Link>
              , ak máte ďalšie otázky
            </h1>

            <div className="mt-24 space-y-20 font-serif text-2xl leading-10 text-white sm:text-3xl sm:leading-[1.28]">
              <div>
                <h2 className="font-display text-4xl leading-tight text-copper sm:text-5xl">
                  Ako si objednať?
                </h2>
                <ol className="mt-7 list-decimal space-y-2 pl-7 marker:font-body marker:text-base marker:text-copper [&>li]:pl-2">
                <li>Vyberte si model na našej webovej stránke</li>
                <li>Pridajte ho do košíka</li>
                <li>Zavolajte nášmu manažérovi alebo vás budeme kontaktovať po odoslaní objednávky</li>
                <li>Záloha vo výške 10 %</li>
                <li>Prevzatie a doplatenie objednávky pri doručení</li>
              </ol>
            </div>

              <div>
                <h2 className="font-display text-4xl leading-tight text-copper sm:text-5xl">
                  Čo zahŕňa záruka a ako funguje?
                </h2>
                <ol className="mt-7 list-decimal space-y-2 pl-7 marker:font-body marker:text-base marker:text-copper [&>li]:pl-2">
                <li>Záruka sa vzťahuje na netesnosti akýchkoľvek častí, poruchy motorov alebo LED osvetlenia</li>
                <li>Kontaktujte nášho manažéra a nahláste problém</li>
                <li>Do 10 dní problém vyriešime alebo vám nádrž vymeníme</li>
              </ol>
            </div>

              <div>
                <h2 className="font-display text-4xl leading-tight text-copper sm:text-5xl">
                  Aká je cena kúpacej kade s pieckou na drevo?
                </h2>
                <p className="mt-7">
                Konečná cena závisí od modelu, o ktorý máte záujem. Sme priamy výrobca,
                preto ponúkame atraktívne ceny pri zachovaní vysokej kvality produktov.
              </p>
            </div>

              <div>
                <h2 className="font-display text-4xl leading-tight text-copper sm:text-5xl">
                  Z čoho sú vyrobené vane, vírivky alebo fontány?
                </h2>
                <p className="mt-7">
                Použité suroviny spĺňajú najvyššie európske štandardy kvality a sú
                starostlivo vyberané našimi technológmi.
              </p>
            </div>

              <div>
                <h2 className="font-display text-4xl leading-tight text-copper sm:text-5xl">
                  Čo neodporúčame robiť?
                </h2>
                <p className="mt-7">
                Maximálna odporúčaná teplota pre človeka je 40 °C – vyššia teplota
                môže mať negatívne účinky na vaše zdravie. Vodu v nádrži nie je
                dovolené prehrievať nad 45 °C, pretože to môže poškodiť hydromasážny systém.
              </p>
            </div>

              <div>
                <h2 className="font-display text-4xl leading-tight text-copper sm:text-5xl">
                  Platba
                </h2>
                <p className="mt-7">
                10 % záloha pri objednávke<br />
                90 % doplatok po montáži<br />
                Možnosť platby na splátky po osobnej dohode
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
