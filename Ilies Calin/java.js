var slideIndex = 0;

function toggleSlides() {
  let elem = document.getElementById('slideshow')
  elem.classList.toggle('hidden')

  showSlides()
}

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.toggle('hidden')
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.toggle('hidden')
  console.log("showSlides")
  setTimeout(showSlides, 3000);
}