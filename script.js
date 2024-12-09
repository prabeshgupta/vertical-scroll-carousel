const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');

// Set initial order
let cardOrder = ['card1', 'card2', 'card3'];

// Function to reorder cards
function reorderCards() {
    cards.forEach((card) => {
        card.classList.remove('active');
        card.style.zIndex = '1';
        if (card.id === cardOrder[0]) {
            card.style.transform = 'translateY(100px) scale(0.8)';
            card.style.opacity = '0.6';
        } else if (card.id === cardOrder[1]) {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.opacity = '1';
            card.classList.add('active');
            card.style.zIndex = '2';
        } else if (card.id === cardOrder[2]) {
            card.style.transform = 'translateY(-100px) scale(0.8)';
            card.style.opacity = '2';
        }
    });
}

// Add drag interaction
let startY = 0;
let endY = 0;

carousel.addEventListener('mousedown', (e) => {
    startY = e.clientY;
});

carousel.addEventListener('mouseup', (e) => {
    endY = e.clientY;
    if (startY - endY > 50) {
        // User dragged up
        cardOrder.push(cardOrder.shift()); // Move first card to the end
        reorderCards();
    }
});

// Initial ordering
reorderCards();
