import { routes } from '../lib/routes'

export type ProductSpecKey =
  | 'price'
  | 'stove'
  | 'seating'
  | 'heatingTime'
  | 'exteriorDiameter'
  | 'interiorDiameter'
  | 'waterCapacity'
  | 'tareWeight'
  | 'seatDepth'
  | 'tubDepth'
  | 'height'
  | 'flueHeight'

export type Product = {
  slug: string
  legacySlug: string
  formId: string
  shortName: string
  navName: string
  title: string
  price: string
  priceValue: number
  stove: string
  seating: string
  heatingTime: string
  exteriorDiameter: string
  interiorDiameter: string
  waterCapacity: string
  tareWeight: string
  seatDepth: string
  tubDepth: string
  height: string
  flueHeight: string
  description: string
  overview: string
  teaserText: string
  highlights: string[]
  image: string
  previewImage: string
  plotImage: string
  coverImage: string
  galleryImages: string[]
  plotFooterOptions: string[]
  configurator: ProductConfiguratorConfig
  plotPoints: ProductPlotPoint[]
  plotNotes?: ProductPlotPoint[]
}

export type ProductConfiguratorSelectOption = {
  value: string
  label: string
  price: number
}

export type ProductConfiguratorSelectGroup = {
  id: string
  label: string
  options: ProductConfiguratorSelectOption[]
}

export type ProductConfiguratorOption = {
  id: string
  label: string
  price: number
  checked: boolean
  disabled?: boolean
}

export type ProductConfiguratorConfig = {
  basePrice: number
  selectGroups: ProductConfiguratorSelectGroup[]
  options: ProductConfiguratorOption[]
}

export type ProductPlotPoint = {
  id: string
  top: string
  left: string
  title: string
  text?: string
}

export const comparisonRows: Array<{ key: ProductSpecKey; label: string }> = [
  { key: 'price', label: 'Cena' },
  { key: 'stove', label: 'Kúrenisko' },
  { key: 'seating', label: 'Sedenie' },
  { key: 'heatingTime', label: 'Doba ohrevu' },
  { key: 'exteriorDiameter', label: 'Vonkajší priemer' },
  { key: 'interiorDiameter', label: 'Vnútorný priemer' },
  { key: 'waterCapacity', label: 'Objem vody' },
  { key: 'tareWeight', label: 'Hmotnosť bez vody' },
  { key: 'seatDepth', label: 'Hĺbka sedadla' },
  { key: 'tubDepth', label: 'Hĺbka suda' },
  { key: 'height', label: 'Výška' },
  { key: 'flueHeight', label: 'Výška komína' },
]

export const optionalElements = [
  'Hydromasáž',
  'LED podsvietenie',
  'Izolácia vane',
  'Ľahký termokryt',
  'Ochranný kryt na komín',
  'Polička na nápoje',
  'Vodotesný obal',
  'Antialergický dezinfekčný prostriedok na vodu',
  'Vývod na filtráciu',
  '+12 vzduchových trysiek',
]

export const productBenefits = [
  'Životnosť vane až 25 rokov',
  'Životnosť dreva až 10 rokov',
  'Rýchla dodávka',
  'Doprava zadarmo do 300 km',
  'Malá záloha 10 %',
  'Platba po inštalácii',
  '24 mesiacov záruky',
  'Vlastná výroba',
]

export const closerLook = [
  {
    title: 'Kompozitná vaňa',
    text: 'Jednodielna misa s anatomickým tvarom sa ľahko udržiava a pomáha predchádzať netesnostiam.',
  },
  {
    title: 'Drevené obloženie',
    text: 'Drevo je tepelne upravené a chránené náterom, aby prirodzene zapadlo do záhrady aj wellness priestoru.',
  },
  {
    title: 'Výkonná piecka',
    text: 'Nerezová piecka zabezpečuje rýchly ohrev vody a komfortné používanie počas celého roka.',
  },
  {
    title: 'Jednoduchá údržba',
    text: 'Premyslený odtok, dostupné príslušenstvo a hladký povrch skracujú čas starostlivosti o kaďu.',
  },
]

const trimColorSelect: ProductConfiguratorSelectGroup = {
  id: 'shim',
  label: 'Farba lemovania',
  options: [
    { value: 'orech', label: 'Farba lemovania: orech', price: 0 },
    { value: 'dub', label: 'Farba lemovania: dub', price: 0 },
    { value: 'palisander', label: 'Farba lemovania: palisander', price: 0 },
  ],
}

