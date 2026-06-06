const intro = document.getElementById("intro");
const garden = document.getElementById("garden");
const music = document.getElementById("music");

let musicPlaying = false;

/* 🌸 ENTRAR */
function enterGarden() {
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    garden.style.opacity = "1";

    startPetals();
    startScroll();
  }, 1200);
}

/* 🎵 TOCAR / PAUSAR MÚSICA */
function toggleMusic() {
  if (!music) return;

  if (!musicPlaying) {
    music.volume = 0.25;
    music.play().catch(() => {});
    musicPlaying = true;
  } else {
    music.pause();
    musicPlaying = false;
  }
}

/* 🌬️ PÉTALAS */
function startPetals() {
  const container = document.getElementById("petals");

  for (let i = 0; i < 20; i++) {
    createPetal(container);
  }

  setInterval(() => createPetal(container), 600);
}

function createPetal(container) {
  const p = document.createElement("div");
  p.classList.add("petal");

  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = (4 + Math.random() * 5) + "s";

  container.appendChild(p);

  setTimeout(() => p.remove(), 9000);
}

/* 🌿 SCROLL ANIMATION */
function startScroll() {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(s => observer.observe(s));
}
