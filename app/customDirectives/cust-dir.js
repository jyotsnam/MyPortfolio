customDirectives.directive('custDir' , function(){
    return{
        restrict: 'E',
        transclude: true,
        template: '<div ng-transclude></div> Name: {{customer.name}}<br /> Street: {{customer.street}}'  
    };
});

/*main.directive('custDir' , function(){
  return{
     transclude: 'element',
     template: '<span ng-transclude></span>',
    link: function(scope, element, attr){
          element.append("<strong>"+attr.title+"</strong>");
    },
    compile: function(tElement, tAttrs) {
      var parentElement = tElement.parent();
      return function(scope, element, attrs, ctrl, transclude) {
        transclude(scope.$new(), function(clone) {
          parentElement.append(clone);
        });
        transclude(scope.$new(), function(clone) {
          parentElement.append(clone);
        });
        transclude(scope.$new(), function(clone) {
          parentElement.append(clone);
        });
      };
    }
  };    
});*/