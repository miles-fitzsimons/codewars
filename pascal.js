var pascal = depth => {
  if (depth === 1) return [[1]];
  var res = [[1]];
  for (var i = 1; i < depth; i++) {
    var line = [1];
    for (var j = 1; j < i; j++) {
      line.push(res[i - 1][j -1] + res[i - 1][j]);
    }
    line.push(1);
    res.push(line);
  }
  var str = '[';
  for (var i = 0; i < res.length; i++) {
    
  }
  console.log(str);
  return `${res}`;
}

console.log('-----[[1]]:: ', pascal(1));
console.log('-----[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]:: ', pascal(6));