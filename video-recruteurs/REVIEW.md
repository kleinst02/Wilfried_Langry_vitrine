# REVIEW — vidéo recruteurs « Même exigence, nouveau terrain »

Rendu : `renders/wilfried-langry-recruteurs.mp4`, 1920 × 1080, 30 images/s, 45,65 s.

## Choix créatifs

- **Scénario construit : A, « Même exigence, nouveau terrain »** (voir `STORYLINES.md`). La reconversion devient l'argument : la rigueur qualité de l'industrie se retrouve dans le support et la documentation CRM.
- **Non construits :** B, « Le losange qui se recompose » (typographie géante, ~25 s, pour le fil LinkedIn), et C, « La diagonale » (parcours chronologique complet, ~45 s).
- **Charte** reprise du site vitrine du dépôt : rouge #D9202A, gris #F4F4F4 et treillis à 45°, Montserrat et Open Sans, losanges, photo noir et blanc, monogramme WL, bouton « ME CONTACTER ».
- **Faits à l'écran** : uniquement le profil LinkedIn (PDF) et le site.
  - « 10+ ans en qualité » et « 6+ ans en CRM » sont les chiffres du site.
  - Les paires de la scène 5 associent des intitulés réels :
    - actions correctives → correction des anomalies ;
    - gestion documentaire → procédures d'incident ;
    - amélioration continue, présente dans les deux métiers.
- **Employeur actuel** : « Magellan (ex-NewBound) », comme sur le site. Le PDF LinkedIn indique encore NewBound.
- **Coordonnées** : pas de téléphone ni d'e-mail à l'écran. Seuls figurent in/wilfriedlangry et la zone (Hauts-de-France & Île-de-France), comme sur la carte de contact du site.
- **Aucun logo de marque tierce** (Salesforce, Selligent…) : les outils sont écrits en toutes lettres.
- **Son** : pas de musique, faute de source (pas de compte HeyGen, pas de modèle local). La vidéo est conçue pour être comprise sans le son. 17 effets ponctuels de la bibliothèque HyperFrames (licence Pixabay, sans attribution obligatoire) : tampons, balayages, montée vers le point culminant, clic du bouton.
- **GSAP** est copié dans `lib/` (depuis npm), car le CDN jsdelivr est bloqué par le réseau du conteneur. Le rendu ne dépend ainsi d'aucun service en ligne.

## Mesuré, regardé, non vérifié

- `npx hyperframes check` : 0 erreur (lint, exécution, mise en page, mouvement, contraste, son).
- Planches `snapshot --review` regardées : temps forts, raccords, largeur téléphone. Les raccords sont continus :
  - le losange porteur devient la couture, puis la carte de contact ;
  - l'iris en losange ouvre l'usine ;
  - le tampon grandit jusqu'à devenir le monde rouge.
- Le son a été **mesuré, pas écouté** (voir la section Mesures ci-dessous).

## Mesures sur le MP4 final

- **Image** : H.264, 1920 × 1080, 30 images/s, 1370 images, 45,67 s, 4,2 Mo. Des images décodées du fichier ont été regardées de 0 à 45,5 s.
- **Son** : AAC 48 kHz stéréo ; −20 LUFS intégré, crête vraie −2,7 dBTP, aucun écrêtage.
- **Synchronisation** : les impacts mesurés tombent une image après leur action à l'écran.
  - tampons : 5,30 / 5,66 / 6,00 / 6,36 / 6,71 s ;
  - « 10+ » : 9,61 s ;
  - filé : 15,05 s ;
  - CERTIFIÉ : 16,05 s ;
  - lignes Salesforce : 23,21 / 24,61 / 26,31 s ;
  - couture : 36,01 s ;
  - bouton : 42,30 s.
- **Silences de plus de 3 s** : 20,1–23,2 s (schéma data), 26,4–30,2 s (fin Salesforce et première paire) et la tenue finale, voulus faute de musique.

## Plan le plus faible, et ce que je ferais avec plus de temps

- **Le schéma « Data & ETL » (≈ 20 s)** reste petit et schématique. Avec plus de temps : de vrais flux animés, ou une capture réelle de l'un des outils.
- **À mi-traversée de la couture (scène 5)**, les mots sont brièvement illisibles, par construction. Un flou de mouvement atténue l'effet.
- **Pour aller plus loin :**
  - une musique (piste fournie par Wilfried, ou catalogue HeyGen) ;
  - une version carrée ou verticale pour le fil LinkedIn sur téléphone : en 16:9 sur un téléphone tenu droit, les textes secondaires deviennent petits.

## Avertissements conservés volontairement

- `line_unread` sur « SELLIGENT CDM » : le contrôle compte chaque lettre animée comme un mot. Les deux mots restent 2,9 s à l'écran.
- `line_unread` sur « Actions correctives » et « Gestion documentaire » : le contrôle lit le début de la traversée comme une disparition. Les planches montrent chaque mot fixe et net pendant environ 1 s avant qu'il ne traverse.
