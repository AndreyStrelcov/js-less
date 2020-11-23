"use strict";

if (4==4) {
    console.log('Ok!');
} else {
    console.log('Error');
}

let num = 50;

(num==50) ? console.log('Ok') : console.log('Error');

switch (num) {
    case 49:
        console.log('No');
        break;
    case 50:
        console.log('Ok');
        break;
    default:
        console.log('Fack');
        break;        
}