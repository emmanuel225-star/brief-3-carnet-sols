# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | texte | non vide, absent des données | — | `S04` |
| `parcelle` | Parcelle où se trouve le point observé | texte | obligatoire : n'importe quel texte non vide | — | `P2` |
| `texture` | Classe de texture du sol (classe d'exercice) | texte | présente dans la liste `sableux`, `limoneux`, `argileux` | — | `sableux` |
| `pH` | Acidité du sol mesurée au point | nombre | nombre de 0 à 14, bornes comprises ; virgule acceptée à la saisie ; vide, texte ou valeur hors de 0 à 14 refusés | aucune (le pH est sans unité) | `4.8` |
| `etatHumidite` | Humidité du sol au moment du relevé (classe d'exercice) | texte | présent dans la liste `sec`, `intermédiaire`, `humide` | — | `sec` |

**Listes de valeurs autorisées** :  `texture` ∈ { `sableux`, `limoneux`, `argileux` } ; `etatHumidite` ∈ { `sec`, `intermédiaire`, `humide` }. Le point (`id`) et la parcelle sont saisis en majuscules, la texture et l'état d'humidité en minuscules (le programme convertit la casse avant de vérifier).

**Sources** : **Sources** : `SUJET.md` (section « Les données »), `donnees/observations.json` (dix observations fictives), fiche de terrain remise par le coach agronomie.
