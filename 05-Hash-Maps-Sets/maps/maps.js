const map = new Map([
  [1, 'John'],
  [2, 'Jack'],
  [3, 'Jill'],
]);
console.log(map); // Internally an object, but the key can be of any data type.

const map2 = new Map([
  ['name', 'John'],
  [1, 'number one'],
  [true, 'really true'],
  [null, 'this is null'],
  [() => {}, 'my function'],
]);

console.log(map2);

// Get Values
console.log(map.get(2));
console.log(map2.get(true));

// Set values
map.set(4, 'Joe');
console.log(map);

// Check Values
console.log(map.has(3), map.has(6));

// Removing values
map.delete(1);
console.log(map);

// Get Size
console.log(map.size); // number of key value pairs.

// Iterating over a map
for (let [key, value] of map) {
  console.log(key, value);
}

console.log(map.entries()); // Map Iterator

// Get Keys
console.log(map.keys(), map.values()); // Map Iterator

// clear map
map.clear();

console.log(map);
