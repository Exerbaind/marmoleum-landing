const slide = document.querySelector(".rating__collections");
let currentLeft = 0;

function nextBlock() {
  if (currentLeft === -200) {
    currentLeft = 0;
    slide.style.left = currentLeft + "%";
  } else {
    currentLeft = currentLeft - 100;
    slide.style.left = currentLeft + "%";
  }
}

function prevBlock() {
  if (currentLeft === 0) {
    currentLeft = -200;
    slide.style.left = currentLeft + "%";
  } else {
    currentLeft = currentLeft + 100;
    slide.style.left = currentLeft + "%";
  }
}
