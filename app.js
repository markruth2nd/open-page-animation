/* Below I am going to use doc.queryselector to select the relevant parts to this animated page which are all going to take part in some form */
const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

/* now I will create a timeline */
const tl = new TimelineMax();

/* Now I am going to define the elements that I want to animate, add the duration of the animation and then in the first {object} I am going to define the start state of the animation and then in the second {object} I will define the ending state of the animation, so {from},{To}*/
tl.fromTo(hero,1.4, {height: "0%"}, {height: "80%", ease: Power2.easeInOut}) /* adding the ease to the {To} part of the fromTo timeline ensures a smoother transition of the hero animation */
.fromTo(hero,1.2, {width: "100%"}, {width: "90%", ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2") /* "-=1.2" is allowing the slider part of the animation to start at the same time as the width section animation */
.fromTo(logo, 0.5, {opacity: 0, x:30}, {opacity: 1, x:0}, "-=0.8")
.fromTo(hamburger, 0.5, {opacity: 0, x:30}, {opacity: 1, x:0}, "-=0.8")
.fromTo(headline, 0.5, {opacity: 0, x:30}, {opacity: 1, x:0}, "-=1")