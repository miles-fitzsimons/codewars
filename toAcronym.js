var toAcronym = input => {
  return input.split(' ').reduce((p, c) => {return p + c.substring(0,1).toUpperCase();}, '');
}

console.log('------- CW::  ', toAcronym('hello there Miles'));