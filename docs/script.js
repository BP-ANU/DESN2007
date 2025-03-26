// Use the generated image list
const deck = imageFiles.map(file => `docs/${file}`);

function shuffleDeck() {
    const shuffledDeck = deck.sort(() => Math.random() - 0.5);
    const deckElement = document.getElementById('deck');
    deckElement.innerHTML = '';

    shuffledDeck.forEach(card => {
        const cardElement = document.createElement('img');
        cardElement.src = card;
        cardElement.className = 'card';
        cardElement.style.width = '400px';  // Set the width to 434 pixels
        cardElement.style.height = 'auto';  // Maintain the aspect ratio
        if (Math.random() > 0.5) {
            cardElement.classList.add('upside-down');
        }
        deckElement.appendChild(cardElement);
    });
}
