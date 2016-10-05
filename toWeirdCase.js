var toWeirdCase = s => {
  return s.split(' ').map(e => {
    var a = '';
    for (var i = 0; i < e.length; i++) {
      i % 2 === 0 ? a += e.substring(i, i + 1).toUpperCase() : a += e.substring(i, i + 1).toLowerCase();
    }
    return a;
  }).join(' ');
}

console.log(toWeirdCase('This'), 'ThIs');
console.log(toWeirdCase('is'), 'Is');
console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
