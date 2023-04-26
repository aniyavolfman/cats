const lazyImages = document.querySelectorAll('img[data-srcset]');

function loadImage(image) {
  const srcset = image.getAttribute('data-srcset');
  const src = image.getAttribute('data-src');

  if (!srcset || !src) {
    return;
  }

  image.setAttribute('srcset', srcset);
  image.setAttribute('src', src);
  image.removeAttribute('data-srcset');
  image.removeAttribute('data-src');
}

function isImageVisible(image) {
  const rect = image.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function handleScroll() {
  lazyImages.forEach(image => {
    if (isImageVisible(image)) {
      loadImage(image);
    }
  });
}

window.addEventListener('scroll', handleScroll);

const title = document.querySelector('#title');

const colors = ['tomato', '#9C6FE2', '#D7F463'];

let i = 0;

const intervalId = setInterval(() => {
  title.style.color = colors[i];
  i += 1;
  if (i >= colors.length) {
    i = 0;
  }
}, 1000);

const nyavText = 'няв-няв-няв';
const nyav = document.querySelector('#hero__text');

let c = 0;
function typeNyav() {
  if (c < nyavText.length) {
    nyav.innerHTML += nyavText.charAt(c);
    c += 1;
    setTimeout(typeNyav, 150);
  }
}

typeNyav();
