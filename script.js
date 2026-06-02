const header = document.querySelector(".site-header");
const nav = document.querySelector(".site-nav");
const toggle = document.querySelector(".nav-toggle");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const currentPage = document.body.dataset.page;
document.querySelectorAll(".site-nav a").forEach((link) => {
  const href = link.getAttribute("href") || "";
  if (
    (currentPage === "home" && href === "index.html") ||
    (currentPage === "about" && href === "about.html") ||
    (currentPage === "initiatives" && href === "initiatives.html") ||
    (currentPage === "impact" && href === "impact.html") ||
    (currentPage === "team" && href === "team.html") ||
    (currentPage === "contact" && href === "contact.html") ||
    (currentPage === "faq" && href === "faq.html") ||
    (currentPage === "awards" && href === "awards.html") ||
    (currentPage === "women-girls" && href === "women-girls-technology.html") ||
    (currentPage === "climate" && href === "climate-resilience.html") ||
    (currentPage === "digilit-bk" && href === "digital-literacy-balochistan.html") ||
    (currentPage === "lasbela" && href === "our-work-lasbela.html")
  ) {
    link.classList.add("is-active");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

requestAnimationFrame(() => {
  document.querySelectorAll(".reveal").forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.35) {
      item.classList.add("is-visible");
    }
  });
});

const setFinalHeroStats = () => {
  document.querySelectorAll(".hero-stats .hero-stat-num[data-val]").forEach((el) => {
    const rawTarget = el.dataset.val ?? "";
    const target = Number(rawTarget).toLocaleString("en-US");
    const suffix = el.dataset.suffix ?? "";
    const prefix = el.dataset.prefix ?? "";
    el.textContent = `${prefix}${target}${suffix}`;
  });
};

const animateHeroStats = () => {
  const root = document.querySelector(".hero-stats");
  if (!root) return;
  setFinalHeroStats();
};

animateHeroStats();

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 16);
};

const updateHeroParallax = () => {
  const bgImg = document.querySelector(".hero-home-bg img");
  if (!bgImg) return;
  if (reduceMotion) {
    bgImg.style.transform = "";
    return;
  }
  const offset = Math.min(window.scrollY * 0.06, 40);
  bgImg.style.transform = `translate3d(0, ${offset}px, 0) scale(1.05)`;
};

updateHeader();
updateHeroParallax();

window.addEventListener(
  "scroll",
  () => {
    updateHeader();
    updateHeroParallax();
  },
  { passive: true }
);
