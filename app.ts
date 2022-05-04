// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// function printResult(num: number): void {
//   console.log('Result: ' + num);
// }

// printResult(add(5, 12));

function combine(
  input1: number | string, 
  input2: number | string, 
  resultConversion: 'as-number' | 'as-text'
) {
  let result;
  if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if(resultConversion ==='as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges)

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges)

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames)