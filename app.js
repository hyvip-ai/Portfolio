
const introtl = new TimelineLite()
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
).fromTo(".intro2",1,{
  height:"0"
},{
  height:"100%"
}).to(".intro",0.5,{
  display:"none"
}).to(
  ".intro2",0.8,{
    height:"0%"
  }
)
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
    " Student.",
    " Geek.",
    " Programer.",
    " Enthusiast!",
    " Web-Developer!",
    " Web-Designer!",
    "Artist!",
    "Illustrator!",
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
      circle.style.height = "1000px";
      circle.style.width = "1000px";
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

var b = document.querySelector(".outer-container");
var b1 = document.getElementById("outter");
var player1 = document.querySelector(".container-player");
var player1count = 0;
b.addEventListener("mousemove", (e) => {
  var inn = document.querySelector(".inner");
  inn.addEventListener("mousemove", (e) => {
    if (player1count == 0) {
      player1.stop();
      player1.play();
      player1count = 1;
    }
  });
  // console.log(b1.offsetHeight)
  var x = (window.innerWidth / 2 - e.screenX) / 20;
  var y = (b1.offsetHeight / 2 - e.screenY) / 15;
  //    console.log(e.pageX,e.pageY,e)
  inn.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;

  var heading = document.querySelector(".cardheading");

  var d = document.querySelector(".cardheading1");
  var para = document.querySelector(".cardpara11");
  var para1 = document.querySelector(".cardpara12");

  d.style.transform = "translateZ(50px) scale(1.02)";

  heading.style.transform = "translateZ(50px) scale(1.02)";

  para.style.transform = "translateZ(50px) scale(1.02)";
  para1.style.transform = "translateZ(50px) scale(1.02)";

  // para.style.textshadow = "0px 0px 15px rgba(0,0,0,0.3)"
});

b.addEventListener("mouseout", (e) => {
  if (player1count == 1) {
    player1.stop();
    player1count = 0;
  }
  var heading = document.querySelector(".cardheading");

  var d = document.querySelector(".cardheading1");

  var para = document.querySelector(".cardpara11");
  var para1 = document.querySelector(".cardpara12");
  var inn = document.querySelector(".inner");

  inn.style.transform = `rotateX(0deg) rotateY(0deg)`;
  heading.style.transform = `rotateX(0deg) rotateY(0deg)`;
  para.style.transform = "translateZ(0px) scale(1)";
  para1.style.transform = "translateZ(0px) scale(1)";
  d.style.transform = `rotateX(0deg) rotateY(0deg)`;
});

var c = document.querySelector(".outer-container2");
var c1 = document.getElementById("outter2");
var player2 = document.querySelector(".container-player2");
var player2count = 0;
c.addEventListener("mousemove", (e) => {
  var inn = document.querySelector(".inner2");
  inn.addEventListener("mousemove", (e) => {
    if (player2count == 0) {
      player2.stop();
      player2.play();
      player2count = 1;
    }
  });
  var x = (window.innerWidth / 2 - e.screenX) / 20;
  var y = (c1.offsetHeight / 2 - e.screenY) / 15;
  inn.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  var heading = document.querySelector(".cardheading2");
  var d = document.querySelector(".cardheading21");
  var para = document.querySelector(".cardpara21");
  var para1 = document.querySelector(".cardpara22");
  d.style.transform = "translateZ(50px) scale(1.02)";
  heading.style.transform = "translateZ(50px) scale(1.02)";

  para.style.transform = "translateZ(50px) scale(1.02)";
  para1.style.transform = "translateZ(50px) scale(1.02)";
});

c.addEventListener("mouseout", (e) => {
  if (player2count == 1) {
    player2.stop();
    player2count = 0;
  }
  var heading = document.querySelector(".cardheading2");

  var d = document.querySelector(".cardheading21");
  var para = document.querySelector(".cardpara21");
  var para1 = document.querySelector(".cardpara22");
  var inn = document.querySelector(".inner2");

  inn.style.transform = `rotateX(0deg) rotateY(0deg)`;
  heading.style.transform = `rotateX(0deg) rotateY(0deg)`;
  para.style.transform = `rotateX(0deg) rotateY(0deg)`;
  para1.style.transform = `rotateX(0deg) rotateY(0deg)`;

  d.style.transform = `rotateX(0deg) rotateY(0deg)`;
});

var e = document.querySelector(".outer-container3");
var e1 = document.getElementById("outter3");
var player3 = document.querySelector(".container-player3");
var player3count = 0;
e.addEventListener("mousemove", (e) => {
  // e1.style.textShadow = "2px 2px 5px rgba(0,0,0,0.3)"

  var inn = document.querySelector(".inner3");
  inn.addEventListener("mousemove", (e) => {
    if (player3count == 0) {
      player3.stop();
      player3.play();
      player3count = 1;
    }
  });
  var x = (window.innerWidth / 2 - e.screenX) / 20;
  var y = (e1.offsetHeight / 2 - e.screenY) / 15;
  //    console.log(e.pageX,e.pageY,e)
  inn.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;

  var heading = document.querySelector(".cardheading3");

  var d = document.querySelector(".cardheading31");
  var para = document.querySelector(".cardpara31");
  var para1 = document.querySelector(".cardpara32");

  d.style.transform = "translateZ(50px) scale(1.02)";

  heading.style.transform = "translateZ(50px) scale(1.02)";

  para.style.transform = "translateZ(50px) scale(1.02)";
  para1.style.transform = "translateZ(50px) scale(1.02)";
});

e.addEventListener("mouseout", (e) => {
  // e1.style.textShadow = "none"
  if (player3count == 1) {
    player3.stop();
    player3count = 0;
  }
  var inn = document.querySelector(".inner3");
  var heading = document.querySelector(".cardheading3");
  var d = document.querySelector(".cardheading31");
  var para = document.querySelector(".cardpara31");
  var para1 = document.querySelector(".cardpara32");
  inn.style.transform = `rotateX(0deg) rotateY(0deg)`;
  heading.style.transform = `rotateX(0deg) rotateY(0deg)`;
  para.style.transform = "translateZ(0px) scale(1)";
  para1.style.transform = "translateZ(0px) scale(1)";
  d.style.transform = `rotateX(0deg) rotateY(0deg)`;
});

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
      date: '29/05/2020 - 28/06/202',
      content: 'Srchout - Full Stack Developer'
    },
    {
      date: '17/06/2021 - PRESENT',
      content: 'Upjao - Full Stack Developer'
    },





  ];

  $('#my-timeline').roadmap(events, {
    eventsPerSlide: 4,
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


