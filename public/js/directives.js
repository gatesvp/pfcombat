
angular.module('pfcombat.directives', [])
  .directive('ngInitData', function() {
    return {
      
      restrict: 'E, A',
      scope: false,
      link: function(scope, element, attrs) {
        // Fire an init event if it is defined
        if (scope.init)
        {
          var obj = JSON.parse(attrs.ngInitData);
          scope.init(obj);
        }
        return;
      }
    };
  });
