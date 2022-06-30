import { Dog } from './09-protected'
// bad: this is not maintainable
// function getValue(value: number | string)  {
//   return value;
// }

// function getValue(value: unknown)  {
//   return value;
// }

function getValue<T>(value: T)  {
  return value;
}

const number = getValue<number>(1).toFixed();

const string = getValue<string>('1').toLowerCase();

const array = getValue<number[]>([1,2,3]).forEach;

const myDog = new Dog('Chiquito', 'Agustin');
const getDogValue = getValue<Dog>(myDog).greeting();