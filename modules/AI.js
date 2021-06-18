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
    console.log(enemyHand);
    return enemyHand;
  }

  cast(target, char) {
    this.getHand(char);
    for (let i = 0; i <= enemyHand.length; i++) {
      let chosenCard = enemyHand[Math.floor(Math.random() * enemyHand.length)];
      console.log(chosenCard);
      if (chosenCard.damage) {
        if (target.armor !== 0) {
          target.armor -= chosenCard.value;
        } else {
          document.querySelector(".character__hp-value-current").textContent -=
            chosenCard.value;
        }
        console.log(`Player received ${chosenCard.value} damage`);
      } else {
        console.log("it doesn't deal damage");
      }
      enemyHand.splice(enemyHand.indexOf(chosenCard), 1);
      console.log(enemyHand);
    }
  }
}

// todo: cast next cards with timeout
