const deck = [
    'images/card1.png',
    'images/card2.png',
    // Add paths to all your card images
];

function shuffleDeck() {
    const shuffledDeck = deck.sort(() => Math.random() - 0.5);
    const deckElement = document.getElementById('deck');
    deckElement.innerHTML = '';

    shuffledDeck.forEach(card => {
        const cardElement = document.createElement('img');
        cardElement.src = card;
        cardElement.className = 'card';
        if (Math.random() > 0.5) {
            cardElement.classList.add('upside-down');
        }
        deckElement.appendChild(cardElement);
    });
}
