var openOrSenior = data => {
  var res = [];
  data.forEach(el => {
    el[0] >= 55 && el[1] > 7 ? res.push('Senior') : res.push('Open');
  });
  return res;
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior']);
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]),['Open', 'Open', 'Open', 'Open']);
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open']);
