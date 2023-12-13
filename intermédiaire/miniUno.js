function getFirstCardToPlay(cards, lastPlay) {
    for (let card of cards){
        if (card.color === lastPlay.color || card.number === lastPlay.number) {
            return card;
        }
    }
    return null;
}

const cardsExample = [
    { color: 'green', number: 6 },
    { color: 'red', number: 6 },
    { color: 'red', number: 9 },
    { color: 'green', number: 9 },
    { color: 'yellow', number: 9 },
];
const lastPlayExample = { color: 'blue', number: 6 };

console.log(JSON.stringify(getFirstCardToPlay(cardsExample, lastPlayExample)));