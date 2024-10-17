document.addEventListener('DOMContentLoaded', function() {
  const scrollDownIcon = document.getElementById('scroll-down');
  const content = document.querySelector('.recent-posts');

  if (scrollDownIcon && content) {
    scrollDownIcon.addEventListener('click', function(e) {
      e.preventDefault();
      const contentTop = content.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = contentTop - startPosition;
      const duration = 1000; // ��������ʱ�䣨���룩
      let start = null;

      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
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
