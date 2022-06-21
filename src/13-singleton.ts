// singleton: avoids to create multiple instances of the same object
export class MyService {

  static instance: MyService | null = null;

  private constructor(private name: string) {}
  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('call once')
      MyService.instance = new MyService(name);
    }

    return MyService.instance;
  }
}

const myService1 = MyService.create('Service 1');
console.log(myService1.getName());

const myService2 = MyService.create('Service 2'); // here returns the same instance of 'Service 1'
console.log(myService2.getName());

const myService3 = MyService.create('Service 3'); // here returns the same instance of 'Service 1'
console.log(myService3.getName());

console.log(myService1 === myService2)
