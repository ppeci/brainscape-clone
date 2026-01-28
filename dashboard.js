const progressiveBtn = document.querySelector('.progressive');
const randomBtn = document.querySelector('.random');

progressiveBtn.addEventListener('click', () => {
    progressiveBtn.style.backgroundColor = '#656c72';
    progressiveBtn.style.color = 'white';
    randomBtn.style.backgroundColor = 'white';
    randomBtn.style.color = '#656c72';
});

randomBtn.addEventListener('click', () => {
    randomBtn.style.backgroundColor = '#656c72';
    randomBtn.style.color = 'white';
    progressiveBtn.style.backgroundColor = 'white';
    progressiveBtn.style.color = '#656c72';
});

const aboutLink = document.getElementById('about-link');
const deckLink = document.getElementById('Deck-link');
const leaderLink = document.getElementById('leaderboard-link');

aboutLink.addEventListener('click', function() {
    aboutLink.style.color="#1e88e5";
    deckLink.style.color="black";
    leaderLink.style.color="black";
});
deckLink.addEventListener('click', function() {
    deckLink.style.color="#1e88e5";
    aboutLink.style.color="black";
    leaderLink.style.color="black";});
leaderLink.addEventListener('click', function() {
    leaderLink.style.color="#1e88e5";
    aboutLink.style.color="black";
    deckLink.style.color="black";});        

    const studybtn = document.querySelector('.primary');
    studybtn.addEventListener('click', function() {
        window.location.href = 'flashcard.html';
    });