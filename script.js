// Adresse de contact, découpée et inversée pour ne pas apparaître en clair dans le code
// (les robots qui collectent les adresses e-mail n'exécutent généralement pas le JavaScript)
const EMAIL_PARTS = ["yrgnal.deirfliw", "moc.liamg"];
const reverse = (str) => str.split("").reverse().join("");
const CONTACT_EMAIL = `${reverse(EMAIL_PARTS[0])}@${reverse(EMAIL_PARTS[1])}`;

// Lien e-mail de la section Contact, construit seulement dans le navigateur
document.querySelectorAll(".js-email").forEach((link) => {
  link.href = `mailto:${CONTACT_EMAIL}`;
  link.textContent = CONTACT_EMAIL;
});

// Année du pied de page
document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

// Bordure de l'en-tête au défilement
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Apparition progressive des blocs
const revealTargets = document.querySelectorAll(".section-head, .card, .skill-group, .steps li, .about > *, .contact-inner > *");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

// Formulaire de contact : ouvre la messagerie du visiteur avec le message pré-rempli
const form = document.getElementById("contact-form");
const status = form.querySelector(".form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const nom = data.get("nom").trim();
  const email = data.get("email").trim();
  const entreprise = data.get("entreprise").trim();
  const message = data.get("message").trim();

  if (!nom || !email || !message || !form.email.checkValidity()) {
    status.textContent = "Merci de renseigner votre nom, un e-mail valide et votre message.";
    status.className = "form-status error";
    return;
  }

  const subject = `Prise de contact — ${nom}${entreprise ? ` (${entreprise})` : ""}`;
  const body = `${message}\n\n—\n${nom}\n${email}${entreprise ? `\n${entreprise}` : ""}`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  status.textContent = "Votre messagerie va s'ouvrir avec le message pré-rempli. Merci !";
  status.className = "form-status ok";
  form.reset();
});
