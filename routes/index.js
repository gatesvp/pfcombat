
/*
 * GET home page.
 */

exports.index = function(req, res, firebaseRoot){
  
  //firebaseRoot.child('users').child('gates').set({firstName: "Gates", lastName: "VP", status: "subbedagain"});
  //firebaseRoot.child('users').child('jeff').set({firstName: "Geoff", lastName: "Certain", status: "out"});
  
  res.render('index', { title: 'PF Combat' });
};