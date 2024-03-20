const numbers = [1, 2, 3, 4, 5];

/** map: Transforms array elements with a provided callback, creating a new array */

const doubledNumbers = numbers.map((num) => num * 2);

/**
 * filter: Creates a new array elements that satisfy a specified condition.
 */

const evenNumbers = numbers.filter((num) => num % 2 === 0);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const numbersSum = numbers.reduce((acc, currNum) => acc + currNum, 0);

/**
 * find: Returns the first array element that satisfies a specified condition.
 */

const foundNum = numbers.find((num) => num > 2);

/**
 * some: Checks if at least one array element satisfies a condition. Boolean
 */

const someNum = numbers.some((num) => num > 2);

/**
 * every: Checks if all array elements satisfies a condition.
 */
const everyNum = numbers.every((num) => num % 2 === 0);
