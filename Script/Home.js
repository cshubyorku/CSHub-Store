//preloader
var loader = setInterval(function () {
  if(document.readyState !== "complete") return;
  clearInterval(loader);
  document.querySelector('.spinner-wrapper').style.display = "none";
}, 250);

//Scroller
const nav = document.querySelector('.navigation');
$(document).ready(function(){
  $("a.navItems").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){

        window.location.hash = hash;
          nav.className = 'navigation'
          document.querySelector('#icon').src = "images/icon/cshub.png"
      });
    }
 nav.className = 'scroll';
 document.querySelector('#icon').src = "images/icon/cshub_dark.png"

  });
});

//Toggle

function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')

  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);

//Execs SlideShow

window.onload = function() {
  slideShow();
};

var index = 1;
slideShow(index);

function plusDivs(n) {
slideShow(index += n);
}

function slideShow(n) {
var i;
var x = document.getElementsByClassName("mySlides");
if (n > x.length) {index = 1}
if (n < 1) {index = x.length}
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";  
}
x[index-1].style.display = "block";  
}

/*EAT SLEEP CODE*/

const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};

const texts = [
  "",
  "EAT",
  "SLEEP",
  "CODE",
  "REPEAT",
  ":)",
  "WE OFFER",
  "STUDY SESSIONS",
  "CO-OP WORKSHOPS",
  "LEETCODE WORKSHOPS",
  "MOCK INTERVIEWS",
  "RESUME REVIEW",
  "WAIT!",
  "WE ALSO ARRANGE",
  "FUN ACTIVITIES",
  ":)",
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
      if (shouldIncrementIndex) {
          textIndex++;
      }

      doMorph();
  } else {
      doCooldown();
  }
}

animate();

/*Progress bar*/
$(document).on("scroll", function(){
  var pixels = $(document).scrollTop();
  var pageHeight = $(document).height() - $(window).height();
  var progress = 100 * pixels / pageHeight;
  
  $("div.progress").css("width", progress + "%");
})
