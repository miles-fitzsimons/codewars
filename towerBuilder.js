var towerBuilder = nFloors => {
  var res =[];
  var n = (2 * (nFloors - 1)) / 2;
  for(var i = 0; i < nFloors; i++) {
    var str = '';
    for (var j = -n; j <= n; j++) {
      j < -i || j > i ? str += ' ' : str += '*';
    }
    res.push(str);
  }
  return res;
}

console.log(towerBuilder(4));