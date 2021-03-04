const app = angular.module("store-app", []);

app.controller("StoreController", function($scope){
    $scope.message = "Hello Angular";
})

app.controller("DemoController", function(){
    this.message = "The Demo Controller";
})


export default app;