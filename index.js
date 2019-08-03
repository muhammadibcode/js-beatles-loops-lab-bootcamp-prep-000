// add solution here

var theBeatlesarray = [];

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length; i++) {
  theBeatlesarray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatlesarray;
}

function johnLennonFacts(facts)