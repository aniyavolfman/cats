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
