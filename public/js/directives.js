var INTEGER_REGEXP = /^\-?\d+$/;

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
  })
  .directive('integer', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (INTEGER_REGEXP.test(viewValue)) {
            // it is valid
            ctrl.$setValidity('integer', true);
            return viewValue;
          } else {
            // it is invalid, return undefined (no model update)
            ctrl.$setValidity('integer', false);
            return undefined;
          }
        });
      }
    };
  });
