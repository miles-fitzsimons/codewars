var countBits = n => {
  return n === 0 ? 0 : n.toString(2).match(/1/g).length;
}


console.log(countBits(1234), 5);