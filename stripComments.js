var solution = (input, markers) => {
  markers = markers.map(marker => {return '\\' + marker;});
  markers = `(${markers.join('|')})`;
  var regex = new RegExp(markers, 'g');
  input = input.split('\n');
  input = input.map((line) => {
    var lowestIndex = line.search(regex);
    return line.search(regex) !== -1 ? line.substring(0, lowestIndex).trimRight() : line.trimRight();
  });
  return input.join('\n');
}

console.log('------------\napples, pears\ngrapes\nbananas  :: \n', solution("apples, pears # and bananas\n grapes       \nbananas !apples", ["#", "!", "%"]));