// Adresse de contact, découpée et inversée pour ne pas apparaître en clair dans le code
// (les robots qui collectent les adresses e-mail n'exécutent généralement pas le JavaScript)
const EMAIL_PARTS = ["yrgnal.deirfliw", "moc.liamg"];
const reverse = (str) => str.split("").reverse().join("");
const CONTACT_EMAIL = `${reverse(EMAIL_PARTS[0])}@${reverse(EMAIL_PARTS[1])}`;

// Lien e-mail de la section Contact, construit seulement dans le navigateur
document.querySelectorAll(".js-email").forEach((link) => {
  link.href = `mailto:${CONTACT_EMAIL}`;
  link.querySelector("span").textContent = CONTACT_EMAIL;
});

// Année du pied de page
document.getElementById("year").textContent = new Date().getFullYear();

// Points de navigation : met en évidence la section visible
const dots = document.querySelectorAll(".dots a");
if ("IntersectionObserver" in window && dots.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      dots.forEach((dot) => dot.classList.toggle("active", dot.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-45% 0px -45% 0px" });
  dots.forEach((dot) => {
    const section = document.querySelector(dot.getAttribute("href"));
    if (section) observer.observe(section);
  });
}

// Formulaire de contact : ouvre la messagerie du visiteur avec le message pré-rempli
const form = document.getElementById("contact-form");
const status = form.querySelector(".form-status");
const sendButton = form.querySelector(".send-btn");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const nom = data.get("nom").trim();
  const email = data.get("email").trim();
  const message = data.get("message").trim();

  if (!nom || !email || !message || !form.email.checkValidity()) {
    status.textContent = "MERCI DE RENSEIGNER VOTRE NOM, UN E-MAIL VALIDE ET VOTRE MESSAGE.";
    sendButton.classList.remove("sent");
    return;
  }

  const subject = `Prise de contact — ${nom}`;
  const body = `${message}\n\n—\n${nom}\n${email}`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  status.textContent = "MERCI ! VOTRE MESSAGERIE VA S'OUVRIR.";
  sendButton.classList.add("sent");
  form.reset();
});
