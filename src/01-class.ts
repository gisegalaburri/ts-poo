const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(1993, 1, 12); // 0 enero, 11 diciembre (igual que java)
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date);
console.log(date2);

// Todo se ejecuta con ts-node comando:
// base: npx ts-node <folder/file.ts>
// ejemplo: ts-node src/01-class.ts

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  // getDate(): string {
  //   return `${this.day}/${this.month}/${this.year}`;
  // }
}

// class instance
const myDate = new MyDate(2021, 3, 13);
console.log(myDate);
