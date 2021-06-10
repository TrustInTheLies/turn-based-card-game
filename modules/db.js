export const cards = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    cost: 2,
    name: "Big Smash",
    image: "sword",
    description:
      "5 урона (физический) + атаки врага нанесут на 25% меньше урона на 1 ход",
    damage: true,
    defence: false,
    value: 5,
    effects: { target: "enemy", effect: "weakness", duration: 1 },
  },
  {
    id: 4,
    cost: 2,
    name: "Big Def",
    image: "shield",
    description: "блок на 5 урона (физический) + 25% шанс уворота на 1 ход",
    damage: false,
    defence: true,
    value: 5,
    effects: { target: "self", effect: "dodge", duration: 1 },
  },
];

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
    <p class="card__description">${card.description}</p>`
    );
    cardsLibrary.push(template);
  });
  console.log(cardsLibrary);
  return cardsLibrary;
};
