export class Animal {
  constructor(public name: string) {}

  move(){
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

// similar to Java
export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string,
  ) {
    super(name);
  }
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('Woof!');
    }
  }
}

const myAnimal = new Animal('Fifi');
myAnimal.move();
console.log(myAnimal.greeting());

const myDog = new Dog('Chiquito', 'Agustin');
myDog.move();
console.log(myDog.greeting());
myDog.woof(3);
console.log(myDog.owner)