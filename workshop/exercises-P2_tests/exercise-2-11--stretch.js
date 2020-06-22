// Exercise 2-11
// -------------

// Make this function return the sum of the squares of all the numbers passed
// in.
// - If any element in the array is not a number, skip it.
// - If no arguments are passed, return `undefined`

function addNumbers(...nums) {
  // Insert missing solution please
  let sum = 0;
  if (nums.length === 0) {
    return undefined;
  } else {
    nums.forEach(num => {
      if (typeof num === 'number') {
        sum += num ** 2;
      }
    })
  }
  return sum;
}

// Add 7 more test cases.
expect(addNumbers(1, 2, 3), 14); // 1 + 2**2 + 3**2 = 1 + 4 + 9 = 14
expect(addNumbers(1, 'something', '2'), 1);
expect(addNumbers(1, 'sometthing', 4), 17);
expect(addNumbers(), undefined);
expect(addNumbers(2, 3, 4, 5), 54);
expect(addNumbers(1, 1, 1, 1, 1), 5);
expect(addNumbers(1, 3, 'something', true), 10);
expect(addNumbers(3, 3, 3), 27);
/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
