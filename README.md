# Site de cours particuliers — mise en ligne sur GitHub Pages

Site statique : HTML, CSS et JavaScript, sans build, sans dépendance. Il fonctionne tel quel sur GitHub Pages.

## 1. À remplir avant de publier

Un seul fichier : `assets/site-config.js`.

| Champ | Effet |
|---|---|
| `email` | Active les boutons « Me contacter » en `mailto:` (sujet pré-rempli selon l’offre) et la page Contact. **Sans email, la page Contact affiche « Les coordonnées seront ajoutées prochainement »**. |
| `telephone`, `whatsapp`, `plateforme`, `reservation` | Chaque champ rempli ajoute une ligne sur la page Contact. Vide = masqué. |
| `formspree` | URL d’un formulaire Formspree (gratuit) : affiche le formulaire de contact. Vide = pas de formulaire. |
| `nomComplet`, `photo` | Nom affiché (sinon le prénom) ; chemin d’une photo (sinon un monogramme). |
| `zone`, `disponibilites` | Affichés sur l’accueil, À propos et Contact. |
| `tarifs`, `tarifsNote` | Tableau des tarifs sur la page Offres. Vide = « Tarifs communiqués sur demande ». |
| `temoignages` | Section « Ils en parlent » sur l’accueil. Vide = section masquée. |

Catalogue de la page Produits : `assets/produits.js`. Les entrées avec `exemple: true` portent un badge rouge « Exemple à remplacer » ; remplacez-les par vos vrais produits (ou videz le tableau).

## 2. Publier

**Option A, site racine** (`https://VOTRE-UTILISATEUR.github.io`) :

1. Créez un dépôt public nommé exactement `VOTRE-UTILISATEUR.github.io`.
2. Copiez le contenu de ce dossier à la racine du dépôt (y compris `.nojekyll`).
3. `git add -A && git commit -m "Site" && git push`
4. Dans le dépôt : Settings → Pages → Source : « Deploy from a branch », branche `main`, dossier `/ (root)`.
5. Le site est en ligne en une à deux minutes.

**Option B, sous-dossier** (`https://VOTRE-UTILISATEUR.github.io/cours`) : même chose avec un dépôt nommé `cours`. Tous les liens du site sont relatifs, rien à changer.

**Domaine personnalisé** : Settings → Pages → Custom domain, puis un enregistrement CNAME chez votre registrar vers `VOTRE-UTILISATEUR.github.io`.

## 3. Modifier le contenu

- Textes des offres : `offres.html` (sept blocs `<article class="offre">`).
- Accueil : `index.html`. Le visualiseur de dérivée est dans `assets/demo-derivee.js` ; la fonction tracée est `f = x³/6 − x`, modifiable en haut du fichier.
- Tri pas à pas de la page Offres : `assets/demo-tri.js`.
- Couleurs et typographie : variables en haut de `assets/styles.css`. Polices chargées depuis Google Fonts (STIX Two Text, JetBrains Mono) ; pour un site sans requête externe, remplacez la ligne `<link href="https://fonts.googleapis.com/...">` de chaque page par des polices locales.

## 4. Tester en local

```
python3 -m http.server 8000
```
puis ouvrez `http://localhost:8000`.
