/* ============================================================
   CATALOGUE DES PRODUITS — à remplir.
   Chaque entrée :
     titre       : nom du produit
     type        : "Fiche de cours" | "Fiches méthodes" | "Flashcards" | "Contrôle blanc" | "Mini-application"
     niveau      : "Collège" | "Lycée" | "Supérieur" | "Programmation"
     format      : "PDF", "Web", "PDF + web"…
     description : 1 à 3 phrases, concrètes
     prix        : "Gratuit", "8 €", ou "" pour « sur demande »
     lien        : URL de téléchargement / d'achat, ou "" pour un bouton « Demander » (mailto)
     exemple     : true tant que l'entrée est fictive → un badge « Exemple à remplacer » s'affiche.
                   Supprimez la ligne (ou passez à false) quand le produit est réel.
   ============================================================ */

window.PRODUITS = [
  {
    titre: "Fiches de cours, terminale spécialité, chapitre par chapitre",
    type: "Fiche de cours",
    niveau: "Lycée",
    format: "PDF",
    description: "Une fiche par chapitre : définitions, théorèmes, méthodes à connaître, erreurs fréquentes. Relue avec des élèves de terminale.",
    prix: "",
    lien: "",
    exemple: true,
  },
  {
    titre: "Flashcards, formules et méthodes du brevet",
    type: "Flashcards",
    niveau: "Collège",
    format: "PDF",
    description: "Un jeu de cartes recto-verso à imprimer : la question d'un côté, la réponse et un exemple de l'autre.",
    prix: "",
    lien: "",
    exemple: true,
  },
  {
    titre: "Contrôle blanc corrigé, analyse L1, limites et continuité",
    type: "Contrôle blanc",
    niveau: "Supérieur",
    format: "PDF",
    description: "Un sujet au format partiel, avec barème, corrigé rédigé et commentaires sur les points où l'on perd des points.",
    prix: "",
    lien: "",
    exemple: true,
  },
  {
    titre: "Mini-application, la dérivée comme pente de la tangente",
    type: "Mini-application",
    niveau: "Lycée",
    format: "Web",
    description: "L'outil de la page d'accueil, utilisable en séance ou seul : déplacer le point, lire la pente, repérer les extremums.",
    prix: "Gratuit",
    lien: "index.html#visualiser",
    exemple: false,
  },
];
