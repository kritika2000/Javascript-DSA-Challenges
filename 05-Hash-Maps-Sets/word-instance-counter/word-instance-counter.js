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
  printTable() {
    console.log(this.storage);
  }
}

function wordFrequencyCounter(str, word) {
  const map = new HashTable();
  let words = str
    .toLowerCase()
    .replace(/[^\w\s\']|_/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter((word) => word.length > 0);
  words.forEach((word) => {
    map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1);
  });
  return map.get(word);
}

module.exports = wordFrequencyCounter;
