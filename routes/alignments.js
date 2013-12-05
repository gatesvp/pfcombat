var alignments = require('../db/alignments').alignments;
var _ = require('underscore');

exports.get = function(req, res, firebase) {
  var id = req.params.id; 
  
  var alignment = _.find(alignments, function(x) { return x.id === id; });
  
  res.json(alignment);
}

exports.list = function(req, res, firebase) {
  res.json(alignments);
}