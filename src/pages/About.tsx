import SEO from '../components/SEO'
import { routes } from '../lib/routes'

export default function About() {
  return (
    <>
      <SEO
        title="Ahoj! Sme rodinná firma"
        description="Ahoj! Sme rodinná firma Relax Tub. Spoznajte príbeh výroby kúpacích kadí a európskeho rastu značky."
        path={routes.about}
      />

      <section className="relative isolate min-h-screen overflow-hidden bg-night text-white">
        <img
          src="/images/covers/company-touch.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-65"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-night/58" />
        <div className="section-shell relative grid gap-5 pb-28 pt-36 sm:pt-44 md:grid-cols-[260px_1fr]">
          <p className="text-base leading-6 text-white/85">O nás</p>
          <div className="max-w-4xl">
            <h1 className="font-display text-5xl leading-tight text-copper sm:text-7xl">
              Ahoj! Sme rodinná firma
            </h1>

            <div className="mt-20 space-y-7 font-serif text-2xl leading-10 text-white sm:text-3xl sm:leading-[1.28]">
            <p>
              Spoločnosť Relax Tub založil Vadim Yakovych Zavalka a postupne sa k nemu
              pridala celá rodina. Kvalitu našich kúpacích kadí nikto na ukrajinskom trhu
              neprekonal – a to vďaka rodinnej spolupráci a maximálnemu nasadeniu.
              Postupom času sme starostlivo testovali každú súčiastku od dodávateľov
              a vybrali len tie najlepšie. Vytvorili sme si priame vzťahy s dodávateľmi,
              aby sme mohli zvýšiť kvalitu a zároveň znížiť náklady.
            </p>
            <p>
              Od roku 2020 sa Relax Tub rozšíril na európsky trh – vyvážame naše produkty
              do Nemecka, Litvy, Českej republiky a Dánska. V roku 2021 sme otvorili
              pobočku na Slovensku, ktorú vedie náš najstarší syn Bohdan. V roku 2022,
              po vypuknutí vojny, sme založili ďalší výrobný závod v meste Ľvov.
            </p>
            <p>
              Našou najväčšou zákazkou bola dodávka 500 víriviek ročne na dánsky trh.
              V súčasnosti dosahuje naša výrobná kapacita 100 víriviek mesačne, čo z nás
              robí lídra vo výrobe kúpacích kadí na Ukrajine.
            </p>
            <p>
              V Relax Tub sa zameriavame na špičkovú kvalitu, precízne spracovanie
              a maximálnu starostlivosť o každý detail. Pridajte sa k nám a zažite oddych
              ako nikdy predtým.
            </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
