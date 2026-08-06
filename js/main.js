/* ==========================================================================
   Metalúrgica Chascomús — Comportamiento del sitio
   ========================================================================== */

/*
 * Número de WhatsApp centralizado: al completarlo aquí con el número real
 * (formato internacional, sin espacios ni símbolos, ej: 549XXXXXXXXXX),
 * todos los botones de WhatsApp del sitio se actualizan automáticamente.
 */
const WHATSAPP_NUMBER = "[COMPLETAR NÚMERO DE WHATSAPP]";
const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, quisiera solicitar información y un presupuesto para un trabajo.";

document.addEventListener("DOMContentLoaded", () => {
  setupWhatsappLinks();
  setupMobileMenu();
  setupFooterYear();
  setupScrollReveal();
});

/* ---------- Enlaces de WhatsApp ---------- */
function setupWhatsappLinks() {
  const links = document.querySelectorAll("[data-whatsapp]");

  links.forEach((link) => {
    const message = link.getAttribute("data-message") || WHATSAPP_DEFAULT_MESSAGE;
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

/* ---------- Menú móvil (hamburguesa) ---------- */
function setupMobileMenu() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav-menu");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
    );
  });

  nav.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú de navegación");
    });
  });
}

/* ---------- Año actual en el pie de página ---------- */
function setupFooterYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ---------- Aparición suave de bloques al scrollear ---------- */
function setupScrollReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!targets.length) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}
