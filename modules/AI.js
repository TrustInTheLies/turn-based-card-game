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
      let effectType = char.effects.map((value) => value.effect);
      console.log(chosenCard);
      // todo: if (effect.duration) { deal damage * effect.value and duration -= 1} else
      if (chosenCard.damage) {
        if (char.effects !== []) {
          // todo: switch case after more effect types will be presented
          if (effectType.includes("weakness")) {
            let effectData = char.effects.filter(
              (effect) => effect.effect == effectType
            );
            /* todo: think about adding armor to calculation and setting duration counter
             *   and don't  forget about Math.abs() (?) for calculating with armor */
            /* target.hp =
              target.hp +
              target.armor -
              (chosenCard.value - chosenCard.value * effectData[0].value); */
            target.armor -=
              chosenCard.value - chosenCard.value * effectData[0].value;
            console.log(target);
            target.hp =
              target.hp -
              (chosenCard.value - chosenCard.value * effectData[0].value);
            document.querySelector(".character__hp-value-current").textContent =
              target.hp;
          }
        } else {
          target.hp = target.hp - chosenCard.value;
          document.querySelector(".character__hp-value-current").textContent =
            target.hp;
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
