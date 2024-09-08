function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// Typing Script

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".section__text__p2");
  const phrases = ["Full Stack Developer", "MERN Stack", "Python Developer", "WordPress Developer"];
  let currentPhraseIndex = 0;
  let currentCharacterIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100; // Typing speed in milliseconds
  const deletingSpeed = 50; // Deleting speed in milliseconds
  const delayBetweenPhrases = 1000; // Delay before typing the next phrase

  function typeWriter() {
    const currentPhrase = phrases[currentPhraseIndex];

    if (isDeleting) {
      // Deleting effect
      textElement.textContent = currentPhrase.substring(0, currentCharacterIndex--);
      if (currentCharacterIndex < 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to the next phrase
        setTimeout(typeWriter, 500); // Delay before starting to type next phrase
      } else {
        setTimeout(typeWriter, deletingSpeed); // Continue deleting
      }
    } else {
      // Typing effect
      textElement.textContent = currentPhrase.substring(0, currentCharacterIndex++);
      if (currentCharacterIndex > currentPhrase.length) {
        isDeleting = true; // Start deleting after typing the whole phrase
        setTimeout(typeWriter, delayBetweenPhrases); // Delay before deleting
      } else {
        setTimeout(typeWriter, typingSpeed); // Continue typing
      }
    }
  }

  // Start the typing effect
  typeWriter();
});
