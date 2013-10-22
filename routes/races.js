var races = require('../db/races').races;
var _ = require('underscore');

exports.get = function(req, res, firebase) {
  var id = req.params.id; 
  
  var race = _.find(races, function(x) { return x.id === id; });
  
  res.json(race);
}