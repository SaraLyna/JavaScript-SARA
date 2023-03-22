'use strict';

// une liste pour des tests
const numbers = [2, 3, 5, 4, 10, 6];

/********** EXERCICE 0 ***********************/
console.log(` *** EXERCICE 0 *** `);
/* computes the double of its parameter
 * @param x (number) a number
 * @return (number) the double of *x*
*/
const example = x => x * 2;
// tests
console.log(`example(10) : ${example(10)}`);
console.log(`example(21) : ${example(21)}`);



/* filter and keep the elements of *list* smaller than *max*
 * @param list (Array) list of elements
 * @param max (Any) upper bound filter value
 * @return (Array) list of elements of *list* smaller than *max*
*/
const example2 = (list, max) => list.filter( elt => elt < max );
// tests
console.log(`example2(numbers, 5) : ${example2(numbers, 5)}`);

/*********************************************/

/********** EXERCICE 1 ***********************/
console.log(` *** EXERCICE 1 *** `);
const persons = [ {name : 'timoleon', age : 12 }, {name : 'bilbo', age : 111 }, {name : 'frodo', age : 33 }];

/*********************************************/
/* Question 1: */
numbers.forEach(elt => console.log(elt));

/* Question 2: */
const deux= persons[1].name;
console.log(deux);

/* Question 3: */
persons.forEach(personne =>console.log(`${personne.name} a ${personne.age} ans `));
const s= v => console.log(`${v.name} a ${v.age} ans`);

/* Question 4: */
const myForEach= (liste,callback) => {
  for(let i in liste){
    callback(liste[i],i)
  }
};
/* Question 5: */
const personne=(personne =>console.log(`${personne.name} a ${personne.age} ans `));
const nombre= (elt => console.log(elt));
myForEach(numbers,nombre);
myForEach(persons, personne);


/********** EXERCICE 2 ***********************/
console.log(` *** EXERCICE 2 *** `);


/*********************************************/
/* Question 1: */
console.log(numbers.map(elt => elt* 10));

/* Question 2: */
const multiples=(n,l) => {
  return l.map(val => n*val );
}
console.log(multiples(6,numbers));
/* Question 3: */
const multiples5=(l)=> multiples(5,l);
/*const multiples5=(l)=> {
  return multiple(5,l);
}*/
console.log(multiples5(numbers));


/* Question 4: */
let multiplesFactory= factor => l => multiples(factor, l);
console.log(multiplesFactory(3)(numbers));

const multiples100 = multiplesFactory(100);
console.log(typeof(multiples100));
console.log(multiples100(numbers));

/********** EXERCICE 3 ***********************/
console.log(` *** EXERCICE 3 *** `);


/*********************************************/
/* Question 1: */
let capitalize=a => {
  const b=a[0].toUpperCase();
  const c=a.substring(1);
  return `${b}${c}`;
}
console.log(capitalize('timoleon'));
console.log(capitalize('sara'));

/* Question 2: */
console.log(persons.map( obj =>capitalize(obj.name) ));

/* Question 3: */
const myMap=(liste,callback) => {
  const res=[];
  for(let i in liste){
    res.push(callback(liste[i],i,liste))
  }
  return res;
}

/* Question 4: */
console.log(myMap(persons,obj =>capitalize(obj.name)));

/* Question 5: */
function myMap2(liste,callback){
  const res=[];
  liste.forEach((item, i) =>res.push(callback(item,i,liste)));
  return res;
}

/* Question 6: */
console.log(myMap2(persons,obj =>capitalize(obj.name)));


/********** EXERCICE 4 ***********************/
console.log(` *** EXERCICE 4 *** `);


/*********************************************/
/* Question 1: */
const inferieurs5 = numbers.filter( elt => elt < 5 );
console.log(inferieurs5);
/* Question 2: */
/* Question 3: */

/********** EXERCICE 5 ***********************/
console.log(` *** EXERCICE 5 *** `);


/*********************************************/

/********** EXERCICE 6 ***********************/
console.log(` *** EXERCICE 6 *** `);

const lesInvites = ['Tim Oleon', 'Timo Leon', 'Bilbo', 'Frodo', 'Sam', 'Merry', 'Pippin']
const lesReponses = [
                  {nom : 'Sam', present : 'oui'},
                  {nom : 'Tim Oleon', present : 'non'},
                  {nom : 'Bilbo', present : 'oui'},
                  {nom : 'Frodo', present : 'oui'},
                  {nom : 'Timo Leon', present : 'non'},
                 ];

/*********************************************/

/********** EXERCICE 7 ***********************/
console.log(` *** EXERCICE 7 *** `);

/*********************************************/

/********** EXERCICE 8 ***********************/
console.log(` *** EXERCICE 8 *** `);



/*********************************************/
