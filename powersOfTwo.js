var powersOfTwo = n => {
  var res = [];
  for (var i = 0; i <= n; i++) {
    res.push(Math.pow(2, i));
  }
  return res;
}

console.log(powersOfTwo(10));
console.log(powersOfTwo(0));