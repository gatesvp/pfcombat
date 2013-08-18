
/*
 * GET users listing.
 */

var skills = require('../db/skills').skills;
var alignments = require('../db/alignments').alignments;
var ability_modifier = require('../db/stats').modifers;
var _ = require('underscore');

exports.list = function(req, res, firebase){
  firebase.child('users').once('value', function(data) {
      //res.send("respond with a resource");
      var users = data.val();
      res.render('users', {title: "User Listing", data: users});
  }
  );
};

exports.edit = function(req, res, firebase){
  
  var id = req.params.id;
  
  firebase.child('users').child(id).once('value', function(data){
    
    var user = data.val();
    var title = 'Editing ' + id;
    
    if (!user)
    {
      // No user found, create some defaults
      user = get_default_user();
      id = '';
    }
    
    render_user_screen(res, title, id, user);
  });
};

/*
  perform actual editing based on post variables
*/
exports.save = function(req, res, firebase){
  
  var id = req.params.id || req.body.id;
  
  firebase.child('users').child(id).once('value', function(data){
    
    var user = data.val();
    
    if (!user) {
      user = get_default_user();
    }
    
    update_user_values(user, req.body);
    firebase.child('users').child(id).set(user, function(err) {
      render_user_screen(res, "Editing " + id, id, user, err);
    });
  });
};

/***
 * Unified rendering for the User Edit screen.
 * Specifically include the "DB" elements that need to be passed in.
 ***/
var render_user_screen = function(res, title, id, user, err){
  res.render('user_edit', 
  {
    'err': err,
    'title': title, 
    'id': id, 
    'data': user, 
    'skills': skills, 
    'alignments': alignments
  }
);
}

var update_user_values = function(user, values){
  
  if(values.str) { user.stats.str = values.str; }
  if(values.dex) { user.stats.dex = values.dex; }
  if(values.con) { user.stats.con = values.con; }
  if(values.int) { user.stats.int = values.int; }
  if(values.wis) { user.stats.wis = values.wis; }
  if(values.cha) { user.stats.cha = values.cha; }

  if(values.alignment) { user.alignment = values.alignment; }
  if(values.bab) { user.bab = values.bab; }
  if(values.ref) { user.ref = values.ref; }
  if(values.fort) { user.fort = values.fort; }
  if(values.will) { user.will = values.will; }
  
  if(values.skills) {
    if (!user.skills) { user.skills = { }; }
    for(var skill_name in values.skills){
      user.skills[skill_name] = values.skills[skill_name];
    }
  }
  
}


exports.create = function(req, res, firebase){
      var user = get_default_user();
      render_user_screen(res, "New User", '', user, null);
};

var get_default_user = function()
{
  var base_skills = _.filter(skills, function(x) { return !x.multi; });
  
  var starting_skills = [];
  
  for(var s in base_skills){
    //starting_skills.push({ name: s.name, is_class: 0, ranks: 0 });
  }
  
  return {
      stats: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 }
    , race: 'Human'
    , alignment: 'N'
    , skills: starting_skills
    , feats: [ ]
  };
}