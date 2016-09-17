var validParentheses = parens => {
  if (parens.substring(0, 1) === ')' || parens.substring(parens.length - 1) === '(') return false;
  return parens.match(/(\))/g).length === parens.match(/(\()/g).length;
}

console.log('----false:: ', validParentheses(')()('));
console.log('----false:: ', validParentheses('()('));
console.log('----true:: ', validParentheses('()'));
console.log('----false:: ', validParentheses('())'));