window.addEventListener('load', function () {
  let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  let interval;

  document.querySelector('.carousel-next').addEventListener('click', () => {
    clearInterval(interval);
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.add('active');
  });

  document.querySelector('.carousel-prev').addEventListener('click', () => {
    clearInterval(interval);
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    items[currentIndex].classList.add('active');
  });

  interval = setInterval(() => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.add('active');
  }, 5000); // Change testimonial every second
});
