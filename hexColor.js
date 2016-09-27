var hexColor = codes => {
  if (codes === '' || codes === '000 000 000') return 'black';
  var arr = codes.split(' ');
  if (arr[0] === arr[1] && arr[0] === arr[2]) return 'white';
  if (arr[0] > arr[1] && arr[0] > arr[2]) return 'red';
  if (arr[1] > arr[0] && arr[1] > arr[2]) return 'green';
  if (arr[2] > arr[0] && arr[2] > arr[1]) return 'blue';
  if (arr[0] === arr[1]) return 'yellow';
  if (arr[0] === arr[2]) return 'magenta';
  if (arr[1] === arr[2]) return 'cyan';
}

console.log('----------------------------:: "black" ::', hexColor(''));
console.log('----------------------------:: "black" ::', hexColor('000 000 000'));
console.log('----------------------------:: "blue" ::', hexColor('121 245 255'));
console.log('----------------------------:: "cyan" ::', hexColor('027 100 100'));
console.log('----------------------------:: "white" ::', hexColor('021 021 021'));
console.log('----------------------------:: "red" ::', hexColor('255 000 000'));
console.log('----------------------------:: "green" ::', hexColor('000 147 000'));
console.log('----------------------------:: "magenta" ::', hexColor('212 103 212'));
console.log('----------------------------:: "yellow" ::', hexColor('101 101 092'));
