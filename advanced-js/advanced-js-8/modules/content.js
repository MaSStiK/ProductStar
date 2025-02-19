import Element from "../constructor/Element.js";

const cardData = [
  'Card 1',
  'Card 2',
  'Card 3',
  'Card 4',
  'Card 5',
];

const extraCardData = [
  'Same card 1',
  'Same card 2',
  'Same card 3',
  'Same card 4',
  'Same card 5',
];

const cards = cardData.map(el => new Element('div', 'card', el).get())
const extraCards = extraCardData.map(el => new Element('div', 'card-extra', el).get())

const cardsWrapper = new Element('div', 'cards-wrapper', cards).get()
const extraCardsWrapper = new Element('div', 'extra-cards-wrapper', extraCards).get()


const content = new Element('div', 'content', [cardsWrapper, extraCardsWrapper]);

export default content;