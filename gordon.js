var gordon = a => {
  return a.toUpperCase().split(' ').map(a => {return a + '!!!!'}).join(' ').replace(/A/g, '@').replace(/[EIOU]/g, '*');
}


console.log("----:: WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'  ::", gordon('What feck damn cake'));