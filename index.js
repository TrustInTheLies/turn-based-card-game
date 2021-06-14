import { cards, createCards } from "./modules/db.js";
import Character from "./modules/char.js";
import Card from "./modules/card.js";
import Hand from "./modules/hand.js";

const card = document.querySelector(".card");
const playerHand = document.querySelector(".cards__hand");
let cardsHand = createCards(cards);

let cast = new Card(
  cards[0].damage,
  cards[0].defence,
  cards[0].value,
  cards[0].effects
);

let hand = new Hand();

let hero = new Character(
  50,
  0,
  { strike: 0 },
  { strike: 1, pierce: 0, slash: -1 },
  3,
  4,
  false
);
console.log(hero);

let enemy = new Character(
  25,
  0,
  { strike: 0 },
  { strike: -1, pierce: 1, slash: 0 },
  2,
  2,
  false
);
console.log(enemy);

playerHand.addEventListener("click", (event) => {
  if (event.target.closest(".card")) {
    console.log(event.target);
    cast.cast(hero, enemy);
  }
});

hand.getHand(hero, cardsHand, playerHand);
