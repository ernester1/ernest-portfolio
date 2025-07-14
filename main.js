// DOM Elements
const mpesaInstructions = document.getElementById('mpesa-instructions');
const confirmationModal = document.getElementById('confirmation-modal');

// Show M-Pesa Instructions
function showMpesaInstructions() {
  mpesaInstructions.style.display = 'block';
}

// Show Confirmation Modal
function showConfirmation() {
  confirmationModal.style.display = 'flex';
}

// Close Modal
function closeModal() {
  confirmationModal.style.display = 'none';
}

// Initialize Animations
function initAnimations() {
  const animatedElements = document.querySelectorAll('.animated');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
  });
}

// Book Cover Animation
function initBookCoverAnimation() {
  const bookCover = document.querySelector('.book-cover-img');
  if (bookCover) {
    bookCover.addEventListener('mouseenter', () => {
      bookCover.style.transform = 'rotate(0deg) scale(1.05)';
    });

    bookCover.addEventListener('mouseleave', () => {
      bookCover.style.transform = 'rotate(-5deg) scale(1)';
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  initAnimations();
  initBookCoverAnimation();
});
