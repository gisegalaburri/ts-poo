// by default everything is public, both attrs and methods has this modifier
// encapsulation
export class MyDate {
  year: number;
  month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    } else if (type === 'months') {
      this.month += amount;
    } else if (type === 'years') {
      this.year += amount;
    }
  }

  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.printFormat());
// this is the only way to modify the private attr: day
myDate.add(12, 'days');
console.log(myDate.printFormat());
console.log(myDate.getDay());