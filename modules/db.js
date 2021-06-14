export const cards = [
  {
    cost: 1,
    name: "Smash",
    image: "sword",
    description: "5 урона (физический)",
    damage: true,
    defence: false,
    value: 5,
    effects: false,
  },
  {
    cost: 1,
    name: "Def",
    image: "shield",
    description: "блок на 5 урона (физический)",
    damage: false,
    defence: true,
    value: 5,
    effects: false,
  },
  {
    cost: 2,
    name: "Big Smash",
    image: "sword",
    description:
      "5 урона (физический) + атаки врага нанесут на 25% меньше урона на 1 ход",
    damage: true,
    defence: false,
    value: 5,
    effects: { target: "enemy", effect: "weakness", duration: 1, value: 0.25 },
  },
  {
    cost: 2,
    name: "Big Def",
    image: "shield",
    description: "блок на 5 урона (физический) + 25% шанс уворота на 1 ход",
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
    description: "5 урона (дробящий)",
    damage: true,
    defence: false,
    value: 5,
    effects: false,
  },
  {
    cost: 2,
    name: "Shield",
    image: "shield",
    description: "блок на 5 урона (физический)",
    damage: false,
    defence: true,
    value: 5,
    effects: false,
  },
  {
    cost: 1,
    name: "Risky Strike",
    image: "sword",
    description: "5 урона (дробящий) + шанс промаха 50%",
    damage: true,
    defence: false,
    value: 5,
    effects: { target: "self", effect: "miss", duration: 1, value: 0.5 },
  },
  {
    cost: 1,
    name: "Risky Shield",
    image: "shield",
    description:
      "блок на 5 урона (физический) + на 1 карту меньше в следующем ходу",
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
