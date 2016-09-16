var moveZeros = arr => {
  var zeroCount = 0;
  arr = arr.filter(el => {
    if (el === 0) zeroCount++;
    return el !== 0
  });
  for (var i = 0; i < zeroCount; i++) arr.push(0);
  return arr;
}