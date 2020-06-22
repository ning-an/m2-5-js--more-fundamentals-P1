// Exercise 2-9
// ------------

// Make this function return the longest word in the input string. If the input
// string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   longestWord("hey hello morning") returns "morning"

// HINTS:
//  - You'll need to use the split string method
//  - `forEach` might be helpful

function longestWord(str) {
  // Place solution here
  let array = str.split(' ');
  let maxLength = 0;
  let res;
  array.forEach(elem => {
    if (elem.length >= maxLength) {
      maxLength = elem.length;
      res = elem;
    }
  });
  return res;
}

// We need 5 test cases
expect(longestWord(''), '');
expect(longestWord('hello world'), 'world');
expect(longestWord('hey hello morning'), 'morning');
expect(longestWord('exercise 2.9 solu tion'), 'exercise');
expect(longestWord('how arrrrrrre you doing today'), 'arrrrrrre');

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
