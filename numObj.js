var numObj = s => {
  var res = [];
  s.forEach(el => {
    var obj = {};
    var key = el.toString();
    obj[key] = String.fromCharCode(el);
    res.push(obj);
  })
  return res;
}

console.log("----:: [{'118':'v'}, {'117':'u'}, {'120':'x'}]  ::", numObj([118,117,120]));