const deck = [];
for (let i = 1; i <= 100; i++) {
    deck.push(`images/card-${String(i).padStart(2, '0')}.jpg`);
}

function shuffleDeck() {
    return deck.sort(() => Math.random() - 0.5);
}

function shuffleAndDeal() {
    try {
        const shuffledDeck = shuffleDeck();
        const deckElement = document.getElementById('deck');
        deckElement.innerHTML = '';

        for (let i = 0; i < 3; i++) {
            const card = shuffledDeck[i];
            const cardElement = document.createElement('img');
            cardElement.src = card;
            cardElement.className = 'card';
            cardElement.classList.toggle('upside-down', Math.random() > 0.5);
            deckElement.appendChild(cardElement);
        }
    } catch (error) {
        console.error('Error shuffling and dealing cards:', error);
    }
}
