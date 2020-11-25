"use strict";

let options = {
    name: 'test',
    width: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("i'm method");
    }
};

const {border, bg} = options.color;
console.log(border);

// delete options.name;

// for (let key in options) {
//     if (typeof(options[key] === 'object')) {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

options.makeTest();

