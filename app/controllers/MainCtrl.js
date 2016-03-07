app.controller('MainCtrl',['$scope', function($scope){

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
            orderDate: "2012-09-13",
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
        $scope.add.orderDate = $scope.order;
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

    $scope.predicate = 'names';
    $scope.reverse = true;



    $scope.order = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    };


    $scope.order('names',false);





}]);
