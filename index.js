// add solution here

var musiciansarray = [];
var instrumentsarray = [];
var theBeatlesarray = [];

function theBeatlesPlay(musicians, instruments) {
  for (i = -1; i < musicians.length; i++) {
  theBeatlesarray.push(`${musicians[i]} plays ${instruments[i]}`);
}
}

