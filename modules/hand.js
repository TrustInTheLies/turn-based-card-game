export default class Hand {
  getHand(target, cards, container) {
    for (let i = 0; i < target.handSize; i++) {
      container.appendChild(
        cards[Math.floor(Math.random() * target.handSize)].cloneNode(true)
      );
    }
  }
}
