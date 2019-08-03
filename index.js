// add solution here

var theBeatlesarray = [];

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length; i++) {
  theBeatlesarray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatlesarray;
}

var johnLennonarray = [];
var x = 0

function johnLennonFacts(facts) {
  while (x < facts.length) {
  facts.splice(x, 1, `${facts[x]}!!!`);
  x++;
  }
  return johnLennonarray;
}