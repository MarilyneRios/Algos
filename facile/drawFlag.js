let myString = "Javascript";

function drawFlag(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i];
        console.log(result);
    }
    for (let j = 0; j < str.length; j++) {
        result = result.slice(0, -1);
        console.log(result);
    }
}

drawFlag(myString);

/* result: 
j
ja
jav
java
javas
Javasc
Javascr
Javascri
Javascrip
Javascript
Javascrip
Javascri
Javascr
Javasc
Javas
java
jav
ja
j
*/

/* for of */

function drawFlag2(str) {
    let result = '';
    for (let char of str) {
        result += char;
        console.log(result);
    }
    for (let i = 0; i < str.length; i++) {
        result = result.slice(0, -1);
        console.log(result);
    }
}

drawFlag(myString);

/* for in */

function drawFlag3(str) {
    let result = '';
    for (let index in str) {
        result += str[index];
        console.log(result);
    }
    for (let index in str) {
        result = result.slice(0, -1);
        console.log(result);
    }
}

drawFlag(myString);
 /*
  for...in est généralement utilisé pour parcourir 
  les propriétés énumérables d’un objet. 
  Pour les chaînes de caractères et les tableaux, 
  il est généralement préférable d’utiliser for...of 
  ou une boucle for traditionnelle 
  pour éviter des comportements inattendus.*/