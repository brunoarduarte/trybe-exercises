const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
	const allInOne = arrays.reduce((acc, number) => acc.concat(number), []);
	return allInOne;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);