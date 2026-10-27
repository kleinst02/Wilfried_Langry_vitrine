# SPEC — « Même exigence, nouveau terrain »

```text
GOAL:    Le recruteur termine la vidéo en pensant « consultant CRM senior, Salesforce et Selligent,
         avec la rigueur d'un ancien qualiticien : je le contacte », et il retient in/wilfriedlangry.
OUTPUT:  HyperFrames, 1920 x 1080, 30 fps, MP4 H.264.
TIME:    45,65 s x 30 = 1370 images. Pas de musique (aucune source) : la vidéo doit se comprendre
         sans le son (fil LinkedIn lu en muet). Effets sonores ponctuels (bibliothèque HyperFrames, Pixabay).

LOOK:    Charte du site vitrine (styles.css), mise à l'échelle vidéo.
         - Sol « maison » #F4F4F4 + treillis à ±45° (pas de 180 px, traits de 2 px, noir à 7 %).
         - Monde « usine » : papier #FFFFFF, réglure horizontale #E6E6E6 de 2 px tous les 96 px.
         - Monde « déclic » : aplat rouge #D9202A, encre blanche.
         - Encre #222222 (titres), #555555 (phrases), #6B6B6B (étiquettes).
         - Accent #D9202A : losange porteur, tampons, un mot par plan, carte de fin. #B5171F en appui seulement.
         - Montserrat 300 pour les mots géants (capitales, 110-170 px, interlettrage 0,06-0,14 em) ;
           Montserrat 600/700 pour les étiquettes et les tampons (capitales, 32-64 px, 0,12-0,22 em) ;
           Open Sans 400 pour les phrases (40-48 px) ; JetBrains Mono 400 pour la ligne de code (44 px).
         - Matière : aplats. Aucune ombre, aucun dégradé, aucun grain photo, aucun vignettage.
           Profondeur uniquement par superposition de losanges (clip-path losange du site).
         - Encre des tampons : rouge à 92 %, grain d'encre fixe (feTurbulence, seed 7), cadre double 5 px + 2 px.

OBJECTS: - Le portrait : photo N&B du site dans un losange noir #0E0E0E, masque radial 52 % -> 71 %.
         - Le losange porteur : losange rouge plein de 240 px, année en Montserrat 600 50 px blanc.
           Il compte les années (2026 -> 2006 -> 2018 -> 2019 -> 2026), devient la couture de S5,
           puis le repère au-dessus de la phrase finale, puis la carte de contact.
         - Les tampons : capitales Montserrat 700 rouge, cadre double, rotation fixe entre -8° et +6°.
         - Le monogramme WL : losange au trait de 3 px, lettres Montserrat 600 (comme sur le site).
         - Le bouton « ME CONTACTER » : le bouton du site (bord gris, puis rempli de rouge comme au survol).

MOTION:  - Arrivée : expo.out 0,5-0,7 s. Mots : flou 6 px -> 0 et opacité 0 -> 1 en 0,13 s, 0,067 s d'écart.
           Lettres : 0,035 s d'écart. Mots-clés : gris clair -> encre, 0,08 s d'écart, sans déplacement.
         - Caméra et transitions : power2.inOut 0,6 s. Sorties : power3.in, 40-50 % de la durée d'entrée.
         - Tampon : opacité posée à l'impact (0 ms), échelle 1,22 -> 1 en 0,12 s power4.out.
         - Roulement d'années : bande de chiffres masquée, power2.inOut, ~0,045 s par année.
         - Ressort : back.out(1.3) uniquement à l'arrivée d'un losange.
         - Un mouvement principal par plan ; les secondaires partent 0,1-0,2 s après, à 50-70 % d'amplitude.
         - Transitions (5 sortes) : iris en losange, objet qui devient le monde, filé horizontal,
           écran partagé qui se referme, losange qui devient la carte.

SHOTS:   (temps absolus, voir index.html)
         S1 aujourdhui  0,0-4,2   Portrait + nom dès l'image 0 ; rôle, mots-clés, losange « 2026 » ;
                                  « Avant le CRM : l'usine. » ; 2026 -> 2006 ; l'usine s'ouvre en losange.
         S2 usine       3,6-11,6  Papier réglé ; « Qualité en industrie agroalimentaire » ; 5 tampons ;
                                  « Technicien, animateur, puis assistant qualité » (2008, 2010, 2014) ;
                                  grand tampon « 10+ ANS EN QUALITÉ » qui grandit jusqu'à devenir le rouge.
         S3 declic      11,55-15,3 2018 -> 2019 ; RECONVERSION ; la ligne <h1> du site se tape ;
                                  « Titre pro Développeur web · La Manu » ; filé vers la gauche.
         S4 crm         15,0-28,25 Selligent CDM + tampon CERTIFIÉ + Scrum Master PSM I ;
                                  Data & ETL (Talend, DataStage, Pentaho -> CRM ; SQL) ;
                                  SALESFORCE et ses missions, une ligne à la fois ; 2026 ; le losange devient la couture.
         S5 pont        28,25-39,35 La moitié « usine » entre par la gauche ; 3 paires traversent la couture ;
                                  « Amélioration continue » la traverse sans changer ; la couture redevient losange ;
                                  « La rigueur, elle, n'a pas changé. »
         S6 contact     39,35-45,65 Le losange devient la carte rouge ; portrait ; nom, rôle, in/wilfriedlangry,
                                  zone ; bouton « ME CONTACTER » qui se remplit ; tenue finale 3 s.

BANNED:  Les défauts de spec.md, plus pour ce film : logos de marques tierces (Salesforce, Selligent...) ;
         chiffre ou affirmation absents du profil ou du site ; tableau de bord ou capture inventés ;
         pastilles arrondies (tout est losange ou rectangle droit) ; ombres portées ;
         texte à lire sous 32 px ; même entrée deux plans de suite.

QA:      0,0 vignette (visage + nom) ; 2,2 accroche lisible ; 3,9 iris ; 6,8 tampons ; 9,8 « 10+ ANS » ;
         11,8 monde rouge ; 13,8 code tapé ; 15,15 filé ; 16,9 Selligent ; 20,5 data ; 24,3 Salesforce ;
         29,5 / 32,1 / 34,8 paires ; 38,5 phrase finale ; 41,5 carte ; 45,5 dernière image.
```
