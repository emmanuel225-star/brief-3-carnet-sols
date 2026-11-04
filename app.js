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


