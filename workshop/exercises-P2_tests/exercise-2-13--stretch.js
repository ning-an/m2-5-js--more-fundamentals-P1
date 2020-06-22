// Exercise 2-13
// -------------

// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function checkIsPalindrome(inputString) {
  // Your code here
  let array = inputString.split('');
  array.reverse();
  let reversedString = array.join('');
  return inputString === reversedString;
}

// Add 6 test cases
expect(checkIsPalindrome('javascript'), false);
expect(checkIsPalindrome('radar'), true);
expect(checkIsPalindrome('20200202'), true);
expect(checkIsPalindrome(''), true);
expect(checkIsPalindrome('python'), false);
expect(checkIsPalindrome('showme'), false);

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
