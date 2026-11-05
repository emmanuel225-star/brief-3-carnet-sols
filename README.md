# Carnet d'observation des sols

> Projet individuel du SAS DFS, brief 3 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

Le carnet de sols est utilisé par un technicien de terrain qui visite des parcelles et y prend des mesures. Il n’est pas agronome : il enregistre ce qu’il observe, et c’est l’agronome qui interprète ses relevés. Aujourd’hui, ces mesures sont dispersées sur papier ou dans des fichiers séparés, ce qui rend difficile de retrouver l’historique d’une parcelle ou de repérer une valeur inhabituelle. Pour chaque visite, il saisit la parcelle, la date, les valeurs mesurées (par exemple pH, humidité, température du sol) et une note libre. Il veut ensuite voir l’historique de chaque parcelle, sa dernière mesure et les valeurs à discuter avec l’agronome.

Le carnet sépare deux choses. Un constat est ce qu’on observe ou mesure, sans l’interpréter (« le pH de P1 est de 5,2 le 12 mars »). Une hypothèse est une explication possible, à vérifier avec l’agronome (« le sol est peut-être trop acide à cause des engrais »). Le carnet n’enregistre que des constats et repère des valeurs à discuter : il ne pose aucun diagnostic.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-3-carnet-sols.git
cd brief-3-carnet-sols
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [x] Données lues et enregistrées dans `donnees/observations.json`
- [x] Ajouter une observation, saisies invalides refusées sans arrêter le programme
- [x] Lister les observations, message si le carnet est vide
- [x] Rechercher par point ou par parcelle ; filtrer par texture
- [x] Trier par pH
- [x] Synthèse : pH minimum et maximum, nombre par texture, points à discuter (pH < 5,5)
- [x] Bonus : supprimer et modifier une observation (choix 6 et 7)
- [x] Bonus : tri par pH décroissant, texture la plus fréquente

## Données

Les observations sont dans `donnees/observations.json` : dix observations de départ (`S01` à `S10`), réparties sur cinq parcelles (`P1` à `P5`). Chaque observation a cinq champs : `id`, `parcelle`, `texture`, `pH` et `etatHumidite` (voir [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md)). Le pH est un nombre de 0 à 14, **sans unité**. Chaque ajout est enregistré dans ce fichier. **Les données sont fictives** : elles servent à l’exercice et ne décrivent aucune vraie parcelle.

## Limites

- Le carnet repère des valeurs à discuter (pH strictement inférieur à 5,5), mais ne produit **aucun diagnostic** de fertilisation et ne donne aucun conseil.
- Le seuil de 5,5 est un repère pédagogique, pas une norme agronomique. Les textures et les états d’humidité sont des classes d’exercice.
- Il n’y a **pas de moyenne de pH** : l’échelle du pH est logarithmique, une moyenne simple serait trompeuse.
- Une seule observation par point, sans date ni heure de relevé : on ne peut pas suivre l’évolution d’une parcelle dans le temps.
- Le carnet n’a pas de suppression ni de modification d’une observation (bonus non réalisé) : une erreur de saisie déjà enregistrée se corrige à la main dans le fichier JSON.
- Le fichier JSON est modifié directement : pas de sauvegarde automatique ni de gestion de plusieurs utilisateurs en même temps.

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

Touré Tioh lagnime Emmanuel , emmanuel225-Star 

Entraide : Koné Padjoufougou Abdoulaye , Kamagaté Salia Abdallah , Serifou Cheick Oumar , Koné Fatoumata
