const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

});

document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

const entities = document.querySelectorAll('.entity');
entities.forEach(entity => {
  entity.addEventListener('click', () => {
    entity.style.backgroundColor = 'rgba(235, 154, 13, 1)';
    const code = entity.getAttribute('data-clipboard-text');
    navigator.clipboard.writeText(code);
    entity.classList.add('copied');
    setTimeout(() => {
      entity.style.backgroundColor = '';
      entity.classList.remove('copied');
    }, 1500); //for visual feedback
  });
});