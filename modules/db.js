export const cards = [
  {
    cost: 1,
    name: "Smash",
    image: "sword",
    description: "block 5 damage (physical)",
    damage: true,
    defence: false,
    value: 5,
    effects: false,
  },
  {
    cost: 1,
    name: "Def",
    image: "shield",
    description: "block 5 damage (physical)",
    damage: false,
    defence: true,
    value: 5,
    effects: false,
  },
  {
    cost: 2,
    name: "Big Smash",
    image: "sword",
    description: "5 damage (physical) + enemy deals 25% less damage for 1 turn",
    damage: true,
    defence: false,
    value: 5,
    effects: { target: "enemy", effect: "weakness", duration: 1, value: 0.25 },
  },
  {
    cost: 2,
    name: "Big Def",
    image: "shield",
    description: "block 5 damage (physical) + 25% chance to dodge for 1 turn",
    damage: false,
    defence: true,
    value: 5,
    effects: { target: "self", effect: "dodge", duration: 1, value: 0.25 },
  },
];

export const enemyCards = [
  {
    cost: 2,
    name: "Strike",
    image: "sword",
    description: "5 damage (strike)",
    damage: true,
    defence: false,
    value: 5,
    effects: false,
  },
  {
    cost: 2,
    name: "Shield",
    image: "shield",
    description: "block 5 damage (physical)",
    damage: false,
    defence: true,
    value: 5,
    effects: false,
  },
  {
    cost: 1,
    name: "Risky Strike",
    image: "sword",
    description: "5 damage (strike) + 50% chance to miss",
    damage: true,
    defence: false,
    value: 5,
    effects: { target: "self", effect: "miss", duration: 1, value: 0.5 },
  },
  {
    cost: 1,
    name: "Risky Shield",
    image: "shield",
    description: "block 5 damage (physical) + draw 1 less card next turn",
    damage: false,
    defence: true,
    value: 5,
    effects: { target: "self", effect: "draw", duration: 1, value: -1 },
  },
];

export const enemyHand = [];

const cardsLibrary = [];

export const createCards = (cards) => {
  cards.forEach((card) => {
    const template = document.createElement("div");
    template.classList.add("card");
    template.insertAdjacentHTML(
      "beforeend",
      `
        <div class="card__header">
          <p class="card__mp">${card.cost}</p>
          <p class="card__name">${card.name}</p>
        </div>
        <img class="card__image" src="./images/${card.image}.png" alt="sword" />
        <p class="card__description">${card.description}</p>
      `
    );
    cardsLibrary.push(template);
  });
  return cardsLibrary;
};
