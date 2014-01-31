var skills = require('../db/skills').skills;
var _ = require('underscore');

exports.get = function(req, res, firebase) {
  var id = req.params.id; 
  
  var race = _.find(skills, function(x) { return x.id === id; });
  
  res.json(race);
}

exports.list = function(req, res, firebase) {
  res.json(skills);
}