/*

var assert = buster.assert;
var expect = buster.expect;


buster.spec.expose(); // Make some functions global

describe("A module", function () {
    it("states the obvious", function () {
        expect(true).toEqual(true);
    });
});

buster.testCase("aName", {
	"a String here": function() {
		assert.equals(2 + 5, 7);
	}
});

describe("aName2", function () {
	it("knows to much", function () {
		expect(2+3).toEqual(5);
	});
});


buster.testCase("testFunction", {
	"Should be 2": function() {
		assert.equals(testFunction(), 2);
	}
});

*/
/*
var assert = require('assert');
var source = require('C:/Users/sam/Desktop/ICS414-Pomodoro-master/src/testMe');
/*
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});


describe('testFunction', function() {
  describe('equalstwo', function() {
    it('should return 2', function() {
      assert.equal(2, source.testFunction());
    });
  });
});
*/

describe('testingStartTimerConditionals', function() {
	describe('location after conditionals', function() {
		it('should return 0', function() {
			assert.equal(0, source.startTimerConditionals(0,-1,0,0));
		});
		it('should return 1', function() {
			assert.equal(1, source.startTimerConditionals(-1,1,0,1));
		});
		it('should return 2', function() {
			assert.equal(2, source.startTimerConditionals(-1,0,0,0));
		});
		it('should return 2', function() {
			assert.equal(2, source.startTimerConditionals(-1,0,1,0));
		});
		it('should return 3', function() {
			assert.equal(3, source.startTimerConditionals(-1,0,0,1));
		});
	});
});


describe('testingOnloadFunctionONEConditionals', function() {
	describe('visited locations after conditionals', function() {
		it('should return [0,0,0,0]', function() {
			assert.deepEqual([0,0,0,0], source.onloadFunctionONEConditionals(null,null,0,0));
		});
		it('should return [1,0,0,0]', function() {
			assert.deepEqual([1,0,0,0], source.onloadFunctionONEConditionals(0,null,0,0));
		});
		it('should return [1,1,0,0]', function() {
			assert.deepEqual([1,1,0,0], source.onloadFunctionONEConditionals(0,0,0,0));
		});
		it('should return [0,1,0,0]', function() {
			assert.deepEqual([0,1,0,0], source.onloadFunctionONEConditionals(null,0,0,0));
		});
		it('should return [1,1,1,0]', function() {
			assert.deepEqual([1,1,1,0], source.onloadFunctionONEConditionals(0,0,null,0));
		});
		it('should return [0,1,1,0]', function() {
			assert.deepEqual([0,1,1,0], source.onloadFunctionONEConditionals(null,0,null,0));
		});
		it('should return [1,1,1,1]', function() {
			assert.deepEqual([1,1,1,1], source.onloadFunctionONEConditionals(0,0,null,null));
		});
		it('should return [0,1,1,1]', function() {
			assert.deepEqual([0,1,1,1], source.onloadFunctionONEConditionals(null,0,null,null));
		});
		it('should return [1,1,0,1]', function() {
			assert.deepEqual([1,1,0,1], source.onloadFunctionONEConditionals(0,0,0,null));
		});
		it('should return [0,1,0,1]', function() {
			assert.deepEqual([0,1,0,1], source.onloadFunctionONEConditionals(null,0,0,null));
		});
	});
});


