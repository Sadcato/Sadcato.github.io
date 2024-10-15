document.addEventListener('DOMContentLoaded', function() {
  const scrollDownIcon = document.getElementById('scroll-down');
  const content = document.querySelector('.home-content');

  if (scrollDownIcon) {
    scrollDownIcon.addEventListener('click', function() {
      content.scrollIntoView({ behavior: 'smooth' });
    });
  }

  window.addEventListener('scroll', function() {
    if (window.scrollY > window.innerHeight * 0.5) {
      document.body.classList.add('show-content');
    } else {
      document.body.classList.remove('show-content');
    }
  });
});
