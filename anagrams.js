var anagrams = (word, words) => {
  return words.filter(a => a.split('').sort().join('') === word.split('').sort().join(''));
}