

document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
const introtl = new TimelineLite({paused:true})
introtl.fromTo(
  ".hidetext1",
  0.8,
  {
    opacity:0,
    y:150
  },
  {
    opacity:1,
    y:0
  }
).fromTo(
  ".hidetext2",
  0.8,
  {
    opacity:0,
    y:150
  },
  {
    opacity:1,
    y:0
  },"-=0.5"
).fromTo(
  ".hidetext3",
  0.8,
  {
    opacity:0,
    y:150
  },
  {
    opacity:1,
    y:0
  },"-=0.5"
).fromTo(
  ".hidetext4",
  0.8,
  {
    opacity:0,
    y:150
  },
  {
    opacity:1,
    y:0
  },"-=0.5"
).fromTo(
  ".hidetext5",
  0.8,
  {
    opacity:0,
    y:150
  },
  {
    opacity:1,
    y:0
  },"-=0.5"
).fromTo(
  ".hidetext1",
  0.8,
  {
    
    y:0
  },
  {
    
    y:-150  
  },"+=1"
).fromTo(
  ".hidetext2",
  0.8,
  {
    
    y:0
  },
  {
    
    y:-150
    },"-=0.5"
).fromTo(
  ".hidetext3",
  0.8,
  {
    
    y:0
  },
  {
    
    y:-150
    },"-=0.5"
).fromTo(
  ".hidetext4",
  0.8,
  {
    
    y:0
  },
  {
    
    y: -150
   },"-=0.5"
).fromTo(
  ".hidetext5",
  0.8,
  {
    
    y:0
  },
  {
    
    y: -150
   },"-=0.5"
).fromTo(".intro2",0.5,{
  height:"0",
  top:"100%"
},{
  height:"100%",
  top:"0%"
}).to(".intro",0.5,{
  display:"none"
}).to(
  ".intro2",0.8,{
    height:"0%"
  }
)

window.addEventListener('load',()=>{
  // disableScroll();
  introtl.play();
})
const tl = new TimelineLite({ paused: true });

tl.fromTo(
  ".floatingnavbtn",
  0.3,
  {
    x: 150,
    opacity: 0,
  },
  {
    opacity: 1,
    x: 0,
  }
);
var btnvisible = false;
var navvisible = true;
var typed = new Typed(".typing", {
  strings: [
    "An Artist!",
    "A Student.",
    "A Geek.",
    "A Programer.",
    "An Enthusiast!",
    "A Web-Developer!",
    "An Angular Developer.",
    "An Illustrator!",
    "A React Developer.",
    "A Full Stack Developer"
  ],
  smartBackspace: true,
  backSpeed: 80,
  cursorChar: "_",
  backDelay: 1000,
  typeSpeed: 100,
  shuffle: true,
  loop: true,
});
AOS.init();
const opa = document.getElementById("btnclick");
const player = document.querySelector("lottie-player");
function resume() {
  opa.style.opacity = "1";
  player.stop();
  player.play();
}

window.addEventListener("scroll", function () {
  var element = document.querySelector("#nav");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    //visible
    if (sideopne) {
      sidenav();
    }
    if (btnvisible && !navvisible) {
      tl.reverse();
      navvisible = true;
      btnvisible = false;
    }
  } else {
    //not visible
    if (navvisible && !btnvisible) {
      // console.log("triggered")
      tl.restart();
      navvisible = false;
      btnvisible = true;
    }
  }
});
window.addEventListener("resize", (e) => {
  if (sideopne) {
    sidenav();
  }
});
var sideopne = false;
var sign = document.querySelector(".floatingnavbtn");
var sign1 = document.querySelector(".floatingnavbtn1");

var circle = document.querySelector(".floatingnav");
var main = document.querySelector(".main");
function sidenav() {
  if (!sideopne) {
    sign.innerHTML = "&#10005;";
    sign1.innerHTML = "&#10005;";

    setTimeout(() => {
     if(screen.width>=500){
      circle.style.width = "1000px";
     }
     else{
      circle.style.width = `${500+screen.width}px`;
     }
     circle.style.height = "1000px";


    }, 0.3);
    setTimeout(() => {
      main.style.opacity = "1";
    }, 0.6);
    sideopne = true;
  } else {
    sign.innerHTML = "&#9776;";
    sign1.innerHTML = "&#9776;";

    setTimeout(() => {
      main.style.opacity = "0";
    }, 0.3);
    setTimeout(() => {
      circle.style.height = "0px";
      circle.style.width = "0px";
    }, 0.6);

    sideopne = false;
  }
}

function aboutclick() {
  console.log("triggered");
  sign.innerHTML = "&#9776;";
  document.getElementById("btn1").innerHTML = "&#9776;";
  setTimeout(() => {
    main.style.opacity = "0";
  }, 0.3);
  setTimeout(() => {
    circle.style.height = "0px";
    circle.style.width = "0px";
  }, 0.6);

  sideopne = false;
}



const imgtl = new TimelineLite({ paused: true });

imgtl
  .fromTo(
    ".moel",
    0.5,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  )
  .fromTo(
    ".modalimage",
    0.2,
    {
      scale: 0,
    },
    {
      scale: 1,
    },
    "-=0.3"
  );

