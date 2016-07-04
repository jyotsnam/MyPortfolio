customDirectives.directive('allCustomers' , function(){
    return {
    template: "<div ng-transclude></div>",
    transclude:true,
    link: function(scope, element, attr){
          element.append("<span>Name:</span><span><strong>"+attr.name+"</strong></span> <br /> <span>Street:</span><span><strong>"+attr.street+"</strong></span><br /><br />"); }
  };
});