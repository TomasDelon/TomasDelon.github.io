/* Rendu des éléments qui dépendent de site-config.js */
(function () {
  const S = window.SITE || {};
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* Nom affiché */
  const nom = S.nomComplet || S.prenom || "";
  $$("[data-nom]").forEach((el) => { el.textContent = nom; });
  $$("[data-prenom]").forEach((el) => { el.textContent = S.prenom || nom; });
  $$("[data-ville]").forEach((el) => { el.textContent = S.ville || ""; });
  $$("[data-zone]").forEach((el) => { el.textContent = S.zone || S.ville || ""; });
  $$("[data-dispo]").forEach((el) => { el.textContent = S.disponibilites || ""; });

  /* Liens « Me contacter » : mailto si email, sinon page contact */
  const mailto = (sujet) =>
    S.email ? "mailto:" + S.email + (sujet ? "?subject=" + encodeURIComponent(sujet) : "") : "contact.html";
  $$("[data-contact]").forEach((a) => {
    const sujet = a.getAttribute("data-contact") || "";
    a.setAttribute("href", mailto(sujet));
  });

  /* Pied de page : email */
  $$("[data-email-footer]").forEach((el) => {
    if (S.email) {
      const a = document.createElement("a");
      a.href = "mailto:" + S.email; a.textContent = S.email;
      el.textContent = ""; el.appendChild(a);
    } else { el.remove(); }
  });

  /* Page contact : liste des canaux */
  const liste = $("#contact-liste");
  if (liste) {
    const rows = [];
    if (S.email) rows.push(["Email", `<a href="mailto:${S.email}">${S.email}</a>`]);
    if (S.telephone) rows.push(["Téléphone", `<a href="tel:${S.telephone.replace(/\s+/g, "")}">${S.telephone}</a>`]);
    if (S.whatsapp) rows.push(["WhatsApp", `<a href="https://wa.me/${S.whatsapp}" rel="noopener">Écrire sur WhatsApp</a>`]);
    if (S.plateforme && S.plateforme.url) rows.push(["Plateforme", `<a href="${S.plateforme.url}" rel="noopener">${S.plateforme.nom || S.plateforme.url}</a>`]);
    if (S.reservation) rows.push(["Réserver un créneau", `<a href="${S.reservation}" rel="noopener">Choisir un horaire</a>`]);
    if (S.zone) rows.push(["Où", `${S.zone}, ou à distance`]);
    if (S.disponibilites) rows.push(["Quand", S.disponibilites]);
    if (rows.length) {
      liste.innerHTML = rows.map(([k, v]) => `<li><span class="k">${k}</span><span>${v}</span></li>`).join("");
    } else {
      liste.innerHTML = `<li><span class="k">Contact</span><span>Les coordonnées seront ajoutées prochainement.</span></li>`;
    }
    const vide = $("#contact-vide");
    if (vide) vide.hidden = Boolean(S.email || S.telephone || S.whatsapp || (S.plateforme && S.plateforme.url));
  }

  /* Page contact : formulaire (Formspree) */
  const form = $("#formulaire");
  if (form) {
    if (S.formspree) { form.action = S.formspree; form.hidden = false; }
    else { form.hidden = true; }
  }

  /* Tarifs */
  const tarifs = $("#tarifs-table");
  if (tarifs) {
    if (Array.isArray(S.tarifs) && S.tarifs.length) {
      tarifs.innerHTML =
        `<table class="table"><thead><tr><th>Offre</th><th>Tarif</th></tr></thead><tbody>` +
        S.tarifs.map((t) => `<tr><td>${t.offre}</td><td>${t.prix}</td></tr>`).join("") +
        `</tbody></table>` + (S.tarifsNote ? `<p class="small muted" style="margin-top:.75rem">${S.tarifsNote}</p>` : "");
    } else {
      tarifs.innerHTML = `<p>Tarifs communiqués sur demande, selon le niveau et la fréquence des séances.</p>` +
        (S.tarifsNote ? `<p class="small muted">${S.tarifsNote}</p>` : "");
    }
  }

  /* Témoignages */
  const temo = $("#temoignages");
  if (temo) {
    if (Array.isArray(S.temoignages) && S.temoignages.length) {
      const grid = $(".temoignages", temo);
      grid.innerHTML = S.temoignages.map((t) =>
        `<blockquote><p>${t.texte}</p><cite>${t.auteur || ""}</cite></blockquote>`).join("");
      temo.hidden = false;
    } else { temo.hidden = true; }
  }

  /* Photo ou monogramme */
  const portrait = $("#portrait");
  if (portrait) {
    if (S.photo) {
      const img = document.createElement("img");
      img.src = S.photo; img.alt = nom; img.className = "portrait";
      portrait.replaceWith(img);
    } else {
      portrait.textContent = (S.prenom || "T").charAt(0).toUpperCase();
    }
  }

  /* Année du pied de page */
  $$("[data-annee]").forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