function openimage(num) {
  document.getElementById("modal").style.pointerEvents = "all";
  // windo
  console.log("funtion triggered");
  var img = document.querySelector(".modalimage");
  img.src = `./assets/d${num}.png`;
  imgtl.restart();
}
function closemodal() {
  imgtl.reverse();

  document.getElementById("modal").style.pointerEvents = "none";
  // var img  = document.querySelector(".modalimage")
  // img.src = ``
}
$(document).ready(function () {

  var events = [
    {
      date: '3/05/2021-3/06/2021',
      content: 'Padhhigh - Content Writer'
    },
    {
      date: '17/05/2021-16/06/2021',
      content: 'Engineer Diaries - Angular Developer'
    },
    {
      date: '29/05/2020 - 28/06/2021',
      content: 'Srchout - Full Stack Developer'
    },
    {
      date: '17/06/2021 - 16/08/2021',
      content: 'Upjao - Full Stack Developer'
    },
    {
      date:'18/08/2021 - PRESENT',
      content:'AGPayTech - Junior Angular Developer'
    }





  ];

  $('#my-timeline').roadmap(events, {
    eventsPerSlide: 5,
    slide: 1,

    prevArrow: '<i class="fas fa-angle-left"></i>',


    nextArrow: '<i class="fas fa-angle-right"></i>',
    orientation: 'auto'

  });
});

var front = document.getElementById("front")
var api = document.getElementById("api")
var full = document.getElementById("full")
var python = document.getElementById("python")
var art = document.getElementById("art")
var pypro = document.getElementById("pythonprojects")
var fupro = document.getElementById("fullprojects")
var apipro = document.getElementById("apiproject")
var fropro = document.getElementById("frontprojects")
var artpro = document.getElementById("arts")

front.addEventListener("click", () => {
  console.log("clicked")
  front.classList.remove("worksactive")
  api.classList.remove("worksactive")
  full.classList.remove("worksactive")
  python.classList.remove("worksactive")
  art.classList.remove("worksactive")
  front.classList.add("worksactive")
  fropro.style.display = "none"
  artpro.style.display = "none"
  fupro.style.display = "none"
  pypro.style.display = "none"
  apipro.style.display = "none"
  const frtl = new TimelineLite();
  frtl.fromTo(`.frontproj`,0.5,{
    display:"none",
    opacity:0,
    x:-250
  },{
    
    opacity:1,
    x:0,
    display:"block",
  })
})
api.addEventListener("click", () => {
  console.log("clicked")
  front.classList.remove("worksactive")
  api.classList.remove("worksactive")
  full.classList.remove("worksactive")
  python.classList.remove("worksactive")
  art.classList.remove("worksactive")
  api.classList.add("worksactive")
  fropro.style.display = "none"
  artpro.style.display = "none"
  fupro.style.display = "none"
  pypro.style.display = "none"
  apipro.style.display = "none"
  const jatl = new TimelineLite();
  jatl.fromTo(`.apisprojectsdiv`,0.5,{
    display:"none",
    opacity:0,
    x:-250
  },{
    
    opacity:1,
    x:0,
    display:"block",
  })
 
 
})
full.addEventListener("click", () => {
  console.log("clicked")
  front.classList.remove("worksactive")
  api.classList.remove("worksactive")
  full.classList.remove("worksactive")
  python.classList.remove("worksactive")
  art.classList.remove("worksactive")
  full.classList.add("worksactive")
  fropro.style.display = "none"
  artpro.style.display = "none"
  fupro.style.display = "none"
  pypro.style.display = "none"
  apipro.style.display = "none"
  const ntl = new TimelineLite()
  ntl.fromTo(`.fullstack`,0.5,{
    display:"none",
    opacity:0,
    x:-250
  },{
    
    opacity:1,
    x:0,
    display:"block",
  })
})
python.addEventListener("click", () => {
  console.log("clicked")
  front.classList.remove("worksactive")
  api.classList.remove("worksactive")
  full.classList.remove("worksactive")
  python.classList.remove("worksactive")
  art.classList.remove("worksactive")
  python.classList.add("worksactive")
  fropro.style.display = "none"
  artpro.style.display = "none"
  fupro.style.display = "none"
  pypro.style.display = "none"
  apipro.style.display = "none"
  const ptl = new TimelineLite()

  ptl.fromTo(`.pytproj`,0.5,{
    display:"none",
    opacity:0,
    x:-250
  },{
    
    opacity:1,
    x:0,
    display:"block",
  })
})
art.addEventListener("click", () => {
  console.log("clicked")
  front.classList.remove("worksactive")
  api.classList.remove("worksactive")
  full.classList.remove("worksactive")
  python.classList.remove("worksactive")
  art.classList.remove("worksactive")
  art.classList.add("worksactive")
   fropro.style.display = "none"
  artpro.style.display = "none"
  fupro.style.display = "none"
  pypro.style.display = "none"
  apipro.style.display = "none"
  const ptl = new TimelineLite()

  ptl.fromTo(`.artclass`,0.5,{
    display:"none",
    opacity:0,
    x:-250
  },{
    
    opacity:1,
    x:0,
    display:"block",
  })
})

$("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        navigationText:["",""],
        autoPlay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });



