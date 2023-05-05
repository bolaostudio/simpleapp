document.addEventListener("DOMContentLoaded", function() {
  const fadeElems = document.querySelectorAll(".fade-up");
  
  const checkFade = function() {
  for (let i = 0; i < fadeElems.length; i++) {
    const fadeElem = fadeElems[i];
    const fadeInPos = fadeElem.getBoundingClientRect().top + fadeElem.offsetHeight;
    const windowHeight = window.innerHeight;
    const isFadeIn = fadeInPos <= windowHeight;
    
    if (isFadeIn) {
      fadeElem.classList.add("visible");
    }
  }
};
  window.addEventListener("load", checkFade);
  window.addEventListener("scroll", checkFade);
});
