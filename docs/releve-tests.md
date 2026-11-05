# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme.

| Calcul | Fait à la main (sur `donnees/observations.json`) | Programme (choix 5) | Écart |
| --- | --- | --- | --- |
| pH minimum | 4,8 (S04) | 4.8 | aucun |
| pH maximum | 7,6 (S08) | 7.6 | aucun |
| Nombre par texture | sableux : S01, S04, S08 = 3 ; limoneux : S02, S05, S07, S10 = 4 ; argileux : S03, S06, S09 = 3 | sableux 3, limoneux 4, argileux 3 | aucun |
| Points à discuter (pH < 5,5) | S01 (5,2), S04 (4,8), S06 (5,4), S09 (5,1) = 4 ; S06 à 5,4 est retenu, aucun point n'a exactement 5,5 | S01, S04, S06, S09 | aucun |
| Premier du tri par pH | S04 (4,8) | S04 | aucun |

**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

> Les lignes ci-dessous ont été jouées automatiquement (Claude, en envoyant les saisies au programme). **Elles ne remplacent pas le test par un camarade** (fiche 6) : ajoutez ses lignes et son nom dans la colonne « Testeur ».

| Action | Attendu | Obtenu | Testeur |
| --- | --- | --- | --- |
| Ajouter `s11`, `p6`, `Limoneux`, `5,8`, `Humide` | `Observation S11 ajoutée. Le carnet compte 11 observation(s).` | idem | Essai automatisé |
| Quitter puis relancer après cet ajout | `11 observation(s) chargée(s)…` | l'observation est toujours là (le fichier contient 11 points) | Essai automatisé |
| pH `0` | accepté | accepté | Essai automatisé |
| pH `14` | accepté | accepté | Essai automatisé |
| pH `14,1` | refusé | refusé : message sur le pH, carnet inchangé | Essai automatisé |
| pH `-1` | refusé | refusé | Essai automatisé |
| pH vide | refusé | refusé | Essai automatisé |
| État d'humidité `mouillé` (hors liste) | refusé | refusé | Essai automatisé |
| Point déjà utilisé, saisi en minuscules (`s01`) | refusé (doublon) | refusé : `id existe déjà` | Essai automatisé |
| Trois erreurs à la fois (parcelle vide, texture `boue`, pH `abc`) | une ligne par erreur | quatre lignes (avec le doublon `s01`), carnet inchangé | Essai automatisé |
| pH `5,5` puis synthèse | le point n'est pas dans les points à discuter | absent de la liste ; il y a toujours 4 points | Essai automatisé |
| Recherche par point `s04` | `S04 \| P2 \| sableux \| pH 4.8 \| sec` | idem | Essai automatisé |
| Recherche par point `s99` | `Observation S99 introuvable.` | idem | Essai automatisé |
| Recherche par parcelle `p3` | `2 observation(s) sur la parcelle P3 :` | idem | Essai automatisé |
| Recherche par texture `argileux` | `3 observation(s) de texture argileux :` | idem | Essai automatisé |
| Sous-choix inconnu dans Rechercher ou Trier | `Choix inconnu : retour au menu.` | idem | Essai automatisé |
| Trier par pH croissant | commence par S04 (4,8) | commence par S04 | Essai automatisé |
| Lister (choix 2) après un tri | ordre d'origine (S01, S02, …) | ordre d'origine | Essai automatisé |
| Synthèse (choix 5) | 10 observations, pH 4,8 à 7,6, 3/4/3, 4 points à discuter | idem | Essai automatisé |
| Choix `9` ou Entrée sans rien taper | `Choix inconnu : « … ». Tapez un chiffre du menu.` puis le menu | idem | Essai automatisé |
| `npm test` | tous les tests du socle verts | 36 verts ; les 3 rouges sont ceux du bonus ( `trierParPhDecroissant`, `textureLaPlusFrequente`) | Essai automatisé |

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) 
