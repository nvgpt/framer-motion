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
loco()


var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})



function canvas(){
    const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./frames00007.png
  ./frames00010.png
  ./frames00013.png
  ./frames00016.png
  ./frames00019.png
  ./frames00022.png
  ./frames00025.png
  ./frames00028.png
  ./frames00031.png
  ./frames00034.png
  ./frames00037.png
  ./frames00040.png
  ./frames00043.png
  ./frames00046.png
  ./frames00049.png
  ./frames00052.png
  ./frames00055.png
  ./frames00058.png
  ./frames00061.png
  ./frames00064.png
  ./frames00067.png
  ./frames00070.png
  ./frames00073.png
  ./frames00076.png
  ./frames00079.png
  ./frames00082.png
  ./frames00085.png
  ./frames00088.png
  ./frames00091.png
  ./frames00094.png
  ./frames00097.png
  ./frames00100.png
  ./frames00103.png
  ./frames00106.png
  ./frames00109.png
  ./frames00112.png
  ./frames00115.png
  ./frames00118.png
  ./frames00121.png
  ./frames00124.png
  ./frames00127.png
  ./frames00130.png
  ./frames00133.png
  ./frames00136.png
  ./frames00139.png
  ./frames00142.png
  ./frames00145.png
  ./frames00148.png
  ./frames00151.png
  ./frames00154.png
  ./frames00157.png
  ./frames00160.png
  ./frames00163.png
  ./frames00166.png
  ./frames00169.png
  ./frames00172.png
  ./frames00175.png
  ./frames00178.png
  ./frames00181.png
  ./frames00184.png
  ./frames00187.png
  ./frames00190.png
  ./frames00193.png
  ./frames00196.png
  ./frames00199.png
  ./frames00202.png
 `;
  return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()






var clutter = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span",{
  scrollTrigger:{
      trigger:`#page4>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})







function canvas1(){
  const canvas = document.querySelector("#page5>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
./bridges00004.png
./bridges00007.png
./bridges00010.png
./bridges00013.png
./bridges00016.png
./bridges00019.png
./bridges00022.png
./bridges00025.png
./bridges00028.png
./bridges00031.png
./bridges00034.png
./bridges00037.png
./bridges00040.png
./bridges00043.png
./bridges00046.png
./bridges00049.png
./bridges00052.png
./bridges00055.png
./bridges00058.png
./bridges00061.png
./bridges00064.png
./bridges00067.png
./bridges00070.png
./bridges00073.png
./bridges00076.png
./bridges00079.png
./bridges00082.png
./bridges00085.png
./bridges00088.png
./bridges00091.png
./bridges00094.png
./bridges00097.png
./bridges00100.png
./bridges00103.png
./bridges00106.png
./bridges00109.png
./bridges00112.png
./bridges00115.png
./bridges00118.png
./bridges00121.png
./bridges00124.png
./bridges00127.png
./bridges00130.png
./bridges00133.png
./bridges00136.png
./bridges00139.png
./bridges00142.png
./bridges00145.png
./bridges00148.png
./bridges00151.png
./bridges00154.png
./bridges00157.png
./bridges00160.png
./bridges00163.png
`;
return data.split("\n")[index];
}

const frameCount = 54;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page5`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page5",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas1()




var clutter = "";

document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page6>h1").innerHTML = clutter;
})

gsap.to("#page6>h1>span",{
  scrollTrigger:{
      trigger:`#page6>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})






function canvas2(){
  const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `

./1.webp?2
./2.webp?2
./3.webp?2
./4.webp?2
./5.webp?2
./6.webp?2
./7.webp?2
./8.webp?2
./9.webp?2
./10.webp?2
./11.webp?2
./12.webp?2
./13.webp?2
./14.webp?2
./15.webp?2
./16.webp?2
./17.webp?2
./18.webp?2
./19.webp?2
./20.webp?2
./21.webp?2
./22.webp?2
./23.webp?2
./24.webp?2
./25.webp?2
./26.webp?2
./27.webp?2
./28.webp?2
./29.webp?2
./30.webp?2
./31.webp?2
./32.webp?2
./33.webp?2
./34.webp?2
./35.webp?2
./36.webp?2
./37.webp?2
./38.webp?2
./39.webp?2
./40.webp?2
./41.webp?2
./42.webp?2
./43.webp?2
./44.webp?2
./45.webp?2
./46.webp?2
./47.webp?2
./48.webp?2
./49.webp?2
./50.webp?2
./51.webp?2
./52.webp?2
./53.webp?2
./54.webp?2
./55.webp?2
./56.webp?2
./57.webp?2
./58.webp?2
./59.webp?2
./60.webp?2
./61.webp?2
./62.webp?2
./63.webp?2
./64.webp?2
./65.webp?2
./66.webp?2
./67.webp?2
./68.webp?2
./69.webp?2
./70.webp?2
./71.webp?2
./72.webp?2
./73.webp?2
./74.webp?2
./75.webp?2
./76.webp?2
./77.webp?2
./78.webp?2
./79.webp?2
./80.webp?2
./81.webp?2
./82.webp?2
./83.webp?2
./84.webp?2
./85.webp?2
./86.webp?2
./87.webp?2
./88.webp?2
./89.webp?2
./90.webp?2
./91.webp?2
./92.webp?2
./93.webp?2
./94.webp?2
./95.webp?2
./96.webp?2
./97.webp?2
./98.webp?2
./99.webp?2
./100.webp?2
./101.webp?2
./102.webp?2
./103.webp?2
./104.webp?2
./105.webp?2
./106.webp?2
./107.webp?2
./108.webp?2
./109.webp?2
./110.webp?2
./111.webp?2
./112.webp?2
./113.webp?2
./114.webp?2
./115.webp?2
./116.webp?2
./117.webp?2
./118.webp?2
./119.webp?2
./120.webp?2
./121.webp?2
./122.webp?2
./123.webp?2
./124.webp?2
./125.webp?2
./126.webp?2
./127.webp?2
./128.webp?2
./129.webp?2
./130.webp?2
./131.webp?2
./132.webp?2
./133.webp?2
./134.webp?2
./135.webp?2
./136.webp?2

`;
return data.split("\n")[index];
}

const frameCount = 136;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page7`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page7",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas2()



gsap.to(".page7-cir",{
  scrollTrigger:{
    trigger:`.page7-cir`,
    start:`top center`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  },
  scale:1.5
})



gsap.to(".page7-cir-inner",{
  scrollTrigger:{
    trigger:`.page7-cir-inner`,
    start:`top center`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  },
  backgroundColor : `#0a3bce91`,
})
