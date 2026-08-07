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
  setupSmoothAnchorScroll();
  setupMobileMenu();
  setupFooterYear();
  setupScrollReveal();
  setupScrollSpy();
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

/* ---------- Scroll suave y parejo hacia anclas internas ---------- */
function setupSmoothAnchorScroll() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const getScrollOffset = () =>
    window.matchMedia("(max-width: 640px)").matches ? 32 : 8;

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const animateScrollTo = (targetY) => {
    const startY = window.scrollY;
    const distance = targetY - startY;

    if (prefersReducedMotion || distance === 0) {
      window.scrollTo({ top: targetY, behavior: "auto" });
      return;
    }

    const duration = Math.min(900, Math.max(350, Math.abs(distance) * 0.4));
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      window.scrollTo({
        top: startY + distance * easeInOutCubic(progress),
        behavior: "auto",
      });
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href").slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      event.preventDefault();

      // Al saltar directo a una sección, mostrar su contenido de una vez en
      // vez de esperar a que el scroll cruce el umbral de aparición gradual
      // (si no, con un salto rápido el contenido puede quedar en blanco).
      target
        .querySelectorAll("[data-reveal]")
        .forEach((el) => el.classList.add("is-visible"));

      const targetY =
        target.getBoundingClientRect().top + window.scrollY - getScrollOffset();
      animateScrollTo(Math.max(targetY, 0));
    });
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

/* ---------- Resaltar en el menú la sección visible al scrollear ---------- */
function setupScrollSpy() {
  const navList = document.querySelector(".nav__list");
  const navLinks = document.querySelectorAll(".nav__link");
  if (!navLinks.length || !("IntersectionObserver" in window)) return;

  const sections = Array.from(navLinks)
    .map((link) => {
      const target = document.getElementById(link.getAttribute("href").slice(1));
      return target ? { link, target } : null;
    })
    .filter(Boolean);

  if (!sections.length) return;

  // Barra roja que se desliza de un link a otro en vez de aparecer de golpe:
  // un extremo se estira hacia el destino y el otro lo alcanza después,
  // manteniendo siempre una única línea continua.
  const indicator = document.createElement("span");
  indicator.className = "nav__indicator";
  indicator.setAttribute("aria-hidden", "true");
  if (navList) navList.appendChild(indicator);

  let indicatorState = null;

  const applyIndicator = (left, width) => {
    indicator.style.left = `${left}px`;
    indicator.style.width = `${width}px`;
  };

  const moveIndicator = (link) => {
    if (!navList) return;
    const listRect = navList.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const targetLeft = linkRect.left - listRect.left;
    const targetWidth = linkRect.width;

    indicator.classList.add("is-visible");

    if (!indicatorState) {
      applyIndicator(targetLeft, targetWidth);
      indicatorState = { left: targetLeft, width: targetWidth };
      return;
    }

    const fromLeft = indicatorState.left;
    const fromRight = fromLeft + indicatorState.width;
    const targetRight = targetLeft + targetWidth;

    if (targetLeft >= fromLeft) {
      // Se mueve a la derecha: primero estira el borde derecho hasta el
      // destino, después el borde izquierdo lo alcanza.
      applyIndicator(fromLeft, targetRight - fromLeft);
    } else {
      // Se mueve a la izquierda: primero estira el borde izquierdo hasta
      // el destino, después el borde derecho lo alcanza.
      applyIndicator(targetLeft, fromRight - targetLeft);
    }

    window.setTimeout(() => applyIndicator(targetLeft, targetWidth), 140);
    indicatorState = { left: targetLeft, width: targetWidth };
  };

  const setActive = (link) => {
    navLinks.forEach((l) => l.classList.remove("is-active"));
    link.classList.add("is-active");
    moveIndicator(link);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const match = sections.find((s) => s.target === entry.target);
        if (match) setActive(match.link);
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  window.addEventListener("resize", () => {
    const current = document.querySelector(".nav__link.is-active");
    if (current) moveIndicator(current);
  });

  sections.forEach(({ target }) => observer.observe(target));
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