const greyTubSelect: ProductConfiguratorSelectGroup = {
  id: 'tub',
  label: 'Farba suda',
  options: [{ value: 'siva', label: 'Farba suda: siva', price: 0 }],
}

const stoneTubSelect: ProductConfiguratorSelectGroup = {
  id: 'tub',
  label: 'Farba suda',
  options: [
    { value: 'sivý kameň', label: 'Farba suda: sivý kameň', price: 0 },
    { value: 'modrý kameň', label: 'Farba suda: modrý kameň', price: 0 },
  ],
}

const hydromassageSelect: ProductConfiguratorSelectGroup = {
  id: 'hydromassage',
  label: 'Hydromasáž',
  options: [
    { value: '6 trysiek', label: 'Hydromasáž: 6 trysiek', price: 0 },
    { value: '12 trysiek', label: 'Hydromasáž: 12 trysiek +400 €', price: 400 },
  ],
}

const basePlotOptions = [
  'Hydromasáž',
  'LED podsvietenie',
  'Izolácia vane',
  'Ľahký termokryt',
  'Ochranný kryt na komín',
]

const fullPlotOptions = [
  ...basePlotOptions,
  '12 trysiek',
  'Vodeodolné puzdro',
  'Polička na nápoj',
]

const included = (label: string): ProductConfiguratorOption => ({
  id: label,
  label,
  price: 0,
  checked: true,
  disabled: true,
})

const optional = (label: string, price: number): ProductConfiguratorOption => ({
  id: label,
  label,
  price,
  checked: false,
})

