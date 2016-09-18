function zero() {return doIt(arguments, 0);}
function one() {return doIt(arguments, 1);}
function two() {return doIt(arguments, 2);}
function three() {return doIt(arguments, 3);}
function four() {return doIt(arguments, 4);}
function five() {return doIt(arguments, 5);}

function six() {return doIt(arguments, 6);}
function seven() {return doIt(arguments, 7);}
function eight() {return doIt(arguments, 8);}
function nine() {return doIt(arguments, 9);}

function plus() {return [arguments[0], 'plus'];}
function minus() {return [arguments[0], 'minus'];}
function times() {return [arguments[0], 'times'];}
function dividedBy() {return [arguments[0], 'dividedBy'];}

var doIt = (arg, n) => {
  arg = Array.isArray(arg[0]) ? arg[0] : arg;
  if (arg.length === 0) {
    return n;
  }
  else {
    switch (arg[1]) {
      case 'times':
      return arg[0] * n;

      case 'dividedBy':
      return n / arg[0];

      case 'plus':
      return arg[0] + n;
      
      case 'minus':
      return n - arg[0];

    }
  }
}


console.log('---- 25 :: ', five(times(five())));
console.log('---- 0 :: ', zero(times(five())));
console.log('---- 35 :: ', five(times(seven())));
console.log('---- 13 :: ', four(plus(nine())));
console.log('---- 5 :: ', eight(minus(three())));
console.log('---- 3 :: ', six(dividedBy(two())));