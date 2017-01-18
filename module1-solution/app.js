(function () {
'use strict';

angular.module('CountApp', [])
.controller('CountController', CountController);

CountController.$inject = ['$scope'];
function CountController($scope) {
  $scope.returnMsg="";
  $scope.message="";

  $scope.splitString = function(stringToSplit) {
    var arrayOfStrings = stringToSplit.split(',');
    var returnArray = [];
if(arrayOfStrings.length>1){

}
    for (var i = 0; i < arrayOfStrings.length; i++) {
      arrayOfStrings[i]
      if (!arrayOfStrings[i] || 0 === arrayOfStrings[i].length
      || "" == arrayOfStrings[i].trim() ) {

      }else{
        returnArray = returnArray.concat(arrayOfStrings[i]);
      }
    }

    return returnArray;
  }

  $scope.CheckIfTooMuch = function(){
    var array = $scope.splitString($scope.message);
    if (array.length==0) {
      if ($scope.message.indexOf(",")== -1) {
        $scope.returnMsg="Please enter data first";
        $scope.myStyle = {color : 'red' , 'border-color': "red"};
      } else {
        $scope.returnMsg="";
        $scope.myStyle = "";
      }
    } else if (array.length>3) {
      $scope.returnMsg="Too much!";
      $scope.myStyle = {color : 'blue' , 'border-color': "blue"};
    }else if (array.length<=3) {
      $scope.returnMsg="Enjoy!";
      $scope.myStyle = {color : 'blue' , 'border-color': "blue"};
    }
  }
}

})();
