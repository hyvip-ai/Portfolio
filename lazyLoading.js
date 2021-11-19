const images = document.querySelectorAll("[data-src]");
const imgOptions = {};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preLoadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

const preLoadImage = (img) => {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.src = src;
};

images.forEach((image) => {
  imgObserver.observe(image);
});
