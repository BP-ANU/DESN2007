const deck = [];

// Function to load card images from a folder
function loadCardImages(folderPath) {
    const imageExtensions = ['.png', '.jpeg', '.jpg'];
    const imageFiles = [
        'card1.png',
        'card2.jpeg',
        // Add all your image file names here
    ];

    imageFiles.forEach(file => {
        const extension = file.slice(file.lastIndexOf('.')).toLowerCase();
        if (imageExtensions.includes(extension)) {
            deck.push(`${folderPath}/${file}`);
        }
    });
}

// Load card images from the specified folder
loadCardImages('images');

function shuffleDeck() {
    const shuffledDeck = deck.sort(() => Math.random() - 0.5);
    const deckElement = document.getElementById('deck');
    deckElement.innerHTML = '';

    shuffledDeck.forEach(card => {
        const cardElement = document.createElement('img');
        cardElement.src = card;
        cardElement.className = 'card';
        cardElement.style.width = '400px';  // Set the width to 400 pixels
        cardElement.style.height = 'auto';  // Maintain the aspect ratio
        if (Math.random() > 0.5) {
            cardElement.classList.add('upside-down');
        }
        deckElement.appendChild(cardElement);
    });
}
