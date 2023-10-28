const reviews = document.querySelectorAll('.review');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentReview = 0;

function showReview(index) {
  reviews.forEach((review, i) => {
    review.style.display = i === index ? 'block' : 'none';
  });
}

function nextReview() {
  currentReview = (currentReview + 1) % reviews.length;
  showReview(currentReview);
}

function prevReview() {
  currentReview = (currentReview - 1 + reviews.length) % reviews.length;
  showReview(currentReview);
}

showReview(currentReview);
nextButton.addEventListener('click', nextReview);
prevButton.addEventListener('click', prevReview);