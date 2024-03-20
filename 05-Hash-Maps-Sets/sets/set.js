const set = new Set(['John', 'Jane', 'Joe', 'John']);

// Add values
set.add('Jill');
set.add('Jack');

// Check for values
console.log(set.has('Jill'));

// Get Values
console.log(set.values());

// Convert to array
console.log([...set], Array.from(set));

// size/clear set
console.log(set.size);
set.clear();

console.log(set); // set has unique values.
