import { Animal, Dog} from './09-protected';

// now Animal is abstract an new Animal classes can't be instanciated
// equal to Java xD
// const animal = new Animal('Elite');
// animal.greeting();

const dog = new Dog('Fer Chiquito', 'Agustin');
dog.greeting();
dog.woof(2);
