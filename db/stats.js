/***
 * Basic DB for stats.
 * In particular the Modifiers and the Spells / level
 ***/
 
exports.modifiers = function(score){
  if (score >= 10){ return Math.floor((score-10)/2); }
  else { return Math.ceil((score-10)/2); }
}


