customDirectives.directive('useChildscope' , function(){
    return {
    transclude:'element',
    compile: function(tElement, tAttrs) {
      var parentElement = tElement.parent();
      return function(scope, element, attrs, ctrl, transclude) {
        transclude(scope.$new(), function(clone) {
            scope.message = "Added a property to the child scope of the transcluded element";
            parentElement.append(clone);
        });
        transclude(scope.$new(), function(clone) {
            scope.message = "Added a property to the child scope of the transcluded element";
            parentElement.append(clone);
        });
        transclude(scope.$new(), function(clone) {
            scope.message = "Added a property to the child scope of the transcluded element";
            parentElement.append(clone);
        });
      };
    }
  };
});