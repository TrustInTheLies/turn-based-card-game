export default class Card {
  constructor(damage, defence, value, effects) {
    this.damage = damage;
    this.defence = defence;
    this.value = value;
    this.effects = effects;
  }

  cast(player, target) {
    if (this.damage) {
      console.log(target.hp - this.value);
    }
    if (this.defence) {
      console.log(player.armor + this.value);
    }
    if (this.effects) {
      if (this.effects.target === "self") {
        console.log(
          `Player received ${this.effects.effect} for ${this.effects.duration} turn`
        );
      } else {
        console.log(
          `Enemy received ${this.effects.effect} for ${this.effects.duration} turn`
        );
      }
    }
  }
}

// you need to rewrite it, so it would pick info from click
