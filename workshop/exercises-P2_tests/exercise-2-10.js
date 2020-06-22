// Exercise 2-10
// -------------

// Make this function return the input string, capitalized.
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//  - Write a function that capitalizes a single word.
//  - Split the input sentence into an array of words
//  - Iterate over each word, calling your "capitalize word" function
//  - Join the results into a string
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function makeIntoTitle(sentence) {
  // Your code here
  let array = sentence.split(' ');
  let newArray = array.map(elem => capitalizeWord(elem));
  let res = newArray.join(' ');
  return res;
}

// Add 6 total (5 more)
expect(
  makeIntoTitle('the longest road is a great song'),
  'The Longest Road Is A Great Song'
);
expect(makeIntoTitle('hello world'), 'Hello World');
expect(makeIntoTitle('handle events book'), 'Handle Events Book');
expect(makeIntoTitle('career service'), 'Career Service');
expect(makeIntoTitle('upcoming events are posted at the following website'), 'Upcoming Events Are Posted At The Following Website');
expect(makeIntoTitle('the national'), 'The National');

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
