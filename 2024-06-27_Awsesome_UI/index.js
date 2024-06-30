function changeImage(card, newImageUrl) {
  var img = card.querySelector("img");
  img.src = newImageUrl;
}

function changeImageD_s(card, newImageUrl) {
  var img = card.querySelector("img");
  img.src = newImageUrl;
}

function changeImageF(card, newImageUrl) {
  var img = card.querySelector("img");
  img.src = newImageUrl;
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });
});

// CHAT GPT 