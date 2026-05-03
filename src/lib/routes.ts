const legacyProductSlugs: Record<string, string> = {
  compact: 'compact-kupacia-kada-s-integrovanou-pieckou',
  'pre-rodinu': 'pre-rodinu-kupacia-kada-s-externou-pieckou',
  duo: 'duo-kupacia-kada-s-externou-pieckou',
  'contrast-dive': 'contrast-dive-kupacia-kada-s-integrovanou-pieckou',
  quadro: 'quadro-kupacia-kada-s-integrovanou-pieckou',
}

export const routes = {
  home: '/sk/',
  products: '/sk/porovnavacia-tabulka/',
  product: (slug: string) =>
    `/sk/porovnavacia-tabulka/${legacyProductSlugs[slug] ?? slug}/`,
  compare: '/sk/porovnavacia-tabulka/',
  faq: '/sk/casto-kladene-otazky/',
  about: '/sk/ahoj-sme-rodinna-firma/',
  contact: '/sk/toto-su-nase-kontakty-zvycajne-odpovedame-do-jedneho-dna/',
}

export const siteUrl = 'https://relaxtubsk.com'
