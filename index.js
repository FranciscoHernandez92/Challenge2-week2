import {
  calculateToUpperCase,
  calculateLength,
  calculateToLowerCase,
  calculateCharAt,
  calculateIncludes,
  calculateStartWith,
} from 'string.js';

console.log(calculateToUpperCase('palabra'));
console.log(
  calculateToUpperCase('no se puede dividir cero caramelos entre tres amigos')
);
console.log(calculateLength('palabra'));
console.log(calculateToLowerCase('ODIO A LOS PERROS DE RAZA HUSKY'));
console.log(calculateCharAt('calculadora', 1));
console.log(calculateCharAt('calculadora', 7));
console.log(calculateIncludes('caramelo', 'c'));
console.log(calculateIncludes('bootcamp', 'm'));
console.log(calculateIncludes('pizza', 'y'));
console.log(calculateStartWith('bienvenido', 'b'));
console.log(calculateStartWith('canarias', 'b'));
