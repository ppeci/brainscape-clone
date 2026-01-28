/* ===============================
   FLASHCARD APP – FULL JS FILE
   =============================== */

document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------
     1. CARD DATA (mock data)
     ------------------------------- */
  const cards = [
    {
      id: 1,
      question: "Themes of Geography",
      answer: "Location, place, human-environment interaction, movement, and region"
    },
    {
      id: 2,
      question: "What is the lithosphere?",
      answer: "The solid outer layer of the Earth"
    },
    {
      id: 3,
      question: "What is the biosphere?",
      answer: "The zone of life on Earth"
    }
  ];

  /* -------------------------------
     2. STATE
     ------------------------------- */
  let currentCardIndex = 0;
  let totalScore = 0;
  const maxScore = cards.length * 5;

  /* -------------------------------
     3. DOM ELEMENTS
     ------------------------------- */
  const questionText = document.querySelector(".question p");
  const answerText = document.querySelector(".answer p");
  const answerCard = document.getElementById("answerCard");
  const ratingSection = document.getElementById("rating");
  const revealBtn = document.getElementById("revealBtn");
  const progressBar = document.getElementById("progressBar");

  /* -------------------------------
     4. RENDER CARD
     ------------------------------- */
  function renderCard() {
    const card = cards[currentCardIndex];

    questionText.textContent = card.question;
    answerText.textContent = card.answer;

    // Reset UI
    answerCard.classList.add("hidden");
    ratingSection.classList.add("hidden");
    revealBtn.disabled = false;
    revealBtn.textContent = "REVEAL ANSWER";
    revealBtn.style.opacity = "1";
  }

  /* -------------------------------
     5. REVEAL ANSWER
     ------------------------------- */
  revealBtn.addEventListener("click", () => {
    answerCard.classList.remove("hidden");
    ratingSection.classList.remove("hidden");

    revealBtn.disabled = true;
    revealBtn.textContent = "ANSWER SHOWN";
    revealBtn.style.opacity = "0.6";
  });

  /* -------------------------------
     6. HANDLE RATING CLICK
     ------------------------------- */
  function handleRatingClick(rating) {
    totalScore += rating;

    updateProgressBar();

    currentCardIndex++;

    // Small delay for UX
    setTimeout(() => {
      if (currentCardIndex < cards.length) {
        renderCard();
      } else {
        showCompletion();
      }
    }, 400);
  }

  document.querySelectorAll(".circle").forEach(circle => {
    circle.addEventListener("click", () => {
      const rating = Number(circle.dataset.value);
      handleRatingClick(rating);
    });
  });

  /* -------------------------------
     7. PROGRESS BAR
     ------------------------------- */
  function updateProgressBar() {
    if (!progressBar) return; // guard in case progressBar isn't present in the HTML
    const percentage = (totalScore / maxScore) * 100;
    progressBar.style.width = percentage + "%";
  }

  /* -------------------------------
     8. COMPLETION SCREEN
     ------------------------------- */
  function showCompletion() {
    window.location.href = "finalpage.html";
  }

  /* -------------------------------
     9. INIT
     ------------------------------- */
  renderCard();

});
