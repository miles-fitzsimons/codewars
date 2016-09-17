const MORSE_CODE = {
  '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': '\'',
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS'
};

var decodeMorse = morseCode => {
  while (morseCode.substring(0,1) === ' ') morseCode = morseCode.substring(1);
  while (morseCode.substring(morseCode.length - 1) === ' ') morseCode = morseCode.substring(0, morseCode.length - 1);
  while (morseCode.indexOf('   ') !== -1) {
    morseCode = morseCode.substring(0, morseCode.indexOf('   ')) + ' s ' + morseCode.substring(morseCode.indexOf('   ') + 3);
  }
  return morseCode.split(' ').reduce((p, c) => {
    return c === 's' ? p + ' ' : p + MORSE_CODE[c];
  }, '');
}

console.log('----- HEY JUDE::', decodeMorse('    .... . -.--   .---   ..- -.. .    '));
