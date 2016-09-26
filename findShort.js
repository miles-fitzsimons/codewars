var findShort = s => {
  return s.split(' ').reduce((p, c) => {return c.length < p.length || p.length === 0 ? c : p;}, '').length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));