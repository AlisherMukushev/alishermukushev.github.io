function openBurgerMenu() {
    document.getElementById("men-burg").style.transform = "translate(0px, 0px)"
}

function closeBurgerMenu() {
    document.getElementById("men-burg").style.transform = "translate(-100%, 0px)"
    document.getElementById("header-id").style.background = "#111115"
}

function headerWhite() {
    document.getElementById("header-id").style.background = "#FFFFFF"
}

function orangeLogoShow() {
    document.getElementById("orange-logo").style.transform = "translate(0px, 0px)"
}

/////

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("section-3");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}

/////

function shuffle() {
    var container = document.getElementById("pet-cards");
    var elementsArray = Array.prototype.slice.call(container.getElementsByClassName('pet'));
      elementsArray.forEach(function(element){
      container.removeChild(element);
    })
    shuffleArray(elementsArray);
    elementsArray.forEach(function(element){
    container.appendChild(element);
  })
  }
  
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//////

const sliderInner = document.querySelector('.slider-inner');

const range = document.querySelector('input[type=range]')

range.addEventListener('input', function() {
  if(range.value == 0) {
    sliderInner.style.left = 0 + 'px'
  }
  if(range.value == 1) {
    sliderInner.style.left = -298 + 'px'
  }
  if(range.value == 2) {
    sliderInner.style.left = -598 + 'px'
  }  
  if(range.value == 3) {
    sliderInner.style.left = -896 + 'px'
  }
  if(range.value == 4) {
    sliderInner.style.left = -1194 + 'px'
  }
  if(range.value == 5) {
    sliderInner.style.left = -1492 + 'px'
  }
  if(range.value == 6) {
    sliderInner.style.left = -1790 + 'px'
  }
  if(range.value == 7) {
    sliderInner.style.left = -2088 + 'px'
  }
  if(range.value == 8) {
    sliderInner.style.left = -2386 + 'px'
  }
  if(range.value == 9) {
    sliderInner.style.left = -2684 + 'px'
  }
  if(range.value == 10) {
    sliderInner.style.left = -2982 + 'px'
  }
  if(range.value == 11) {
    sliderInner.style.left = -3280 + 'px'
  }
})



