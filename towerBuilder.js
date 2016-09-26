var towerBuilder = nFloors => {
  var res =[];
  var width = 2 * (nFloors - 1) + 1;
  var n = (width - 1) / 2;
  for(var i = 0; i < nFloors; i++) {
    var str = '';
    for (var j = -n; j <= n; j++) {
      if (j > i || j < -i) {
        str += ' ';
      }
      else {
        str += '*';
      }
    }
    res.push(str);
  }
  return res;
}

console.log(towerBuilder(4));