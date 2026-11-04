// Carnet d'observation des sols — point d'entrée : le menu.
// Comportement et textes imposés : fiches/3-ajouter-lister.md (+ fiches 4 et 5 pour les choix 3, 4, 5).
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { HUMIDITES, TEXTURES, ajouterObservation, formaterObservation, listerObservations, trouverParId } from './src/registre.js';
import { filtrerParParcelle, filtrerParTexture, trierParPh } from './src/recherche.js';
import { SEUIL_PH_A_DISCUTER, compterParTexture, phMinMax, pointsADiscuter } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/observations.json';


//  ====== Pour Les différents affichages ====== 

function afficherAccueil(){
  console.log('===================');
  console.log('Ferme Connectée');
  console.log('===================');
}

function afficherLeMenu(){
console.log('');
  console.log('----------- MENU ------------');
  console.log('1. Ajouter une observation');
  console.log('2. Lister les observations');
  console.log('3. Rechercher (point, parcelle, texture)');
  console.log('4. Trier par pH');
  console.log('5. Synthèse des observations');
  console.log('0. Quitter');
}

// Pour le Premier choix : poser les questions, vérifier, ajouter , enregister .

async function ajouter(observations) {
console.log('Vous ajouter une observation');

 const id = await demander('Point observé (ex. S11) : ');
  if (id === null) return;
  const parcelle = await demander('Parcelle (ex. P1) : ');
  if (parcelle === null) return;
  const texture = await demander(`Texture (${TEXTURES.join(', ')}) : `);
  if (texture === null) return;
  const pH = await demander('pH (nombre de 0 à 14, sans unité, virgule acceptée) : ');
  if (pH === null) return;
  const etatHumidite = await demander(`État d'humidité (${HUMIDITES.join(', ')}) : `);
  if (etatHumidite === null) return;

// Ecriture d'une fonction qui permettra de normaliser le style d'écriture

const saisie = {
    id: id.toUpperCase(),
    parcelle: parcelle.toUpperCase(),
    texture: texture.toLowerCase(),
    pH,
    etatHumidite: etatHumidite.toLowerCase(),
  };

  const erreurs = ajouterObservation(observations, saisie);
  if (erreurs.length > 0) {
    console.log('Observation refusée :');
    for (const erreur of erreurs) {
      console.log(`  - ${erreur}`);
    }
    console.log(`Le carnet compte toujours ${observations.length} observation(s).`);
    return;
  }

  await enregistrerJson(FICHIER_DONNEES, observations);
  console.log(`Observation ${saisie.id} ajoutée. Le carnet compte ${observations.length} observation(s).`);
}

// Pour le deuxième choix que l'utilisateur fera 

function lister(observations) {
  console.log(`--- Liste des observations (${observations.length}) ---`);
  console.log(listerObservations(observations));
}  