describe('testingOnloadFunctionOTWOConditionals', function() {
	describe('visited locations after conditionals', function() {
		it('should return [0,0,0,0,0,0]', function() {
			assert.deepEqual([0,0,0,0,0,0], source.onloadFunctionTWOConditionals(0,0,0,0,0,0));
		});
		it('should return [1,0,0,0,0,0]', function() {
			assert.deepEqual([1,0,0,0,0,0], source.onloadFunctionTWOConditionals(null,0,0,0,0,0));
		});
		it('should return [0,1,0,0,0,0]', function() {
			assert.deepEqual([0,1,0,0,0,0], source.onloadFunctionTWOConditionals(0,null,0,0,0,0));
		});
		it('should return [1,1,0,0,0,0]', function() {
			assert.deepEqual([1,1,0,0,0,0], source.onloadFunctionTWOConditionals(null,null,0,0,0,0));
		});
		it('should return [0,0,1,0,0,0]', function() {
			assert.deepEqual([0,0,1,0,0,0], source.onloadFunctionTWOConditionals(0,0,null,0,0,0));
		});
		it('should return [1,0,1,0,0,0]', function() {
			assert.deepEqual([1,0,1,0,0,0], source.onloadFunctionTWOConditionals(null,0,null,0,0,0));
		});
		it('should return [0,1,1,0,0,0]', function() {
			assert.deepEqual([0,1,1,0,0,0], source.onloadFunctionTWOConditionals(0,null,null,0,0,0));
		});
		it('should return [1,1,1,0,0,0]', function() {
			assert.deepEqual([1,1,1,0,0,0], source.onloadFunctionTWOConditionals(null,null,null,0,0,0));
		});
		it('should return [0,0,0,1,0,0]', function() {
			assert.deepEqual([0,0,0,1,0,0], source.onloadFunctionTWOConditionals(0,0,0,null,0,0));
		});
		it('should return [1,0,0,1,0,0]', function() {
			assert.deepEqual([1,0,0,1,0,0], source.onloadFunctionTWOConditionals(null,0,0,null,0,0));
		});
		it('should return [0,1,0,1,0,0]', function() {
			assert.deepEqual([0,1,0,1,0,0], source.onloadFunctionTWOConditionals(0,null,0,null,0,0));
		});
		it('should return [1,1,0,1,0,0]', function() {
			assert.deepEqual([1,1,0,1,0,0], source.onloadFunctionTWOConditionals(null,null,0,null,0,0));
		});
		it('should return [0,0,1,1,0,0]', function() {
			assert.deepEqual([0,0,1,1,0,0], source.onloadFunctionTWOConditionals(0,0,null,null,0,0));
		});
		it('should return [1,0,1,1,0,0]', function() {
			assert.deepEqual([1,0,1,1,0,0], source.onloadFunctionTWOConditionals(null,0,null,null,0,0));
		});
		it('should return [0,1,1,1,0,0]', function() {
			assert.deepEqual([0,1,1,1,0,0], source.onloadFunctionTWOConditionals(0,null,null,null,0,0));
		});
		it('should return [1,1,1,1,0,0]', function() {
			assert.deepEqual([1,1,1,1,0,0], source.onloadFunctionTWOConditionals(null,null,null,null,0,0));
		});
		it('should return [0,0,0,0,1,0]', function() {
			assert.deepEqual([0,0,0,0,1,0], source.onloadFunctionTWOConditionals(0,0,0,0,null,0));
		});
		it('should return [1,0,0,0,1,0]', function() {
			assert.deepEqual([1,0,0,0,1,0], source.onloadFunctionTWOConditionals(null,0,0,0,null,0));
		});
		it('should return [0,1,0,0,1,0]', function() {
			assert.deepEqual([0,1,0,0,1,0], source.onloadFunctionTWOConditionals(0,null,0,0,null,0));
		});
		it('should return [1,1,0,0,1,0]', function() {
			assert.deepEqual([1,1,0,0,1,0], source.onloadFunctionTWOConditionals(null,null,0,0,null,0));
		});
		it('should return [0,0,1,0,1,0]', function() {
			assert.deepEqual([0,0,1,0,1,0], source.onloadFunctionTWOConditionals(0,0,null,0,null,0));
		});
		it('should return [1,0,1,0,1,0]', function() {
			assert.deepEqual([1,0,1,0,1,0], source.onloadFunctionTWOConditionals(null,0,null,0,null,0));
		});
		it('should return [0,1,1,0,1,0]', function() {
			assert.deepEqual([0,1,1,0,1,0], source.onloadFunctionTWOConditionals(0,null,null,0,null,0));
		});
		it('should return [1,1,1,0,1,0]', function() {
			assert.deepEqual([1,1,1,0,1,0], source.onloadFunctionTWOConditionals(null,null,null,0,null,0));
		});
		it('should return [0,0,0,1,1,0]', function() {
			assert.deepEqual([0,0,0,1,1,0], source.onloadFunctionTWOConditionals(0,0,0,null,null,0));
		});
		it('should return [1,0,0,1,1,0]', function() {
			assert.deepEqual([1,0,0,1,1,0], source.onloadFunctionTWOConditionals(null,0,0,null,null,0));
		});
		it('should return [0,1,0,0,1,0]', function() {
			assert.deepEqual([0,1,0,1,1,0], source.onloadFunctionTWOConditionals(0,null,0,null,null,0));
		});
		it('should return [1,1,0,1,1,0]', function() {
			assert.deepEqual([1,1,0,1,1,0], source.onloadFunctionTWOConditionals(null,null,0,null,null,0));
		});
		it('should return [0,0,1,1,1,0]', function() {
			assert.deepEqual([0,0,1,1,1,0], source.onloadFunctionTWOConditionals(0,0,null,null,null,0));
		});
		it('should return [1,0,1,1,1,0]', function() {
			assert.deepEqual([1,0,1,1,1,0], source.onloadFunctionTWOConditionals(null,0,null,null,null,0));
		});
		it('should return [0,1,1,1,1,0]', function() {
			assert.deepEqual([0,1,1,1,1,0], source.onloadFunctionTWOConditionals(0,null,null,null,null,0));
		});
		it('should return [1,1,1,1,1,0]', function() {
			assert.deepEqual([1,1,1,1,1,0], source.onloadFunctionTWOConditionals(null,null,null,null,null,0));
		});
		it('should return [0,0,0,0,0,1]', function() {
			assert.deepEqual([0,0,0,0,0,1], source.onloadFunctionTWOConditionals(0,0,0,0,0,null));
		});
		it('should return [1,0,0,0,0,1]', function() {
			assert.deepEqual([1,0,0,0,0,1], source.onloadFunctionTWOConditionals(null,0,0,0,0,null));
		});
		it('should return [0,1,0,0,0,1]', function() {
			assert.deepEqual([0,1,0,0,0,1], source.onloadFunctionTWOConditionals(0,null,0,0,0,null));
		});
		it('should return [1,1,0,0,0,1]', function() {
			assert.deepEqual([1,1,0,0,0,1], source.onloadFunctionTWOConditionals(null,null,0,0,0,null));
		});
		it('should return [0,0,1,0,0,1]', function() {
			assert.deepEqual([0,0,1,0,0,1], source.onloadFunctionTWOConditionals(0,0,null,0,0,null));
		});
		it('should return [1,0,1,0,0,1]', function() {
			assert.deepEqual([1,0,1,0,0,1], source.onloadFunctionTWOConditionals(null,0,null,0,0,null));
		});
		it('should return [0,1,1,0,0,1]', function() {
			assert.deepEqual([0,1,1,0,0,1], source.onloadFunctionTWOConditionals(0,null,null,0,0,null));
		});
		it('should return [1,1,1,0,0,1]', function() {
			assert.deepEqual([1,1,1,0,0,1], source.onloadFunctionTWOConditionals(null,null,null,0,0,null));
		});
		it('should return [0,0,0,1,0,1]', function() {
			assert.deepEqual([0,0,0,1,0,1], source.onloadFunctionTWOConditionals(0,0,0,null,0,null));
		});
		it('should return [1,0,0,1,0,1]', function() {
			assert.deepEqual([1,0,0,1,0,1], source.onloadFunctionTWOConditionals(null,0,0,null,0,null));
		});
		it('should return [0,1,0,1,0,1]', function() {
			assert.deepEqual([0,1,0,1,0,1], source.onloadFunctionTWOConditionals(0,null,0,null,0,null));
		});
		it('should return [1,1,0,1,0,1]', function() {
			assert.deepEqual([1,1,0,1,0,1], source.onloadFunctionTWOConditionals(null,null,0,null,0,null));
		});
		it('should return [0,0,1,1,0,1]', function() {
			assert.deepEqual([0,0,1,1,0,1], source.onloadFunctionTWOConditionals(0,0,null,null,0,null));
		});
		it('should return [1,0,1,1,0,1]', function() {
			assert.deepEqual([1,0,1,1,0,1], source.onloadFunctionTWOConditionals(null,0,null,null,0,null));
		});
		it('should return [0,1,1,1,0,1]', function() {
			assert.deepEqual([0,1,1,1,0,1], source.onloadFunctionTWOConditionals(0,null,null,null,0,null));
		});
		it('should return [1,1,1,1,0,1]', function() {
			assert.deepEqual([1,1,1,1,0,1], source.onloadFunctionTWOConditionals(null,null,null,null,0,null));
		});
		it('should return [0,0,0,0,1,1]', function() {
			assert.deepEqual([0,0,0,0,1,1], source.onloadFunctionTWOConditionals(0,0,0,0,null,null));
		});
		it('should return [1,0,0,0,1,1]', function() {
			assert.deepEqual([1,0,0,0,1,1], source.onloadFunctionTWOConditionals(null,0,0,0,null,null));
		});
		it('should return [0,1,0,0,1,1]', function() {
			assert.deepEqual([0,1,0,0,1,1], source.onloadFunctionTWOConditionals(0,null,0,0,null,null));
		});
		it('should return [1,1,0,0,1,1]', function() {
			assert.deepEqual([1,1,0,0,1,1], source.onloadFunctionTWOConditionals(null,null,0,0,null,null));
		});
		it('should return [0,0,1,0,1,1]', function() {
			assert.deepEqual([0,0,1,0,1,1], source.onloadFunctionTWOConditionals(0,0,null,0,null,null));
		});
		it('should return [1,0,1,0,1,1]', function() {
			assert.deepEqual([1,0,1,0,1,1], source.onloadFunctionTWOConditionals(null,0,null,0,null,null));
		});
		it('should return [0,1,1,0,1,1]', function() {
			assert.deepEqual([0,1,1,0,1,1], source.onloadFunctionTWOConditionals(0,null,null,0,null,null));
		});
		it('should return [1,1,1,0,1,1]', function() {
			assert.deepEqual([1,1,1,0,1,1], source.onloadFunctionTWOConditionals(null,null,null,0,null,null));
		});
		it('should return [0,0,0,1,1,1]', function() {
			assert.deepEqual([0,0,0,1,1,1], source.onloadFunctionTWOConditionals(0,0,0,null,null,null));
		});
		it('should return [1,0,0,1,1,1]', function() {
			assert.deepEqual([1,0,0,1,1,1], source.onloadFunctionTWOConditionals(null,0,0,null,null,null));
		});
		it('should return [0,1,0,0,1,1]', function() {
			assert.deepEqual([0,1,0,1,1,1], source.onloadFunctionTWOConditionals(0,null,0,null,null,null));
		});
		it('should return [1,1,0,1,1,1]', function() {
			assert.deepEqual([1,1,0,1,1,1], source.onloadFunctionTWOConditionals(null,null,0,null,null,null));
		});
		it('should return [0,0,1,1,1,1]', function() {
			assert.deepEqual([0,0,1,1,1,1], source.onloadFunctionTWOConditionals(0,0,null,null,null,null));
		});
		it('should return [1,0,1,1,1,1]', function() {
			assert.deepEqual([1,0,1,1,1,1], source.onloadFunctionTWOConditionals(null,0,null,null,null,null));
		});
		it('should return [0,1,1,1,1,1]', function() {
			assert.deepEqual([0,1,1,1,1,1], source.onloadFunctionTWOConditionals(0,null,null,null,null,null));
		});
		it('should return [1,1,1,1,1,1]', function() {
			assert.deepEqual([1,1,1,1,1,1], source.onloadFunctionTWOConditionals(null,null,null,null,null,null));
		});
	});
});
