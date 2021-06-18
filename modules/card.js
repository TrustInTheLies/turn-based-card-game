export default class Card {
  getName(card) {
    return card.children[0].children[1].textContent;
  }

  pickCard(target, cards) {
    if (target) {
      return cards.filter((card) => {
        if (card.name === this.getName(target)) {
          return card;
        }
      });
    }
  }

  cast(enemy, player, target, cards) {
    let castCard = this.pickCard(target, cards);
    let mp = document.querySelector(".mp__value-current");
    console.log(castCard);
    if (castCard[0].cost > mp.textContent) {
      console.log("Not enough MP");
    } else {
      if (castCard[0].damage) {
        /* todo: if castCard.name === "debuff" => add effect and duration, check AI to continue
            maybe it's better to check through effect type, then strength, then duration
            instead of name
        */
        document.querySelector(".enemy__hp-value-current").textContent =
          enemy.hp - castCard[0].value;
        enemy.hp -= castCard[0].value;
      }
      if (castCard[0].defence) {
        console.log(player.armor + castCard[0].value);
        player.armor += castCard[0].value;
      }
      if (castCard[0].effects) {
        if (castCard[0].effects.target === "self") {
          player.effects.push(castCard[0].effects);
          console.log(player.effects);
          console.log(
            `Player received ${castCard[0].effects.effect} for ${castCard[0].effects.duration} turn`
          );
        } else {
          enemy.effects.push(castCard[0].effects);
          console.log(enemy);
          console.log(
            `Enemy received ${castCard[0].effects.effect} for ${castCard[0].effects.duration} turn`
          );
        }
      }

      mp.textContent -= castCard[0].cost;

      target.remove();
    }
  }
}

// you need to rewrite it, so it would pick info from click
