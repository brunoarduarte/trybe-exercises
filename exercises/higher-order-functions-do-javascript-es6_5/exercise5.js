const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo
const swap = (array) => [array[0], array[1], array[2]] = [array[2], array[1], array[0]];
const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);