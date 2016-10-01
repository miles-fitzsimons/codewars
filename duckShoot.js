var duckShoot = (ammo, aim, ducks) => {
  for (var i = 0; i < Math.floor(ammo * aim); i++) {
    ducks = ducks.replace('2', 'X');
  }
  return ducks;
}


console.log('----------  |~~X~~~X2~2~~22~2~~~~2~~~| ::  ', duckShoot(4, 0.64, '|~~2~~~22~2~~22~2~~~~2~~~|'));
console.log('----------  |~~~~~~~X~2~~~| ::  ', duckShoot(9, 0.22, '|~~~~~~~2~2~~~|'));
console.log('----------  |~~~~~XX~2~~~~~| ::  ', duckShoot(6, 0.41, '|~~~~~22~2~~~~~|')); 
