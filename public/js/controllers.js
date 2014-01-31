// Depends on Firebase
// Depends on _ (underscore)

var modifiers = function(score){
  if (score >= 10){ return Math.floor((score-10)/2); }
  else { return Math.ceil((score-10)/2); }
}

// Note: minification safe controller
angular.module('pfcombat.controllers', [])
  .controller('userController', ['$scope', '$http', '$firebase',
    function($scope, $http, $firebase) {
      
      $http.get('/alignments/').success(function(data) {
        $scope.alignments = data;
      });
      
      $http.get('/races/').success(function(data) {
        $scope.races = data;
      });
      
      $http.get('/skills/').success(function(data) {
        $scope.skills = data;
      });

      $scope.init = function(inData) {
        $scope.id = inData.id;
        var ref = new Firebase("https://pfcombat.firebaseio.com/users/"+$scope.id);
        $firebase(ref).$bind($scope, 'user');
        // alert('it fired ' + inData.id); 
      }
      
      $scope.setRace = function(){
        if ($scope.user && $scope.user.race) {
          var active = _.find($scope.races, function(r) { return (r.id && r.id == $scope.user.race); });
          
          // reset stats
          for(var s in $scope.user.statsRacial) { $scope.user.statsRacial[s] = 0; }
          
          if (active.stats) {
            for(s in active.stats) {
              $scope.user.statsRacial[s] = active.stats[s];
            }
          }
          
          // update size
          if (active.size) { $scope.user.size = active.size; }
          else { $scope.user.size = 'm'; } // default
          
          // update speed
          if (active.speed) { $scope.user.speed = active.speed; }
          else { $scope.user.speed = 30; } // default
        }
      }
      
      $scope.setStatTotal = function(statName) {
        if (!$scope.user.stats) { $scope.user.stats = { str:10,dex:10,con:10,int:10,wis:10,cha:10 }; }
        if (!$scope.user.statsRacial) { $scope.user.statsRacial = { str:0,dex:0,con:0,int:0,wis:0,cha:0 }; }
        if (!$scope.user.statsTotal) { $scope.user.statsTotal = { str:0,dex:0,con:0,int:0,wis:0,cha:0 }; }
        if (!$scope.user.statsModifier) { $scope.user.statsModifier = { str:0,dex:0,con:0,int:0,wis:0,cha:0 }; }
        $scope.user.statsTotal[statName] = parseInt($scope.user.stats[statName]) + parseInt($scope.user.statsRacial[statName]);
        $scope.user.statsModifier[statName] = modifiers($scope.user.statsTotal[statName]);
      }
      
      $scope.meleeBase = function() { 
        if ($scope.user && $scope.user.statsModifier) { return $scope.user.bab + $scope.user.statsModifier.str; }
        else { return 0; }
      };
      
      $scope.rangedBase = function() {
        if ($scope.user && $scope.user.statsModifier) { return $scope.user.bab + $scope.user.statsModifier.dex; }
        else { return 0; }
      };
      
      $scope.CMB = function() {
        if ($scope.user && $scope.user.statsModifier) { return $scope.user.bab + $scope.user.statsModifier.str; }
        else { return 0; }
      };
      
      $scope.CMD = function() {
        if ($scope.user && $scope.user.statsModifier) { return 10 + $scope.user.bab + $scope.user.statsModifier.str + $scope.user.statsModifier.dex; }
        else { return 10; }
      };
      
      $scope.refTotal = function() {
        if ($scope.user && $scope.user.statsModifier) { return $scope.user.ref + $scope.user.statsModifier.dex; }
        else { return 0; }
      };
      
      $scope.fortTotal = function() {
        if ($scope.user && $scope.user.statsModifier) { return $scope.user.fort + $scope.user.statsModifier.con; }
        else { return 0; }
      };
      
      $scope.willTotal = function() {
        if ($scope.user && $scope.user.statsModifier) { return $scope.user.will + $scope.user.statsModifier.wis; }
        else { return 0; }
      };
      
    }]
);
