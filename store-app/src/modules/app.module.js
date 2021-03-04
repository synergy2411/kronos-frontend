const app = angular.module("store-app", []);

app.controller("StoreController", function ($scope) {
    $scope.message = "Hello Angular";
    $scope.products = PRODUCTS;
})

app.controller("NavController", function ($scope) {
    $scope.tab = 0;

    $scope.setTab = function (tab) {
        $scope.tab = tab;
    }

    $scope.isTabSelected = function (checkTab) {
        return $scope.tab === checkTab;
    }

})

const PRODUCTS = [{
    name: "iPhone 12",
    company: "Apple",
    price: 70000,
    isAvailable: true,
    comments: [
        {
            stars: 3,
            body: "Like it",
            author: "test@test.com"
        },
        {
            stars: 5,
            body: "Love it",
            author: "abe@test.com"
        }
    ]
}, {
    name: "S20",
    company: "Samsung",
    price: 60000,
    isAvailable: false,
    comments: []
}, {
    name: "Edge Plus",
    company: "Motorola",
    price: 50000,
    isAvailable: true,
    comments: [{
        stars: 3,
        body: "Like it",
        author: "test@test.com"
    },
    {
        stars: 5,
        body: "Love it",
        author: "abe@test.com"
    }]
}]


// app.controller("DemoController", function(){
//     this.message = "The Demo Controller";
// })


export default app;