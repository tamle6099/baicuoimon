let slideIndex = [1, 1];
showSlides(1, 0);
showSlides(1, 1);
autoSlide(5000); 

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex[no] = 1;}    
  if (n < 1) {slideIndex[no] = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[no] - 1].style.display = "block";  
  dots[slideIndex[no] - 1].className += " active";
}

function autoSlide(interval) {
  setInterval(function () {
    plusSlides(1, 0); 
    plusSlides(1, 1);
  }, interval);
}
document.onreadystatechange = function() {
  let lastScrollPosition = 0;
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function(e) {
    lastScrollPosition = window.scrollY;
    
    if (lastScrollPosition > 100)
      navbar.classList.add('navbar-dark');
    else
      navbar.classList.remove('navbar-dark');
  });
}