window.addEventListener('load', function () {
  let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  let interval;

  document.querySelector('.carousel-next').addEventListener('click', () => {
    clearInterval(interval);
    moveNext();
  });

  document.querySelector('.carousel-prev').addEventListener('click', () => {
    clearInterval(interval);
    movePrev();
  });

  interval = setInterval(() => {
    moveNext();
  }, 5000); // Change testimonial every second

  function moveNext() {
    items[currentIndex].classList.remove('active');
    items[currentIndex].classList.add('exit');
    ((index) => {
      setTimeout(() => {
        items[index].setAttribute('style', 'display:none;');
        items[index].classList.remove('exit');
      }, 500);
      setTimeout(() => {
        items[index].setAttribute('style', 'display:block;');
      }, 600);
    })(currentIndex);

    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].setAttribute('style', 'display:block;');
    items[currentIndex].classList.add('active');
  }
  function movePrev() {
    items[currentIndex].classList.remove('active');
    items[currentIndex].classList.add('exit');
    ((index) => {
      setTimeout(() => {
        items[index].setAttribute('style', 'display:none;');
        items[index].classList.remove('exit');
      }, 500);
      setTimeout(() => {
        items[index].setAttribute('style', 'display:block;');
      }, 600);
    })(currentIndex);

    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    items[currentIndex].setAttribute('style', 'display:block;');
    items[currentIndex].classList.add('active');
  }
});
