const deck = [];

// Function to load card images from a folder
function loadCardImages(folderPath) {
    const imageExtensions = ['.png', '.jpeg', '.jpg'];

    // Fetch the list of files from the folder
    fetch(folderPath)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(data, 'text/html');
            const imageFiles = Array.from(htmlDoc.querySelectorAll('a'))
                .map(link => link.href)
                .filter(href => imageExtensions.some(ext => href.endsWith(ext)));

            imageFiles.forEach(file => {
                deck.push(file);
            });
        })
        .catch(error => console.error('Error loading images:', error));
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
        cardElement.style.width = '200px';  // Set uniform width
        cardElement.style.height = '300px'; // Set uniform height
        if (Math.random() > 0.5) {
            cardElement.classList.add('upside-down');
        }
        deckElement.appendChild(cardElement);
    });
}
