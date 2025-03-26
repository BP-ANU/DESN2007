const deck = [
   "images/card-01.jpg","images/card-02.jpg","images/card-03.jpg","images/card-04.jpg","images/card-05.jpg","images/card-06.jpg","images/card-07.jpg","images/card-08.jpg","images/card-09.jpg","images/card-10.jpg","images/card-11.jpg","images/card-12.jpg","images/card-13.jpg","images/card-14.jpg","images/card-15.jpg","images/card-16.jpg","images/card-17.jpg","images/card-18.jpg","images/card-19.jpg","images/card-20.jpg","images/card-21.jpg","images/card-22.jpg","images/card-23.jpg","images/card-24.jpg","images/card-25.jpg","images/card-26.jpg","images/card-27.jpg","images/card-28.jpg","images/card-29.jpg","images/card-30.jpg","images/card-31.jpg","images/card-32.jpg","images/card-33.jpg","images/card-34.jpg","images/card-35.jpg","images/card-36.jpg","images/card-37.jpg","images/card-38.jpg","images/card-39.jpg","images/card-40.jpg","images/card-41.jpg","images/card-42.jpg","images/card-43.jpg","images/card-44.jpg","images/card-45.jpg","images/card-46.jpg","images/card-47.jpg","images/card-48.jpg","images/card-49.jpg","images/card-50.jpg","images/card-51.jpg","images/card-52.jpg","images/card-53.jpg","images/card-54.jpg","images/card-55.jpg","images/card-56.jpg","images/card-57.jpg","images/card-58.jpg","images/card-59.jpg","images/card-60.jpg","images/card-61.jpg","images/card-62.jpg","images/card-63.jpg","images/card-64.jpg","images/card-65.jpg","images/card-66.jpg","images/card-67.jpg","images/card-68.jpg","images/card-69.jpg"
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
