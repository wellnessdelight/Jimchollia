const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');

let index = 0;

prevButton.addEventListener('click', () => {
   if (index === 0) return;
   index -= 1;
   
   carousel.style.transform = `translate3d(-${1304 * index}px, 0, 0)`;
});

nextButton.addEventListener('click', () => {
   if (index === 4) return;
   index += 1;
   
   carousel.style.transform = `translate3d(-${1304 * index}px, 0, 0)`;
});
