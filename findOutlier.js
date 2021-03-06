var findOutlier = integers => {
  var even = [], odd = [];
  integers.forEach(el => {
    el % 2 === 0 ? even.push(el) : odd.push(el);
  });
  return even.length === 1 ? even[0] : odd[0];
}

console.log(findOutlier([0, 1, 2]), '------  ', 1);
console.log(findOutlier([1, 2, 3]), '------  ', 2);
console.log(findOutlier([2,6,8,10,3]), '------  ', 3);
console.log(findOutlier([0,0,3,0,0]), '------  ', 3);
console.log(findOutlier([1,1,0,1,1]), '------  ', 0);