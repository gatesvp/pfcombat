
/*
 * GET users listing.
 */

var skills_list = require('../db/skills');
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
    
    if (user)
    {
      res.render('user_edit', {'title': "Editing " + id, 'id': id, 'data': user});
    }
    else
    {
      user = get_default_user();
      res.render('user_edit', {'title': "New User", 'id': '', 'data': user});
    }
    
  });
};

/*
  perform actual editing based on post variables
*/
exports.edit_post = function(req, res, firebase){
  
  var id = req.params.id;
  
  firebase.child('users').child(id).once('value', function(data){
    
    var user = data.val();
    
    if (user) {
      update_user_values(user, req.body);
      firebase.child('users').child(id).set(user, function(err) {
        if (err) {
          res.render('user_edit', {'title': "Error", 'id': id, 'err': err})
        }
        else {
          res.render('user_edit', {'title': "Editing " + id, 'id': id, 'data': user});
        }
      });
    }
    else
    {
      user = get_default_user();
      res.render('user_edit', {'title': "New User", 'id': '', 'data': user});
    }  
  });
};

var update_user_values = function(user, values){
  
  if(values.str) { user.str = values.str; }
  if(values.dex) { user.dex = values.dex; }
  if(values.con) { user.con = values.con; }
  if(values.int) { user.int = values.int; }
  if(values.wis) { user.wis = values.wis; }
  if(values.cha) { user.cha = values.cha; }

}


exports.create = function(req, res, firebase){
      var user = get_default_user();
      res.render('user_edit', {'title': "New User", 'id': '', 'data': user});
};

var get_default_user = function()
{
  var base_skills = _.filter(skills_list, function(x) { return !x.multi; });
  
  var starting_skills = [];
  
  for(var s in base_skills){
    starting_skills.push({ name: s.name, is_class: 0, ranks: 0 });
  }
  
  return {
      stats: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 }
    , race: 'Human'
    , alignment: 'N'
    , skills: starting_skills
    , feats: [ ]
  };
}