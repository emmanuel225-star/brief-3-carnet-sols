# Journal de recherche

> Chaque recherche utile : ce que vous cherchiez, ( [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript), [Node.js](https://nodejs.org/api/), un camarade, une IA…), ce que vous avez compris. Ce que vous gardez, vous devez pouvoir l'expliquer.



| Ce que je cherchais | Où | Ce que j'ai compris | Utilisé dans |
| --- | --- | --- | --- |
| Lire un fichier avec `readFile` et attendre le résultat |  Node.js (`fs/promises`)  | `readFile` renvoie une promesse : il faut `await` devant, dans une fonction `async`. Le résultat est un texte. | `chargerJson` |
| Transformer un texte JSON en tableau, et un tableau en texte JSON indenté |  MDN (`JSON.parse`, `JSON.stringify`) | `JSON.parse(texte)` donne le tableau ; `JSON.stringify(tableau, null, 2)` donne le texte indenté de 2 espaces. | `chargerJson`, `enregistrerJson` |
| Trouver un élément d'un tableau qui répond à une condition | MDN (`Array.prototype.find`) | `find` s'arrête au premier élément qui convient et renvoie `undefined` s'il n'y en a pas. | `trouverParId` |
| Savoir si une valeur fait partie d'une liste, ou si un élément répond à une condition |  MDN (`includes`, `some`) | `includes` teste une valeur dans une liste (`TEXTURES`, `HUMIDITES`) ; `some` teste une condition (identifiant déjà utilisé). | `verifierObservation` |
| Convertir un pH tapé avec une virgule en nombre ; que vaut `Number('')` ? |  `src/outils.js`, MDN (`Number`) | `Number('')` vaut `0` (piège : un pH vide ne doit pas être accepté) ; `Number('5,8')` vaut `NaN`, d'où le `replace(',', '.')`. | `verifierObservation`, `creerObservation` |
| Rassembler les éléments d'un tableau en un seul texte |  MDN (`map`, `join`) | `map` transforme chaque observation en ligne ; `join('\n')` les assemble avec un retour à la ligne, sans retour après la dernière. | `listerObservations` |
| Garder certains éléments dans un nouveau tableau |  MDN (`Array.prototype.filter`) | `filter` renvoie un **nouveau** tableau, éventuellement vide, sans modifier l'original. | `filtrerParParcelle`, `filtrerParTexture` |
| Trier par un nombre sans modifier le carnet |  MDN (`sort`, comparateur, copie avec `[...]`) | `sort` sans comparateur trie en texte ; avec `(a, b) => a.pH - b.pH` il trie en nombres. `sort` modifie le tableau : on trie une copie. | `trierParPh` |
| Parcourir les clés et les valeurs d'un objet ; écrire une propriété dont le nom est dans une variable |  MDN (`Object.entries`, notation `objet[cle]`) | `Object.entries(objet)` donne des paires `[clé, valeur]` ; une clé absente vaut `undefined`. | `compterParTexture`, synthèse du menu |
| Retirer un élément d'un tableau à une position donnée |  MDN (`findIndex`, `splice`) | `findIndex` donne la position (ou `-1`) ; `splice(position, 1)` retire l'élément et le renvoie dans un tableau. | `supprimerObservation` (bonus) |
| Changer la casse d'un texte |  MDN (`toUpperCase`, `toLowerCase`) | Point et parcelle en majuscules, texture et humidité en minuscules, avant de vérifier. | menu (`app.js`) |
| Écrire le menu : boucle, aiguillage, gestion des erreurs |MDN (`switch`, `while`, `try/catch`)  | `while` répète le menu ; `switch` choisit l'action ; `try/catch` empêche une erreur d'arrêter le programme. **`app.js` a été écrit avec l'aide de Claude : je dois pouvoir l'expliquer ligne par ligne.** | `app.js` |
