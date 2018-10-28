const assert = require('assert');
const sumOfOther = require('../src/sumOfOther');
const make = require('../src/make.js');

describe('sumOfOther', () => {
	it('1', () => {
	  assert.equal(sumOfOther([2,3,4,1]).toString(), [8,7,6,9].toString());
	});

	it('2', () => {
	  assert.equal(sumOfOther([21,13]).toString(), [13,21].toString());
	});

	it('3', () => {
	  assert.equal(sumOfOther([1,2,3,4,5,6,7,8,9]).toString(), [44,43,42,41,40,39,38,37,36].toString());
	});

	it('4', () => {
	  assert.equal(sumOfOther([0,2,4,0,0,0]).toString(), [6,4,2,6,6,6].toString());
	});

	it('5', () => {
	  assert.equal(sumOfOther([0]).toString(), [0].toString());
	});

	it('6', () => {
	  assert.equal(sumOfOther([132,23,454,0]).toString(), [477,586,155,609].toString());
	});

	it('7', () => {
	  assert.equal(sumOfOther([1,0,1,0,1,0]).toString(), [2,3,2,3,2,3].toString());
	});

	it('8', () => {
	  assert.equal(sumOfOther([9,1,1]).toString(), [2,10,10].toString());
	});

	it('9', () => {
	  assert.equal(sumOfOther([3,7,5,2,9]).toString(), [23,19,21,24,17].toString());
	});

	it('10', () => {
	  assert.equal(sumOfOther([100000000]).toString(), [0].toString());
	});

});


describe('make', () => {
  it('0', () => {
    const sum = (a, b) => a + b;
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.equal(result, 777);
  });

  it('1', () => {
    const sum = (a, b) => a + b;
    const result = make(1, 2, 3)(4, 5)(6)(7)(sum);
    assert.equal(result, 28);
  });

  it('2', () => {
    const sum = (a, b) => a - b;
    const result = make(100)(20)(30)(50)(sum);
    assert.equal(result, 0);
  });

  it('3', () => {
    const sum = (a, b) => a * b;
    const result = make(1)(2)(5, 5)(50, 2, 2)(sum);
    assert.equal(result, 10000);
  });

  it('4', () => {
    const sum = (a, b) => a ** b;
    const result = make(2, 5, 100)(0)(sum);
    assert.equal(result, 1);
  });
});