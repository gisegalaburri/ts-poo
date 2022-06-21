console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(1, 2, 3, 4, 5, 8, 4));

class MyMath {
  // constants are declared with static keyword, similar to Java
  // readonly avoids to override the value
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max : item);
  }
}

console.log('MyMath.PI ', MyMath.PI);
// MyMath.PI = 3; with `readonly` modifier, assignment is not allowed

// left zeros are not allowed in numbers
console.log('MyMath.max ', MyMath.max(1, 2, 3, 4, 5, 18888, 4));

const numbers = [1, 2, 3, 4, 5, 18888, 400000];
console.log('MyMath.max ', MyMath.max(...numbers));

console.log('MyMath.max ', MyMath.max(-1, -9, -8));
