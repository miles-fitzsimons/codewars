var deleteNth = (arr, x) => {
  var str = arr.join(' ');
  console.log(str);
  for (var i = 0; i < arr.length; i++) {
    var regex = new RegExp(arr[i], 'g');
    console.log(regex);
    console.log(str.match(regex).length);

  }

}

console.log(deleteNth([20,37,20,21], 1), [20,37,21]);
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2]);
