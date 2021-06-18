import { cards, createCards } from "./modules/db.js";
import Character from "./modules/char.js";
import Card from "./modules/card.js";
import Hand from "./modules/hand.js";
import AI from "./modules/AI.js";

const playerHand = document.querySelector(".cards__hand");
const endTurn = document.querySelector(".end-turn__button");
const currentMp = document.querySelector(".mp__value-current");
const endscreen = document.querySelector(".endscreen");

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

// todo: check this out, and remember, REMEMBER, how to pass such function to event listener

const useCard = () => {
  if (event.target.closest(".card")) {
    cast.cast(enemy, hero, event.target.closest(".card"), cards);
    if (hero.hp <= 0) {
      endscreen.textContent = "You Lose";
      playerHand.removeEventListener("click", useCard);
      endTurn.removeEventListener("click", buttonHandler);
    }
    if (enemy.hp <= 0) {
      endscreen.textContent = "You Win";
      playerHand.removeEventListener("click", useCard);
      endTurn.removeEventListener("click", buttonHandler);
    }
  }
};

const buttonHandler = () => {
  ai.cast(hero, enemy);
  playerHand.innerHTML = "";
  hand.getHand(hero, cardsHand, playerHand);
  currentMp.textContent = hero.mp;
};

playerHand.addEventListener("click", useCard);

hand.getHand(hero, cardsHand, playerHand);

endTurn.addEventListener("click", buttonHandler);
