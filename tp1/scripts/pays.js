const numberFormatter = new Intl.NumberFormat();

dataPays.forEach( pays => pays.toString = function() { return `${this.nom} : ${this.population} hab., ${this.superficie}km², ${this.PIB} milliardsUS$` } );
// l'effet de cette ligne : remplace la méthode toString() par une nouvelle fonction qui retourne une chaîne de caractères représentant les informations
//du pays sous la forme d'une phrase formatée.
for (let i = 0; i < 5; i++) {
  console.log(dataPays[i].toString());
}
/****  QUESTION 2 *****/
console.log(' *** QUESTION 2 ***');

const populationTotale = -1;

console.log(`population totale : ${numberFormatter.format(populationTotale)}`);
/***********************/
const populationCumulee = dataPays.reduce((acc, territoire) => acc + territoire.population, 0);

console.log(`La population cumulée de tous les territoires est : ` + populationCumulee);
/****  QUESTION 3 *****/
console.log(' *** QUESTION 3 ***');

/***********************/
let findData= nom => {
  return dataPays.find(pays => pays.nom === nom);
}
console.log(findData('France').toString());


/****  QUESTION 4 *****/
console.log(' *** QUESTION 4 ***');
const dixpluspeuples = [];

console.log(`10 plus peuplés : ${dixpluspeuples}`);
/***********************/
dataPays.sort((a, b) => b.population - a.population);
const plusPeuples = dataPays.slice(0, 10).map(pays => pays.nom);
dixpluspeuples.push(...plusPeuples);
console.log(dixpluspeuples);


/****  QUESTION 5 *****/
console.log(' *** QUESTION 5 ***');

/***********************/
const paysAvecDensite = dataPays.map(pays => {
  return {
    nom: pays.nom,
    densite: pays.population / pays.superficie
  };
});
paysAvecDensite.sort((a, b) => b.densite - a.densite);
const paysDensiteSup1000 = paysAvecDensite.filter(pays => pays.densite > 1000);
const listePaysDensiteSup1000 = paysDensiteSup1000.map(pays => `${pays.nom} : ${Math.round(pays.densite)} hab/km²`);

console.log(listePaysDensiteSup1000);


/****  QUESTION 6 *****/
console.log(' *** QUESTION 6 ***');


/***********************/
const populationPIBInf10000 = dataPays
  .filter(pays => {
    const pibParHabitant = pays.PIB * 1000000000 / pays.population;
    return pibParHabitant < 10000;
  })
  .reduce((totalPopulation, pays) => {
    return totalPopulation + pays.population;
  }, 0);

console.log(`Nombre d'habitants dans les territoires dont le PIB/hab est inférieur à 10000$ : ${populationPIBInf10000}`);
