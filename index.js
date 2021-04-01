// alert("Hey");

// confirm("You down?");

// navbar sounds

var growl = new Audio("sounds/growl1.mp3");

var grit = new Audio("sounds/grit_bass.mp3");

var metal = new Audio("sounds/low_metal.mp3");

var supersaw = new Audio("sounds/supersaw.mp3");
// sampler

var numberOfSynthButtons = document.querySelectorAll(".synth").length;

for (var i = 0; i < numberOfSynthButtons; i++) {

  document.querySelectorAll(".synth")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

// Button Press Sound

// document.addEventListener("keydown", function(event) {
//
//   makeSound(event.key);
//
//   buttonAnimation(event.key);
//
// });


function makeSound(key) {

  switch (key) {
    case "w":
      var g_pluck = new Audio("sounds/g_pluck.mp3");
      g_pluck.play();
      break;

    case "a":
      var grit_bass = new Audio("sounds/grit_bass.mp3");
      grit_bass.play();
      break;

    case "s":
      var growl1 = new Audio('sounds/growl1.mp3');
      growl1.play();
      break;

    case "d":
      var heavy_wub = new Audio('sounds/heavy_wub.mp3');
      heavy_wub.play();
      break;

    case "j":
      var low_metal = new Audio('sounds/low_metal.mp3');
      low_metal.play();
      break;

    case "k":
      var ryde_verb = new Audio('sounds/ryde_verb.mp3');
      ryde_verb.play();
      break;

    case "l":
      var supersaw = new Audio('sounds/supersaw.mp3');
      supersaw.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

// Navbar

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
            $('.navIcon').attr("src", "images/icon_black.png")
        } else {
            $('.navbar').removeClass('active');
            $('.navIcon').attr("src", "images/icon1.png");
        }
    });
});


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
