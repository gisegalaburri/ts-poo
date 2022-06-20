export class MyDate {

  // shorthand for the constructor and the attrs, definition and assignment
  // declare the access modifier is a must to the constructor understand that are attrs of the class
  constructor(
    public year: number = 1993, // default value
    public month: number = 7,
    private _day: number = 9
    ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    } else if (type === 'months') {
      this.month += amount;
    } else if (type === 'years') {
      this.year += amount;
    }
  }

  // to let know this is a getter, we can use underscore _ before the name of the attr
  // to avoid confussions with the private attr
  get day() {
    // I can add all the validations I want or need
    return this._day;
  }

  // this is not an attr but with `get` I can access to this info from outside the class
  // it looks like a property or attr
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  // getters always return a value,they cant be void
  get myReturn(): boolean {
    return true;
  }

}

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.printFormat());
