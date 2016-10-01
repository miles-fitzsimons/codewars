var accum = s => {
  return s.split('').map((x, i) =>  x.toUpperCase() + Array(i + 1).join(x.toLowerCase())).join('-');
}


  console.log('Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu" ---', accum("ZpglnRxqenU"));
  console.log('--  "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb" ---', accum("NyffsGeyylB"));
  console.log('--  "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu" ---', accum("MjtkuBovqrU"));
  console.log('--  "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm" ---', accum("EvidjUnokmM"));
  console.log('--  "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc" ---', accum("HbideVbxncC"));
