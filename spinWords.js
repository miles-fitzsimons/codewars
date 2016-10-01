var spinWords = s => {
  return s.split(' ').map(a => a.length >= 5 ? a.split('').reverse().join('') : a).join(' ');
}

console.log('---  Hey wollef sroirraw::', spinWords("Hey fellow warriors"));
