TweenLite.defaultEase = Power2.easeInOut;
var activeSlide = 0;
var oldSlide = 0;
var slides = document.querySelectorAll(".box");
var tl;

function slideRight() {
  // if the container is animating the wheel won't work
  if (tl && tl.isActive()) {
    return;
  }
  // temp variable to see if we're at the beginning or end
  oldSlide = activeSlide;
  // which way did we scroll the mousewheel
  activeSlide =(activeSlide += 1);
  // are we at the beginning of the slides?
  activeSlide = activeSlide < 0 ? 0 : activeSlide;
  // are we at the end of the slides?
  activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
  // if at the beginning or end there is nothing to animate
  if (oldSlide === activeSlide) {
    return;
  }
  // if not at the beginning or end, we can animate the container 
  // and the targets to the new position
  tl = new TimelineMax();
  tl.to(".box", 0.25, { scale: 0.5 });
  tl.to("#targets", 0.4, { x: -120 * activeSlide });
  tl.to(".box", 0.25, { scale: 1 });
}

function slideLeft() {
    // if the container is animating the wheel won't work
    if (tl && tl.isActive()) {
      return;
    }
    // temp variable to see if we're at the beginning or end
    oldSlide = activeSlide;
    // which way did we scroll the mousewheel
    activeSlide = (activeSlide -= 1);
    // are we at the beginning of the slides?
    activeSlide = activeSlide < 0 ? 0 : activeSlide;
    // are we at the end of the slides?
    activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
    // if at the beginning or end there is nothing to animate
    if (oldSlide === activeSlide) {
      return;
    }
    // if not at the beginning or end, we can animate the container 
    // and the targets to the new position
    tl = new TimelineMax();
    tl.to(".box", 0.25, { scale: 0.5 });
    tl.to("#targets", 0.4, { x: -120 * activeSlide });
    tl.to(".box", 0.25, { scale: 1 });
  }

// listen for mousewheel scroll
window.addEventListener("wheel", slideRight);

var rightbtn = document.getElementsByClassName("rightarrow");
var leftbtn = document.getElementsByClassName("leftarrow");

rightbtn[0].addEventListener('click', slideRight);
leftbtn[0].addEventListener('click',slideLeft);