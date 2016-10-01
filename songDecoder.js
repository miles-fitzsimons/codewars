var songDecoder = song => {
  return song.split('WUB').filter(e => e !== '').join(' ');
}


console.log(songDecoder("AWUBBWUBC"), "A B C");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C");
console.log(songDecoder("WUBAWUBBWUBCWUB"), "A B C");
