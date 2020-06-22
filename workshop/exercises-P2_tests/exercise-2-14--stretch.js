// Exercise 2-14
// -------------

// Make this function return the input string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after every 40
// characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

function wrapAfter40Chars(str) {
  // Your code here
  if (str.length <= 40) {
    return str;
  }
  if (str[40] === ' ') {
    return str.slice(0 , 40) + '\n' + str.slice(41);
  } else {
    return str.slice(0 , 40) + '\n' + str.slice(40);
  }
}

// Test case 1: No space after newline
expect(
  wrapAfter40Chars(
    'This is a very long string! It seems to go on forever. Sadly, it does not.'
  ),
  'This is a very long string! It seems to \ngo on forever. Sadly, it does not.'
);

// Test case 2: Space after newline
expect(
  wrapAfter40Chars('My favourite thing about cats is all the things.'),
  'My favourite thing about cats is all the\nthings.'
);

// Add 4 more test cases
expect(wrapAfter40Chars('You have power over your mind—not outside events. Realize this, and you will find strength.'), 'You have power over your mind—not outsid\ne events. Realize this, and you will find strength.')
expect(wrapAfter40Chars('hello world'), 'hello world');
expect(wrapAfter40Chars('Some programs work with direct user input'), 'Some programs work with direct user inpu\nt');
expect(wrapAfter40Chars('Some program work with direct user input and so on'), 'Some program work with direct user input\nand so on');
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