export const products: Product[] = [
  {
    slug: 'compact',
    legacySlug: 'compact-kupacia-kada-s-integrovanou-pieckou',
    formId: '194',
    shortName: 'Compact',
    navName: 'Compact',
    title: 'Compact: kúpacia kaďa s integrovanou pieckou',
    price: '2,600 €',
    priceValue: 2600,
    stove: 'Integrovaná',
    seating: '4–5 osôb',
    heatingTime: '1:45–2:45 h',
    exteriorDiameter: '205 cm',
    interiorDiameter: '185 cm',
    waterCapacity: '1 000 l',
    tareWeight: '190 kg',
    seatDepth: '70 cm',
    tubDepth: '85 cm',
    height: '95 cm',
    flueHeight: '250 cm',
    description:
      'Model Compact spája veľkorysý priestor, integrovanú piecku a čistý drevený vzhľad pre každodenný relax na záhrade.',
    overview:
      'Kompaktnejšia a elegantne navrhnutá kúpacia kaďa, ktorá dokonale zapadne do každej záhrady. Vyniká úsporou vody a minimalizuje tepelné straty počas ohrevu.',
    teaserText:
      'Vstúpte do sveta luxusu s našimi precízne vyrobenými kúpacími kadami na drevo, saunami, vírivkami a ďalšími produktmi. Každý výrobok z našej kolekcie je odborným dielom navrhnutým tak, aby priniesol neopakovateľné pohodlie, odolnosť a štýl, čím zabezpečí, že každý okamih strávený vo vašej Relax Tub bude jednoducho magický.',
    highlights: ['Integrovaná piecka', 'Komfort pre 4–5 osôb', 'Klasický okrúhly tvar'],
    image: '/images/products/compact.png',
    previewImage: '/images/preview/compact.png',
    plotImage: '/images/plot/compact.png',
    coverImage: '/images/covers/compact.jpg',
    galleryImages: [
      '/images/gallery/compact/compact-01.jpg',
      '/images/gallery/compact/compact-02.jpg',
      '/images/gallery/compact/compact-03.jpg',
      '/images/gallery/compact/compact-04.jpg',
      '/images/gallery/compact/compact-05.jpg',
      '/images/gallery/compact/compact-06.jpg',
    ],
    plotFooterOptions: fullPlotOptions,
    configurator: {
      basePrice: 2600,
      selectGroups: [trimColorSelect, greyTubSelect, hydromassageSelect],
      options: [
        included('Ohrev vane'),
        included('Ľahký termokryt'),
        included('Ochranný kryt na komín'),
        included('LED osvetlenie'),
        included('Schody'),
        included('Vývod na filtráciu'),
        included('Rebrík'),
        included('Adaptér na filter'),
        optional('Polička na nápoje', 30),
        optional('Vodotesný obal', 120),
      ],
    },
    plotPoints: [
      {
        id: '1',
        top: '64%',
        left: '42%',
        title: 'Kompozitná misa',
        text: 'Anatomický tvar. Bez plesní a húb. Jednoduchá údržba. Jednoliaty materiál zabraňuje vysychaniu a únikom vody',
      },
      {
        id: '2',
        top: '71%',
        left: '33%',
        title: 'Borovicový obklad',
        text: 'Drevo je tepelne upravené a natreté vodoodpudivou farbou',
      },
      { id: '3', top: '83%', left: '22%', title: 'Pohodlné schody', text: 'Stabilné a komfortné schodíky' },
      { id: '4', top: '51%', left: '73%', title: 'Ochranný kryt komína', text: 'Z nehrdzavejúcej ocele – zabraňuje kontaktu' },
      {
        id: '5',
        top: '90%',
        left: '56%',
        title: 'Výkonná piecka',
        text: '35 kW piecka z nehrdzavejúcej ocele AISI 304 – rýchle vyhrievanie a dlhá životnosť. Sklenené dvierka pre kontrolu ohrevu.',
      },
      { id: '6', top: '97%', left: '53%', title: 'Jednoduché vypúšťanie vody' },
    ],
  },
  {
    slug: 'pre-rodinu',
    legacySlug: 'pre-rodinu-kupacia-kada-s-externou-pieckou',
    formId: '191',
    shortName: 'Family',
    navName: 'Pre rodinu',
    title: 'Pre rodinu: kúpacia kaďa s externou pieckou',
    price: '2,500 €',
    priceValue: 2500,
    stove: 'Externá',
    seating: '5–6 osôb',
    heatingTime: '2:00–3:00 h',
    exteriorDiameter: '205 cm',
    interiorDiameter: '185 cm',
    waterCapacity: '1 250 l',
    tareWeight: '150 kg',
    seatDepth: '70 cm',
    tubDepth: '85 cm',
    height: '95 cm',
    flueHeight: '250 cm',
    description:
      'Veľká a pohodlná kúpacia kaďa navrhnutá pre rodiny a väčšie skupiny s variabilnou externou pieckou.',
    overview:
      'Veľká a pohodlná kúpacia kaďa navrhnutá pre väčšie skupiny aj rodiny. Ideálna na umiestnenie do záhrady, no zároveň ponúka možnosť integrácie do terasy alebo prístavby – piecka zostáva vonku, zatiaľ čo kaďa môže byť vo vnútri, čo zaručuje väčšiu variabilitu a pohodlie.',
    teaserText:
      'Ako priekopníci v tomto odvetví s viac než desaťročnými skúsenosťami sme hrdí na svoje remeselné spracovanie a záväzok k dokonalosti. Náš tím zručných remeselníkov starostlivo vyrába každú kaďu ručne z tých najkvalitnejších materiálov, čo zaručuje výnimočnú kvalitu a dlhú životnosť.',
    highlights: ['Externá piecka', 'Pre 5–6 osôb', 'Väčší objem vody'],
    image: '/images/products/family.png',
    previewImage: '/images/preview/family.png',
    plotImage: '/images/plot/family.png',
    coverImage: '/images/covers/family.jpg',
    galleryImages: [
      '/images/gallery/family/family-01.jpg',
      '/images/gallery/family/family-02.jpg',
      '/images/gallery/family/family-03.jpg',
      '/images/gallery/family/family-04.jpg',
      '/images/gallery/family/family-05.jpg',
      '/images/gallery/family/family-06.jpg',
      '/images/gallery/family/family-07.jpg',
      '/images/gallery/family/family-08.jpg',
      '/images/gallery/family/family-09.jpg',
    ],
    plotFooterOptions: [...fullPlotOptions, 'Antialergický dezinfektor vody'],
    configurator: {
      basePrice: 2500,
      selectGroups: [trimColorSelect, greyTubSelect, hydromassageSelect],
      options: [
        included('Ohrev vane'),
        included('Ľahký termokryt'),
        included('Ochranný kryt na komín'),
        included('LED osvetlenie'),
        optional('Polička na nápoje', 30),
        optional('Vodotesný obal', 120),
        optional('Antialergický dezinfekčný prostriedok na vodu', 75),
      ],
    },
    plotPoints: [
      { id: '1', top: '50%', left: '29%', title: 'Ochranný kryt komína', text: 'Z nehrdzavejúcej ocele – zabraňuje kontaktu' },
      { id: '2', top: '90%', left: '30%', title: 'Výkonná piecka', text: 'Veľký sklad jacuzzi na sklade' },
      { id: '3', top: '88%', left: '47%', title: 'Jednoduché vypúšťanie vody' },
      { id: '6', top: '76%', left: '66%', title: 'Borovicový obklad', text: 'Drevo je tepelne upravené a natreté vodoodpudivou farbou' },
      {
        id: '8',
        top: '61%',
        left: '58%',
        title: 'Kompozitná misa',
        text: 'Anatomický tvar. Bez plesní a húb. Jednoduchá údržba. Jednoliaty materiál zabraňuje vysychaniu a únikom vody',
      },
    ],
    plotNotes: [
      { id: '1', top: '50%', left: '29%', title: 'Ochranný kryt komína', text: 'Z nehrdzavejúcej ocele – zabraňuje kontaktu' },
      { id: '2', top: '90%', left: '30%', title: 'Výkonná piecka', text: 'Veľký sklad jacuzzi na sklade' },
      { id: '3', top: '88%', left: '47%', title: 'Jednoduché vypúšťanie vody' },
      { id: '4', top: '75%', left: '80%', title: 'Možnosť pripojenia filtrácie' },
      { id: '5', top: '78%', left: '25%', title: 'Pohodlné schody', text: 'Stabilné a komfortné schodíky' },
      { id: '6', top: '76%', left: '66%', title: 'Borovicový obklad', text: 'Drevo je tepelne upravené a natreté vodoodpudivou farbou' },
      {
        id: '8',
        top: '61%',
        left: '58%',
        title: 'Kompozitná misa',
        text: 'Anatomický tvar. Bez plesní a húb. Jednoduchá údržba. Jednoliaty materiál zabraňuje vysychaniu a únikom vody',
      },
    ],
  },
  {
    slug: 'duo',
    legacySlug: 'duo-kupacia-kada-s-externou-pieckou',
    formId: '192',
    shortName: 'Duo',
    navName: 'Duo',
    title: 'Duo: kúpacia kaďa s externou pieckou',
    price: '2,300 €',
    priceValue: 2300,
    stove: 'Externá',
    seating: '2 osôb',
    heatingTime: '1:30–2:30 h',
    exteriorDiameter: '109 cm',
    interiorDiameter: '160 cm',
    waterCapacity: '750 l',
    tareWeight: '125 kg',
    seatDepth: '70 cm',
    tubDepth: '90 cm',
    height: '102 cm',
    flueHeight: '250 cm',
    description:
      'Kompaktná kúpacia kaďa ideálna pre pár alebo menšiu záhradu. Rýchly ohrev a nižšia spotreba vody.',
    overview:
      'Ideálna kúpacia kaďa do kompaktnej záhrady, ako stvorená pre pár. Vyniká rýchlym ohrevom a výrazne šetrí spotrebu vody.',
    teaserText:
      'Doprajte si vrchol pohodlia a luxusu s Relax Tub. Pridajte sa k stovkám spokojných zákazníkov z Ukrajiny a celej Európy, ktorí objavili transformačnú silu našich SPA kúpeľov. Vstúpte do svojej osobnej oázy – vitajte v Relax Tub.',
    highlights: ['Ideálna pre pár', 'Rýchly ohrev', 'Úsporný objem vody'],
    image: '/images/products/duo.png',
    previewImage: '/images/preview/duo.png',
    plotImage: '/images/plot/duo.png',
    coverImage: '/images/covers/duo.jpg',
    galleryImages: [
      '/images/gallery/duo/duo-01.jpg',
      '/images/gallery/duo/duo-02.jpg',
      '/images/gallery/duo/duo-03.jpg',
      '/images/gallery/duo/duo-04.jpg',
    ],
    plotFooterOptions: basePlotOptions,
    configurator: {
      basePrice: 2300,
      selectGroups: [trimColorSelect, greyTubSelect],
      options: [
        included('Ohrev vane'),
        included('Ľahký termokryt'),
        included('Ochranný kryt na komín'),
        included('LED osvetlenie'),
        optional('Polička na nápoje', 30),
        optional('Vodotesný obal', 120),
      ],
    },
    plotPoints: [
      { id: '1', top: '55%', left: '36%', title: 'Veľkosť suda', text: 'Malý objem vody umožňuje rýchle vyhriatie a jednoduchú montáž' },
      { id: '2', top: '68%', left: '30%', title: 'Borovicový obklad', text: 'Drevo je tepelne upravené a natreté vodoodpudivou farbou' },
      { id: '3', top: '73%', left: '38%', title: 'Smrekovec hrúbky 20 ml' },
      { id: '4', top: '86%', left: '71%', title: 'Jednoduché vypúšťanie vody' },
      {
        id: '5',
        top: '80%',
        left: '62%',
        title: 'Výkonná piecka',
        text: '35 kW piecka z nehrdzavejúcej ocele AISI 304 – rýchle vyhrievanie a dlhá životnosť. Sklenené dvierka pre kontrolu ohrevu.',
      },
      { id: '6', top: '51%', left: '69%', title: 'Ochranný kryt komína', text: 'Z nehrdzavejúcej ocele – zabraňuje kontaktu' },
      {
        id: '7',
        top: '50%',
        left: '50%',
        title: 'Kompozitná misa',
        text: 'Anatomický tvar. Bez plesní a húb. Jednoduchá údržba. Jednoliaty materiál zabraňuje vysychaniu a únikom vody',
      },
    ],
  },
  {
    slug: 'contrast-dive',
    legacySlug: 'contrast-dive-kupacia-kada-s-integrovanou-pieckou',
    formId: '193',
    shortName: 'Contrast',
    navName: 'Contrast Dive',
    title: 'Contrast Dive: kúpacia kaďa s integrovanou pieckou',
    price: '3,600 €',
    priceValue: 3600,
    stove: 'Integrovaná',
    seating: '4–5 osôb',
    heatingTime: 'Studená voda / 1:45–2:45 h',
    exteriorDiameter: '120 / 205 cm',
    interiorDiameter: '100 / 185 cm',
    waterCapacity: '800 / 1 000 l',
    tareWeight: '120 / 190 kg',
    seatDepth: '70 cm',
    tubDepth: '1.35 / 85 cm',
    height: '145 / 95 cm',
    flueHeight: '250 cm',
    description:
      'Kombinácia horúcej a studenej kade pre kontrastné kúpanie, regeneráciu a hlbší wellness zážitok.',
    overview:
      'Ak sa chcete ponoriť čo najhlbšie a zažiť všetky výhody našich kadí, odporúčame zvoliť balík „deep dive“. Vďaka kombinácii ľadovej a horúcej kade môžete vykonávať špeciálne cvičenia, ktoré vám otvoria nové pocity a pozitívne ovplyvnia vaše srdce aj celkovú pohodu.',
    teaserText:
      'Či už hľadáte súkromné útočisko v pohodlí vlastného domova alebo chcete obohatiť svoje podnikanie o profesionálne SPA vybavenie, Relax Tub má pre vás ideálne riešenie. Naše možnosti prispôsobenia vám umožňujú upraviť kaďu podľa vašich predstáv, vďaka čomu sa každý kúpeľ stáva osobným zážitkom šitým na mieru vašim potrebám.',
    highlights: ['Teplá aj studená voda', 'Regenerácia po záťaži', 'Prémiový SPA zážitok'],
    image: '/images/products/contrast.png',
    previewImage: '/images/preview/contrast.png',
    plotImage: '/images/plot/contrast.png',
    coverImage: '/images/covers/contrast-dive.jpg',
    galleryImages: [],
    plotFooterOptions: basePlotOptions,
    configurator: {
      basePrice: 3600,
      selectGroups: [trimColorSelect, greyTubSelect, hydromassageSelect],
      options: [
        included('Ohrev vane'),
        included('Ľahký termokryt'),
        included('Ochranný kryt na komín'),
        included('LED osvetlenie'),
        included('Veľké schody'),
        included('Studená kaďa'),
        included('Kompozitné veko'),
        optional('Polička na nápoje', 30),
        optional('Vodotesný obal', 120),
      ],
    },
    plotPoints: [
      {
        id: '1',
        top: '49%',
        left: '33%',
        title: 'Kompozitná misa',
        text: 'Anatomický tvar. Bez plesní a húb. Jednoduchá údržba. Jednoliaty materiál zabraňuje vysychaniu a únikom vody',
      },
      {
        id: '2',
        top: '59%',
        left: '62%',
        title: 'Kompozitná misa',
        text: 'Anatomický tvar. Bez plesní a húb. Jednoduchá údržba. Jednoliaty materiál zabraňuje vysychaniu a únikom vody',
      },
      { id: '3', top: '61%', left: '23%', title: 'Borovicový obklad', text: 'Drevo je tepelne upravené a natreté vodoodpudivou farbou' },
      { id: '4', top: '85%', left: '33%', title: 'Pohodlné schody', text: 'Veľké a pohodlné odtoky pre obe nádrže' },
      { id: '5', top: '92%', left: '69%', title: 'Jednoduché vypúšťanie vody' },
      { id: '6', top: '83%', left: '69%', title: 'Výkonná piecka', text: 'Veľký sklad jacuzzi na sklade' },
      { id: '7', top: '60%', left: '83%', title: 'Ochranný kryt komína', text: 'Z nehrdzavejúcej ocele – zabraňuje kontaktu' },
    ],
  },
  {
    slug: 'quadro',
    legacySlug: 'quadro-kupacia-kada-s-integrovanou-pieckou',
    formId: '190',
    shortName: 'Quadro',
    navName: 'Quadro',
    title: 'Quadro: kúpacia kaďa s integrovanou pieckou',
    price: '3,000 €',
    priceValue: 3000,
    stove: 'AISI 304',
    seating: '5 osôb',
    heatingTime: '1.5–2 h',
    exteriorDiameter: '205 cm',
    interiorDiameter: '180 cm',
    waterCapacity: '1 000 l',
    tareWeight: '225 kg',
    seatDepth: '70 cm',
    tubDepth: '85 cm',
    height: '100 cm',
    flueHeight: '250 cm',
    description:
      'Štvorcový model s moderným dizajnom, komfortným sedením, výkonnou pieckou a minimálnou údržbou.',
    overview:
      'Štvorcový model našej vírivky, ktorý spája všetky výhody predchádzajúcich modelov. Štýlový vzhľad vďaka unikátnemu sfarbeniu vane, oddelené miesta na vankúšiky, väčšia piecka pre rýchlejšie ohrev vody, pohodlná a ergonomická vaňa s držiakom na nápoje.',
    teaserText:
      'Úplne nový a jedinečný model vo svojom farebnom prevedení a dizajne. Ponúka maximálnu spokojnosť a minimálnu starostlivosť pre našich zákazníkov za základnú cenu.',
    highlights: ['Moderný štvorcový dizajn', 'Piecka AISI 304', 'Minimálna starostlivosť'],
    image: '/images/products/quadro.png',
    previewImage: '/images/preview/quadro.png',
    plotImage: '/images/plot/quadro.png',
    coverImage: '/images/covers/quadro.jpg',
    galleryImages: [
      '/images/gallery/quadro/quadro-01.jpg',
      '/images/gallery/quadro/quadro-02.jpg',
      '/images/gallery/quadro/quadro-03.jpg',
      '/images/gallery/quadro/quadro-04.jpg',
      '/images/gallery/quadro/quadro-05.jpg',
      '/images/gallery/quadro/quadro-06.jpg',
    ],
    plotFooterOptions: basePlotOptions,
    configurator: {
      basePrice: 3000,
      selectGroups: [trimColorSelect, stoneTubSelect],
      options: [
        included('Ohrev vane'),
        included('Ľahký termokryt'),
        included('Ochranný kryt na komín'),
        included('LED osvetlenie'),
        included('Vývod na filtráciu'),
        optional('Polička na nápoje', 30),
        optional('+12 vzduchových trysiek', 350),
      ],
    },
    plotPoints: [
      { id: '1', top: '84%', left: '28%', title: 'Rýchle a jednoduché vypúšťanie vody' },
      { id: '2', top: '65%', left: '28%', title: 'Výstup na pripojenie filtrácie' },
      { id: '3', top: '61%', left: '30%', title: '3 vrstvy náteru na vani' },
      { id: '4', top: '53%', left: '50%', title: 'Tepelnoizolačné veko je ľahké a ľahko sa používa' },
      { id: '5', top: '81%', left: '47%', title: 'Nerezové dvierka s výkonnou pieckou 50 kW' },
      { id: '6', top: '87%', left: '55%', title: 'Samostatný odtok vody z piecky' },
      { id: '7', top: '69%', left: '57%', title: 'Ochranný kryt pre bezpečné používanie' },
      { id: '8', top: '56%', left: '67%', title: '5 pevných opierok hlavy' },
      { id: '9', top: '59%', left: '71%', title: 'Možnosť umiestnenia nápojov v priestore pri okraji' },
    ],
  },
]

export const getProductBySlug = (slug?: string) =>
  products.find((product) => product.slug === slug || product.legacySlug === slug)

export const productLinks = products.map((product) => ({
  label: product.navName,
  to: routes.product(product.slug),
}))
