const deck = [];
for (let i = 1; i <= 100; i++) {
    deck.push(`images/card-${String(i).padStart(2, '0')}.jpg`);
}

function shuffleDeck() {
    try {
        const shuffledDeck = deck.sort(() => Math.random() - 0.5);
        const deckElement = document.getElementById('deck');
        deckElement.innerHTML = '';

        shuffledDeck.forEach(card => {
            const cardElement = document.createElement('img');
            cardElement.src = card;
            cardElement.className = 'card';
            cardElement.classList.toggle('upside-down', Math.random() > 0.5);
            deckElement.appendChild(cardElement);
        });
    } catch (error) {
        console.error('Error shuffling deck:', error);
    }
}
