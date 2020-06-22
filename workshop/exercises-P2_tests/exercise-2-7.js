// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  // Your code here
  if (typeof arr[0] !== 'string' || typeof arr[1] !== 'number') {
    return undefined;
  } else if (arr[1] <= 0) {
    return '';
  } else {
    let res = '';
    for (let i = 0; i < arr[1]; i++) {
      res += arr[0];
    }
    return res;
  }
}

// We need 7 test cases.
// Don't forget to test all of the question parameters
expect(repeat(['foo', 0]), '');
expect(repeat(['foo', -3]), '');
expect(repeat([21, 32]), undefined);
expect(repeat(['foo', 'foo']), undefined);
expect(repeat([21, 'foo']), undefined);
expect(repeat(['foo', 2]), 'foofoo');
expect(repeat(['foo', 5]), 'foofoofoofoofoo');

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
