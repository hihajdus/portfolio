$(function () {

console.log('dziala');

// --- menu list --- //
/*
console.log('menu_list');

$(document).ready(function(){
    $("#menu_logo").click(function(){
        $("#menu").stop().slideToggle(300);
    });
});
*/

// --- dropdownmenu --- //

var div = document.querySelector('#menu_logo');
    console.log(div);

    div.addEventListener('click', function() {
        var list = document.querySelector('.menu-content');
        if (list.style.display === 'none') {
            list.style.display = 'block';
        } else {
            list.style.display = 'none';
        }
    });

// --- slider --- //

/*
console.log('slider');

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
    pauseButton.innerHTML = 'Play';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = 'Pause';
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function() {
    if(playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }

  var next = document.getElementById('next');
  var previous = document.getElementById('previous');

  next.onclick = function() {
      pauseSlideshow();
      nextSlide();
  };
  previous.onclick = function() {
      pauseSlideshow();
      previousSlide();
  };

};

*/

// test

/*
var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
    controls[i].style.display = 'inline-block';
}
for(var i=0; i<slides.length; i++) {
    slides[i].style.position = 'absolute';
}
*/





});
