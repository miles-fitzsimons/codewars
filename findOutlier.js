var findOutlier = integers => {
  var oddCount = 0;
  var evenCount = 0;
  integers[0] % 2 === 0 ? evenCount++ : oddCount++;
  integers[1] % 2 === 0 ? evenCount++ : oddCount++;
  integers[2] % 2 === 0 ? evenCount++ : oddCount++;
  if (oddCount >= 2) {
    for (var i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) return integers[i];
    }
  }
  else {
    for (var i = 0; i < integers.length; i++) {
      if (integers[i] % 2 !== 0) return integers[i];
    }
  }
}

console.log(findOutlier([0, 1, 2]), '------  ', 1);
console.log(findOutlier([1, 2, 3]), '------  ', 2);
console.log(findOutlier([2,6,8,10,3]), '------  ', 3);
console.log(findOutlier([0,0,3,0,0]), '------  ', 3);
console.log(findOutlier([1,1,0,1,1]), '------  ', 0);