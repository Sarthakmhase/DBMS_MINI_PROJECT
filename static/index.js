function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco();
// to play video
gsap.to("#page>video",{
    scrollTrigger:{
        trigger:`#page>video`,  //trigger means start
        // start:`top top`, // start when top of element comes on top of screen 
        // end:`bottom top`, // end when bottom of element comes on top of screen
        // scroller:`#main`
    },
    onStart:()=>{
        document.querySelector("#page>video").play()
    }
})
// just pinning our #page
// gsap.to("#page",{
//   scrollTrigger:{
//       trigger:`#page`,
//       start:`top top`,
//       end:`bottom top`,
//       scroller:`#main`,
//       pin:true
//   }
// })
// it is for when we will scroll up page 1 will coe 15% us and apple logo will be dissappeared
// gsap.to("#page-bottom",{
//   scrollTrigger:{
//       trigger:`#page-bottom`,
//       start:`15% top`,
//       end:`bottom top`,
//       scroller:`#main`,
//   },
//   opacity:0
// })
gsap.to("#page2>video",{
  scrollTrigger:{
      trigger:`#page2>video`,  //trigger means start
//       start:`top top`, // start when top of element comes on top of screen 
//       end:`bottom top`, // end when bottom of element comes on top of screen
//       scroller:`#main`
  },
  onStart:()=>{
      document.querySelector("#page2>video").play()
  }
})
let image=document.getElementById('logos');
let images=['static/img/l1.png','static/img/l2.png','static/img/l3.png','static/img/l4.png','static/img/l5.png'];

setInterval(function(){
let random=Math.floor(Math.random()*5);
image.src=images[random];
},900);
let image1=document.getElementById('logos1');
let images1=['static/img/l1.png','static/img/l2.png','static/img/l3.png','static/img/l4.png','static/img/l5.png'];
setInterval(function(){
let random=Math.floor(Math.random()*5);
image1.src=images1[random];
},900);
function hide1(){
  let jsbtn=document.getElementById('btn1');
  let jspara=document.getElementById('para1');
  // if not hided then hide
  if(jspara.style.display!='none'){ //  
      jspara.style.display='none';
  }
  // if hided then show
  else{
      jspara.style.display='block';
  }
}
function hide2(){
  let jsbtn=document.getElementById('btn2');
  let jspara=document.getElementById('para2');
  // if not hided then hide
  if(jspara.style.display!='none'){ 
      jspara.style.display='none';
  }
  // if hided then show
  else{
      jspara.style.display='block';
  } 
}
function hide3(){
  let jsbtn=document.getElementById('btn3');
  let jspara=document.getElementById('para3');
  // if not hided then hide
  if(jspara.style.display!='none'){ //  
      jspara.style.display='none';
  }
  // if hided then show
  else{
      jspara.style.display='block';
  }  
}
function hide4(){
  let jsbtn=document.getElementById('btn4');
  let jspara=document.getElementById('para4');
  // if not hided then hide
  if(jspara.style.display!='none'){ //  
      jspara.style.display='none';
  }
  // if hided then show
  else{
      jspara.style.display='block';
  }
}