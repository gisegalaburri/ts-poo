export abstract class Animal {
  constructor(protected name: string) {}

  move(){
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('doing...!');
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
      console.log(`Woof! ${this.name}`);
    }

    this.doSomething();
  }

  move() {
    console.log('Moving as a dog..')
    super.move();
  }
}


const myDog = new Dog('Chiquito', 'Agustin');
myDog.woof(1);
// myDog.name = 'Lolapolola'
// myDog.doSomething(); // this doesn't work cause protected rules
myDog.move();
