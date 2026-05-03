export type FAQItem = {
  question: string
  answer: string[]
}

export const faqItems: FAQItem[] = [
  {
    question: 'Ako si objednať?',
    answer: [
      'Vyberte si model na webovej stránke.',
      'Odošlite požiadavku alebo nás kontaktujte.',
      'Dohodneme detaily a možnosti vybavenia.',
      'Uhradíte zálohu 10 %.',
      'Doplatok prebehne pri doručení alebo po montáži.',
    ],
  },
  {
    question: 'Čo zahŕňa záruka a ako funguje?',
    answer: [
      'Záruka sa vzťahuje na netesnosti, poruchy motorov a LED osvetlenia.',
      'Problém nahlásite nášmu manažérovi.',
      'Do 10 dní problém vyriešime alebo produkt vymeníme.',
    ],
  },
  {
    question: 'Aká je cena kúpacej kade s pieckou na drevo?',
    answer: [
      'Cena závisí od modelu a zvoleného vybavenia. Ako priamy výrobca ponúkame férové ceny pri zachovaní vysokej kvality.',
    ],
  },
  {
    question: 'Z čoho sú vyrobené vane, vírivky alebo fontány?',
    answer: [
      'Používame kvalitné materiály spĺňajúce európske štandardy. Každý komponent starostlivo vyberáme a testujeme.',
    ],
  },
  {
    question: 'Čo neodporúčame robiť?',
    answer: [
      'Neprekračujte odporúčanú teplotu vody 40 °C.',
      'Vodu neprehrievajte nad 45 °C, aby nedošlo k poškodeniu hydromasážneho systému.',
    ],
  },
  {
    question: 'Ako funguje platba?',
    answer: [
      '10 % záloha pri objednávke.',
      '90 % doplatok po montáži.',
      'Možnosť splátok po osobnej dohode.',
    ],
  },
]
