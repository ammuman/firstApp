app.controller('MainCtrl',['$scope','$filter', function($scope, $filter){

    $scope.toAdd = false;


    $scope.salesOrderHeader = [
        {
            customerName: "Ammar",
            orderDate: "1999-01-05",
            deliveryDate:"1990-12-08",
            orderNumber:"12345",
            status:"open",
            salesmanID:"09876",
            Notes: "None"

        },

        {
            customerName: "John",
            orderDate: "2015-09-13",
            deliveryDate:"1989-13-12",
            orderNumber:"12345",
            status:"open",
            salesmanID:"09876",
            Notes: "None"



        },

        {
            customerName:"Ali",
            orderDate:"2011-09-12",
            deliveryDate:"2012-11-11",
            orderNumber:"78976897",
            status:"Closed",
            salesmanID:"79779",
            Notes:"None"

        }

    ]

    $scope.addSalesOrder = function(){

        $scope.add = new Object();
        $scope.add.customerName = $scope.customer;
        $scope.order = $filter('date')($scope.order, "yyyy-MM-dd");
        $scope.add.orderDate = $scope.order;
        $scope.delivery = $filter('date')($scope.delivery, "yyyy-MM-dd");
        $scope.add.deliveryDate = $scope.delivery;
        $scope.add.orderNumber = $scope.number;
        $scope.add.status= $scope.currentStatus;
        $scope.add.salesmanID = $scope.id;

        $scope.salesOrderHeader.push($scope.add);

        $scope.customer="";
        $scope.order="";
        $scope.delivery="";
        $scope.number="";
        $scope.currentStatus="";
        $scope.id="";

        $scope.enter.$setPristine(true);


    }

    $scope.removeSaleOrder = function(sales){


        var idx =  $scope.salesOrderHeader.indexOf(sales);
        var st = $scope.salesOrderHeader[idx];
        $scope.salesOrderHeader.splice(idx,1);

    }

    $scope.predicate = 'orderDate';
    $scope.reverse = false;



   /* $scope.order = function(predicate){

         $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
         $scope.predicate = predicate;
    }; */


    //$scope.order('names',false); <!-- allows reverse order -->

}]);
