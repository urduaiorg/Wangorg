const header = document.querySelector(".site-header");
const nav = document.querySelector(".site-nav");
const toggle = document.querySelector(".nav-toggle");
const hero = document.querySelector(".hero-home");

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
    (currentPage === "faq" && href === "faq.html")
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

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 16);
};

const updateHeroParallax = () => {
  if (!hero) return;
  const offset = Math.min(window.scrollY * 0.08, 28);
  hero.style.backgroundPosition = `center calc(50% + ${offset}px)`;
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
