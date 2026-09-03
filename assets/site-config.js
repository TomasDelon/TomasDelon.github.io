/* ============================================================
   CONFIGURATION DU SITE — le seul fichier à remplir.
   Tout ce qui est vide ("" ou []) est simplement masqué sur le site.
   ============================================================ */

window.SITE = {

  /* --- Identité --- */
  prenom: "Tomas",
  nomComplet: "",                 // ex. "Tomas D." — laissé vide : seul le prénom s'affiche
  photo: "",                      // ex. "assets/photo.jpg" — vide : un monogramme s'affiche à la place

  /* --- Contact (à compléter : sans email, la page Contact reste vide) --- */
  email: "tomasdelongago@gmail.com",
  telephone: "",                  // ex. "+33 6 12 34 56 78"
  whatsapp: "",                   // ex. "33612345678" (indicatif, sans + ni espaces)
  plateforme: { nom: "", url: "" },   // ex. { nom: "Mon profil Superprof", url: "https://..." }
  reservation: "",                // ex. lien Calendly ou équivalent
  formspree: "",                  // ex. "https://formspree.io/f/xxxxxxxx" — active le formulaire de contact

  /* --- Lieu et modalités --- */
  ville: "Grenoble",
  zone: "Grenoble et alentours",
  disponibilites: "soirs en semaine et week-ends",

  /* --- Tarifs : laissez le tableau vide pour afficher « sur demande » --- */
  tarifs: [
    // { offre: "Collège", prix: "XX € / h" },
    // { offre: "Lycée, préparation du bac", prix: "XX € / h" },
    // { offre: "Supérieur", prix: "XX € / h" },
    // { offre: "Programmation", prix: "XX € / h" },
  ],
  tarifsNote: "",                 // ex. "Première séance de diagnostic : 30 min offertes."

  /* --- Témoignages : la section n'apparaît que si le tableau n'est pas vide --- */
  temoignages: [
    // { texte: "…", auteur: "Parent d'un élève de terminale" },
    // { texte: "…", auteur: "Étudiante en L2 informatique" },
  ],

};
