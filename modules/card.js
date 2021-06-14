export default class Card {
  getName(card) {
    let name = card.children[0].children[1].textContent;
    return name;
  }

  pickCard(target, cards) {
    if (target) {
      let targetCard = cards.filter((card) => {
        if (card.name === this.getName(target)) {
          return card;
        }
      });
      return targetCard;
    }
  }

  cast(enemy, player, target, cards) {
    let castCard = this.pickCard(target, cards);
    console.log(castCard);
    if (castCard[0].damage) {
      console.log(enemy.hp - castCard[0].value);
    }
    if (castCard[0].defence) {
      console.log(player.armor + castCard[0].value);
    }
    if (castCard[0].effects) {
      if (castCard[0].effects.target === "self") {
        console.log(
          `Player received ${castCard[0].effects.effect} for ${castCard[0].effects.duration} turn`
        );
      } else {
        console.log(
          `Enemy received ${castCard[0].effects.effect} for ${castCard[0].effects.duration} turn`
        );
      }
    }
    target.remove();
  }
}

// you need to rewrite it, so it would pick info from click
