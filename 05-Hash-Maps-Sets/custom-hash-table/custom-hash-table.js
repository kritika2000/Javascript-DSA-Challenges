/*class HashTable {
  constructor(limit = 14) {
    this.storage = {};
    this.limit = limit;
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.limit;
  }
  set(key, value) {
    const hashCode = this._hash(key);
    if (Object.keys(this.storage).length >= this.limit) {
      return 'limit has exceeded!';
    }
    this.storage[hashCode] =
      this.storage[hashCode] &&
      this.storage[hashCode].filter(({ key: k }) => key !== k);

    this.storage[hashCode] = !this.storage[hashCode]
      ? [{ key, value }]
      : [...this.storage[hashCode], { key, value }];
  }
  get(key) {
    const hashCode = this._hash(key);
    return this.storage[hashCode].filter(({ key: k }) => k === key)[0]?.value;
  }
  has(key) {
    const hashCode = this._hash(key);
    return this.storage[hashCode] !== undefined;
  }
  remove(key) {
    const hashCode = this._hash(key);
    if (!this.has(key)) return "key doesn't exist";
    this.storage[hashCode] = this.storage[hashCode].filter(
      ({ key: k }) => key !== k
    );
    if (this.storage[hashCode].length === 0) delete this.storage[hashCode];
  }
  clear() {
    this.storage = {};
  }
  size() {
    return Object.keys(this.storage).length;
  }
  getValues() {
    let res = [];
    for (let key in this.storage) {
      res = [...res, ...this.storage[key].map(({ value }) => value)];
    }
    return res;
  }
  printTable() {
    console.log(this.storage);
  }
}
*/
class HashTable {
  constructor(limit) {
    this.map = {};
    this.limit = limit;
  }
  _hash(key) {
    const hashCode = key
      .split('')
      .reduce((acc, curr) => acc + curr.charCodeAt(0));
    return hashCode % this.limit;
  }
  set(key, value) {
    const hashCode = this._hash(key);
    const pairs = this.map[hashCode];
    if (!pairs) {
      this.map[hashCode] = [{ key, value }];
      return;
    }
    if (this.has(key)) {
      this.map[hashCode] = pairs.map((pair) =>
        pair.key === key ? { key, value } : pair
      );
      return;
    }
    this.map[hashCode] = [...pairs, { key, value }];
  }
  get(key) {
    const hashCode = this._hash(key);
    const pairs = this.map[hashCode];
    if (!pairs) {
      return 'Key does not exist!';
    }
    return (
      pairs.find((pair) => pair.key === key)?.value || 'Key does not exist!'
    );
  }
  remove(key) {
    const hashCode = this._hash(key);
    const pairs = this.map[hashCode];
    if (!pairs) {
      return 'Key does not exist!';
    }
    this.map[hashCode] = pairs.filter((pair) => pair.key !== key);
  }
  size() {
    return Object.keys(this.map).length;
  }
  clear() {
    this.map = {};
  }
  has(key) {
    const hashCode = this._hash(key);
    const pairs = this.map[hashCode];
    if (!pairs) {
      return false;
    }
    return pairs.find((pair) => pair.key === key) ? true : false;
  }
  getValues() {
    const values = Object.values(this.map);
    let result = [];
    values.forEach((value) => {
      result = [...result, ...value.map((pair) => pair.value)];
    });
    return result;
  }
  printTable() {
    for (let [key, value] of Object.entries(this.map)) {
      console.log(key, value);
    }
  }
}

const hashTable = new HashTable(15);
hashTable.set('hello', 'kritika');
hashTable.set('hello', 'aman');
hashTable.set('olleh', 'kritika');
hashTable.set('pqrs', 'hello world');
hashTable.printTable();
console.log(hashTable.get('hello'), hashTable.get('abcd'));
console.log(hashTable.has('hello'), hashTable.get('abcd'));
hashTable.remove('pqrs');
hashTable.remove('hello');
console.log(hashTable.getValues());
hashTable.printTable();

module.exports = HashTable;
