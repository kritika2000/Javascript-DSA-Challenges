class HashTable {
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

function anagramGrouping(arrStr) {
  const sortedStrs = arrStr.map((str) => str.split('').sort().join(''));
  const map = new HashTable();
  sortedStrs.forEach((word, index) => {
    map.has(word) && map.get(word)
      ? map.set(word, [...map.get(word), arrStr[index]])
      : map.set(word, [arrStr[index]]);
  });
  map.printTable();
  return map.getValues();
}

anagramGrouping(['listen', 'silent', 'enlist', 'hello', 'world']);

module.exports = anagramGrouping;
