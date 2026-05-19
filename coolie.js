const sidenav = document.querySelector(".side-navbar");

function showbbar() {
  sidenav.style.left = "0%";
}

function hidebbar() {
  sidenav.style.left = "-60%";
}
// Add this to coolie.js
const bulbBtn = document.querySelector(".light");

bulbBtn.addEventListener("click", () => {
  // This toggles a single class on the entire body
  document.body.classList.toggle("light-theme");
});
  //  document.querySelector(".graph1").classList.toggle("glow");
  //  document.querySelector(".graph7").classList.toggle("glow");
  //  document.querySelector(".graph9").classList.toggle("glow1");
  //  document.querySelector(".graph2").classList.toggle("glow");
  //  document.querySelector(".graph4").classList.toggle("glow");
  //  document.querySelector(".graph5").classList.toggle("glow");
  //  document.querySelector(".graph6").classList.toggle("glow2");
  // var twoo =  document.getElementById("two");
  // var threeeo =  document.getElementById('threeo');
  // var threeet = document.getElementById('three-t');
  // var eduu =  document.getElementById('edu');
  // var threee = document.getElementById('three');


var typed = new Typed(".auto-type", {
  strings: [
    "Frontend Developer",
    "Java Programmer",
    "Python Programmer",
    "Backend Developer",
    "Web Designer",
    "SQL Developer",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

document.querySelectorAll(".project1, .project2, .project3").forEach(card => {
  card.addEventListener("mousemove", e => {
    let x = e.offsetX;
    let y = e.offsetY;

    let rotateX = -(y / 20);
    let rotateY = x / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".project1, .project2, .project3",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#props",
      start: "top 80%",
    }
  }
);

gsap.fromTo(
  ".skills-11, .skills-12, .skills-13, .skills-14, .skills-15, .skills-16",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#scale",
      start: "top 80%",
    }
  }
);
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    dx: Math.random() - 0.5,
    dy: Math.random() - 0.5
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x,p.y,2,0,Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;
  });

  requestAnimationFrame(animate);
}

animate();

const snowCanvas = document.getElementById("snowCanvas");
const sctx = snowCanvas.getContext("2d");

snowCanvas.width = window.innerWidth;
snowCanvas.height = window.innerHeight;

let snowflakes = [];

for (let i = 0; i < 100; i++) {
  snowflakes.push({
    x: Math.random() * snowCanvas.width,
    y: Math.random() * snowCanvas.height,
    radius: Math.random() * 3,
    speed: Math.random() + 0.5
  });
}

function drawSnow() {
  sctx.clearRect(0, 0, snowCanvas.width, snowCanvas.height);

  snowflakes.forEach(flake => {
    sctx.beginPath();
    sctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    sctx.fillStyle = "white";
    sctx.fill();

    flake.y += flake.speed;

    if (flake.y > snowCanvas.height) {
      flake.y = 0;
      flake.x = Math.random() * snowCanvas.width;
    }
  });

  requestAnimationFrame(drawSnow);
}

drawSnow();

function scrollToResume() {
  document.getElementById("resume").scrollIntoView({
    behavior: "smooth"
  });
}