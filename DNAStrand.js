var DNAStrand = s => {
  return s.split('').map(el => {
    switch(el) {
      case 'A':
        return 'T';

      case 'T':
        return 'A';

      case 'G':
        return 'C';

      case 'C':
        return 'G';
    }
  }).join('');
}


console.log(DNAStrand("AAAA"),"TTTT","String AAAA is");
console.log(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
console.log(DNAStrand("GTAT"),"CATA","String GTAT is");