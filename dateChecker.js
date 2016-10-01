var dateChecker = date => {
  return /\d{2}-\d{2}-\d{4} \d{2}:\d{2}/.test(date);
}


console.log('-----', dateChecker("01-09-2016 01:20"));
console.log('-----', dateChecker("01-09-2016 01;20"));
console.log('-----', dateChecker("01_09_2016 01:20"));
console.log('-----', dateChecker("14-10-1066 12:00"));
console.log('-----', dateChecker("Tenth of January"));