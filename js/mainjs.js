function movetoaboutme() {
    var elmnt = document.getElementsByClassName("Aboutme");
    elmnt[0].scrollIntoView({behavior:'smooth'});
}

function movetoedu() {
    var elmnt = document.getElementsByClassName("Edu");
    elmnt[0].scrollIntoView({behavior:'smooth'});
}

function movetoskills() {
    var elmnt = document.getElementsByClassName("Skills");
    elmnt[0].scrollIntoView({behavior:'smooth'});
}

function movetoprojects(){
    var elmnt = document.getElementsByClassName("Projects");
    elmnt[0].scrollIntoView({behavior:'smooth'});
}

const htmlbar = document.querySelector('.bar-HTML')
const CPPbar = document.querySelector('.bar-CPP')
const OpenGLbar = document.querySelector('.bar-OpenGL')
const MLbar = document.querySelector('.bar-ML')
const Analyticsbar = document.querySelector('.bar-Analytics')
const introtext = document.querySelector('.Introtext')

gsap.from(introtext,{opacity:0, duration:1.5, y:-75})




/* Ease in effect for about me part */
var taboutme = gsap.timeline({repeat:0})
taboutme.from('.AboutmeTittle',{opacity:0, duration:1.0, x:-75,ease:Power3.easeIn})
        .from('.Aboutmetext',{opacity:0, duration:1.0, x:75,ease:Power3.easeIn},0)
        .from('.aboutmeimg',{opacity:0, duration:1.0, y:75,ease:Power3.easeIn},0)
const controlaboutme = new ScrollMagic.Controller()
const sceneaboutme = new ScrollMagic.Scene({
    triggerElement:'.Aboutme',
    triggerHook:0.5,
    })
    .setTween(taboutme)
    .addTo(controlaboutme)

/* Ease in effect for Education part */
var tedu = gsap.timeline()
tedu.from('.EduTittle',{opacity:0, duration:0.5, x:-75,ease:Power4.easeIn})
        .from('.Edutext',{opacity:0, duration:0.5, x:75,ease:Power4.easeIn},0)
        .from('.usclogo',{opacity:0, duration:0.5, x:75,ease:Power4.easeIn},0)
        .from('.ucsdlogo',{opacity:0, duration:0.5, x:75,ease:Power4.easeIn},0)
const controledu = new ScrollMagic.Controller()
const sceneedu = new ScrollMagic.Scene({
    triggerElement:'.Edu',
    triggerHook:0.7,
    })
    .setTween(tedu)
    .addTo(controledu)



/* Ease in effect for Skills part */
var t1 = gsap.timeline()
t1.fromTo(htmlbar, 2,{width:0}, {width:'70%', ease:Power4.easeOut})
    .fromTo(CPPbar, 2,{width:0}, {width:'85%', ease:Power4.easeOut},0)
    .fromTo(OpenGLbar, 2,{width:0}, {width:'65%', ease:Power4.easeOut},0)
    .fromTo(MLbar, 2,{width:0}, {width:'70%', ease:Power4.easeOut},0)
    .fromTo(Analyticsbar, 2,{width:0}, {width:'80%', ease:Power4.easeOut},0)
    .from('.SkillsTittle',{opacity:0, duration:2.0, y:-75},0 )
    .from('.Skillstext',{opacity:0, duration:2.0, y:75},0)

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement:'.Skills',
    triggerHook:0.5,
 })
 .setTween(t1)
 .addTo(controller)




/* Ease in effect for Projects part */
var tpj = gsap.timeline()
tpj.from('.ProjectsTittle',{opacity:0, duration:1.0, y:-75,ease:Power3.easeIn})
        .from('.wrapcontainer',{opacity:0, duration:1.0, y:75,ease:Power3.easeIn},0)
const controlpj = new ScrollMagic.Controller()
const scenepj = new ScrollMagic.Scene({
    triggerElement:'.ProjectsTittle',
    triggerHook:0.5,
    })
    .setTween(tpj)
    .addTo(controlpj)





 /////////////////////////////////////* This is for projects sliding parts*///////////////////////////////////////

 TweenLite.defaultEase = Power2.easeInOut;
var activeSlide = 0;
var oldSlide = 0;
var slides = document.querySelectorAll(".projectclass");
var slideswidth = $("div.project1").outerWidth(true);
var tl;

function slideRight() {
  if (tl && tl.isActive()) {
    return;
  }
  oldSlide = activeSlide;
  activeSlide =(activeSlide += 1);
  activeSlide = activeSlide < 0 ? 0 : activeSlide;
  activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
  if (oldSlide === activeSlide) {
    return;
  }
  tl = new TimelineMax();
  tl.to(".projectclass", 0.25, { scale: 0.5 });
  tl.to(".sliderwrap", 0.4, { x: -slideswidth * activeSlide });
  tl.to(".projectclass", 0.25, { scale: 1 });
}

function slideLeft() {
    if (tl && tl.isActive()) {
      return;
    }
    oldSlide = activeSlide;
    activeSlide = (activeSlide -= 1);
    activeSlide = activeSlide < 0 ? 0 : activeSlide;
    activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
    if (oldSlide === activeSlide) {
      return;
    }
    tl = new TimelineMax();
    tl.to(".projectclass", 0.25, { scale: 0.5 });
    tl.to(".sliderwrap", 0.4, { x: -slideswidth * activeSlide });
    tl.to(".projectclass", 0.25, { scale: 1 });
  }

var rightbtn = document.getElementsByClassName("rightarrow");
var leftbtn = document.getElementsByClassName("leftarrow");

rightbtn[0].addEventListener('click', slideRight);
leftbtn[0].addEventListener('click',slideLeft);