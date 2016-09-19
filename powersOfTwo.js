var powersOfTwo = n => {
  return Array.from({length: n + 1}, (el, i) => {console.log(el, i); return Math.pow(2, i);});
}

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));