import { cards, createCards } from "./modules/db.js";
import Character from "./modules/char.js";
import Card from "./modules/card.js";
import Hand from "./modules/hand.js";
import AI from "./modules/AI.js";

const playerHand = document.querySelector(".cards__hand");
const endTurn = document.querySelector(".end-turn__button");
const currentMp = document.querySelector(".mp__value-current");

let ai = new AI();

let cardsHand = createCards(cards);

let cast = new Card();

let hand = new Hand();

let hero = new Character(
  50,
  0,
  { strike: 0 },
  { strike: 1, pierce: 0, slash: -1 },
  3,
  4,
  []
);

let enemy = new Character(
  25,
  0,
  { strike: 0 },
  { strike: -1, pierce: 1, slash: 0 },
  2,
  2,
  []
);

playerHand.addEventListener("click", (event) => {
  if (event.target.closest(".card")) {
    cast.cast(enemy, hero, event.target.closest(".card"), cards);
  }
});

hand.getHand(hero, cardsHand, playerHand);

endTurn.addEventListener("click", () => {
  ai.cast(hero, enemy);
  playerHand.innerHTML = "";
  hand.getHand(hero, cardsHand, playerHand);
  currentMp.textContent = hero.mp;
});
