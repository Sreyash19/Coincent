const toggleButton = document.getElementsByClassName('toogle-button')[0]
const navbarLinks =  document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', function(){
    navbarLinks.classList.toggle('active')
})

let slidePosition = 0;
const slides = document.getElementsByClassName("carousel_item");
const totalSlides = slides.length;
 
document.getElementById('carousel_button--next').addEventListener("click",function(){
    moveToNextSlide();
})
document.getElementById('carousel_button--prev').addEventListener("click",function(){
    moveToPrevSlide();
})


function updateSlidePosition(){
    for(let slide of slides){
        slide.classList.remove('carousel_item--visible');
        slide.classList.add('carousel_item--hidden');
    }
    slides[slidePosition].classList.add('carousel_item--visible');
}

function moveToNextSlide(){
    if(slidePosition == totalSlides-1){
        slidePosition = 0;
    }else{
        slidePosition++;
    }
    updateSlidePosition()
}


function moveToPrevSlide(){
    if(slidePosition == 0){
        slidePosition = totalSlides-1;
    }else{
        slidePosition--;
    }
    updateSlidePosition()
}
 
 
const scriptURL = 'https://script.google.com/macros/s/AKfycbxnmd7mBgWh5jvkkfSBoqLFN0vriear-ERhum91Y_jDlOKL-khG3mJLPBpDCiOUW-3CZw/exec'
const form = document.forms['contact-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})
 

