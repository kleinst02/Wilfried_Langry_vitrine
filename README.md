# Wilfried Langry — Site vitrine

Site vitrine statique (HTML / CSS / JavaScript, sans dépendance ni étape de build) présentant mon activité de consultant en informatique.

## Contenu

| Section       | Description                                        |
|---------------|----------------------------------------------------|
| Accueil       | Portrait, accroche et navigation                   |
| À propos      | Présentation et chiffres clés                      |
| Services      | Offres de prestation                               |
| Parcours      | Expériences professionnelles                       |
| Compétences   | Certifications, formation, outils et langues       |
| Contact       | Coordonnées et formulaire (ouvre la messagerie)    |

Le design s'organise autour de losanges et d'un accent rouge. Il est responsive (mobile, tablette, ordinateur) et respecte la préférence « réduire les animations ».

## Prévisualiser en local

Ouvrez simplement `index.html` dans un navigateur, ou lancez un petit serveur :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## Personnaliser

- **Textes** : tout se trouve dans `index.html` (services, parcours, compétences…).
- **E-mail de contact** : l'adresse n'apparaît jamais en clair (protection anti-spam). Elle est stockée dans `script.js` (`EMAIL_PARTS`) en deux morceaux écrits à l'envers : la partie avant le `@`, puis le domaine. Exemple : `jean.dupont@gmail.com` → `["tnopud.naej", "moc.liamg"]`.
- **Photo** : remplacez `assets/photo.jpg` (format carré, 640×640 px conseillé).
- **Couleurs** : modifiez la variable `--accent` (rouge par défaut) en haut de `styles.css`.

## Mettre en ligne (GitHub Pages)

1. Sur GitHub : **Settings → Pages**.
2. *Source* : **Deploy from a branch**, branche `main`, dossier `/ (root)`.
3. Le site est publié sur `https://<utilisateur>.github.io/<dépôt>/` en quelques minutes.

Un nom de domaine personnalisé peut ensuite être configuré dans la même page.
