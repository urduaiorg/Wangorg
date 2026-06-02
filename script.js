const header = document.querySelector(".site-header");
const nav = document.querySelector(".site-nav");
const toggle = document.querySelector(".nav-toggle");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function gtag() {
  window.dataLayer.push(arguments);
};

const loadAnalytics = () => {
  if (window.__wangAnalyticsLoaded) return;
  window.__wangAnalyticsLoaded = true;
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-DJ2TGEPJ49";
  script.async = true;
  document.head.appendChild(script);
  window.gtag("js", new Date());
  window.gtag("config", "G-DJ2TGEPJ49");
  window.gtag("config", "AW-17337315510");
};

const scheduleAnalytics = () => {
  ["pointerdown", "keydown", "touchstart"].forEach((eventName) => {
    window.addEventListener(eventName, loadAnalytics, { once: true, passive: true });
  });
  window.setTimeout(loadAnalytics, 15000);
};

scheduleAnalytics();

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

updateHeader();

window.addEventListener(
  "scroll",
  () => {
    updateHeader();
  },
  { passive: true }
);
