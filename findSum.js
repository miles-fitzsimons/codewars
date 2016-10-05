var findSum = n => {
  var sum = 0;
  for (var i = 3; i <= n; i++) {
    i % 3 === 0 || i % 5 === 0 ? sum += i : null;
  }
  return(sum);
}

console.log(findSum(5), 8);
console.log(findSum(10), 33);