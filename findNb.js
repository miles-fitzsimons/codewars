var findNb = m => {
  var volume = 0;
  var n =1;
  while (volume < m) {
    volume += Math.pow(n, 3);
    if (volume === m) return n;
    n++;
  }
  return -1;
}

console.log('---------------------:: 2022 ::', findNb(4183059834009));
console.log('---------------------:: -1 ::', findNb(24723578342962));
console.log('---------------------:: 4824 ::', findNb(135440716410000));
console.log('---------------------:: 3568 ::', findNb(40539911473216));