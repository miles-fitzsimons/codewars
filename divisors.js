var divisors = integer => {
  var res = [];
  for (var i = 2; i < integer / 2; i++) {
    if (integer % i === 0) 
      {
        res.push(integer / i);
        res.push(i);
      }
  }
  return res.length === 0 ?
  integer + ' is prime':
  res.sort((a, b) => a - b).filter((el, i, arr) => arr.indexOf(el) === i);
}

console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");