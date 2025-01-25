import Element from "../constructor/Element.js";

const cardData = [
  'Card 1',
  'Card 2',
  'Card 3',
  'Card 4',
  'Card 5',
];

const cards = cardData.map(el => new Element('div', 'card', el).get())
const extraCards = cardData.map(el => new Element('div', 'card-extra', "Same " + el).get())

const cardsWrapper = new Element('div', 'cards-wrapper', cards).get()
const extraCardsWrapper = new Element('div', 'extra-cards-wrapper', extraCards).get()


const content = new Element('div', 'content', [cardsWrapper, extraCardsWrapper]);

export default content;