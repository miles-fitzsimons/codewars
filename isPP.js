var isPP = n => {
  for (var i = 1; i < n; i++) {
    for (var j = 1; j < n; j++) {
      console.log(i, j, Math.pow(i, j));
      if (Math.pow(i, j) === n) return [i, j];
    }
  }
  return null;
}

console.log('-----[2, 2]::', isPP(74805201));
console.log('-----[3, 2]::', isPP(9));
console.log('-----null::', isPP(5));
