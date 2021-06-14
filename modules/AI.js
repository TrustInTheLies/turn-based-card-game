import { enemyCards, enemyHand } from "./db.js";

export default class AI {
  getHand(target) {
    for (let i = 0; i < target.handSize; i++) {
      target.effects.filter((effect) => {
        if (effect.effect === "draw") {
          i += target.effects.value;
        }
      });
      enemyHand.push(enemyCards[Math.floor(Math.random() * enemyCards.length)]);
    }
    return enemyHand;
  }

  cast(target, char) {
    this.getHand(char);
    let chosenCard = enemyHand[Math.floor(Math.random() * enemyHand.length)];
    console.log(chosenCard);
    if (chosenCard.damage) {
      console.log(`Player received ${chosenCard.value} damage`);
    } else {
      console.log("it doesn't deal damage");
    }
  }
}
