app.controller('MainCtrl',['$scope', function($scope){

    $scope.toAdd = false;




    $scope.salesOrderHeader = [
        {

            customerName: "Ammar",
            orderDate: "12/12/12",
            deliveryDate:"12/21/21",
            orderNumber:"12345",
            status:"open",
            salesmanID:"09876",
            Notes: "None"

        },

        {
            customerName: "John",
            orderDate: "12/12/12",
            deliveryDate:"12/21/21",
            orderNumber:"12345",
            status:"open",
            salesmanID:"09876",
            Notes: "None"



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

        $scope.salesOrderHeader.unshift($scope.add);

        $scope.customer="";
        $scope.order="";
        $scope.delivery="";
        $scope.number="";
        $scope.currentStatus="";
        $scope.id="";

        $scope.enter.$setPristine(true);


    }

    $scope.removeSaleOrder = function(item){


           $scope.salesOrderHeader.splice($scope.salesOrderHeader.indexOf($scope.salesOrderHeader), 1);

    }






}]);
