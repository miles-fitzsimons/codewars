var uniqueInOrder = iterable => {
  return Array.isArray(iterable) ? iterable.filter(callback) : iterable.split('').filter(callback);
}

var callback = (e, i, a) => e !== a[i - 1];

console.log(uniqueInOrder('AAAABBBCCDAABBB'), '-------  ::  ', ['A','B','C','D','A','B']);
console.log(uniqueInOrder('ABBCcAD'), '-------  ::  ', ['A', 'B', 'C', 'c', 'A', 'D']);
console.log(uniqueInOrder([1,2,2,3,3]), '-------  ::  ', [1,2,3]);