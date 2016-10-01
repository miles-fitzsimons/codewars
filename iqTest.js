var iqTest = numbers => {
  numbers = numbers.split(' ').map(a => a % 2 === 0 ? 'even' : 'odd');
  return numbers.indexOf('even') === numbers.lastIndexOf('even') ? numbers.indexOf('even') + 1 : numbers.indexOf('odd') + 1;
}

console.log(iqTest("2 4 7 8 10"),3);
console.log(iqTest("1 2 2"), 1);
