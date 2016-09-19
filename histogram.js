var histogram = results => {
  var str = '';
  results.forEach((n, i) => {
    str = n !== 0 ? `${i + 1}|${Array(n + 1).join('#')} ${n}\n` + str : `${i + 1}|\n` + str;
  });
  return str;
}

console.log(histogram([7,3,10,1,0,5]));