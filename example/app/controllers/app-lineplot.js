// Program: angular-lineplot.js
// Purpose: AngularJS line plot
// Author: Masaki Kakoi
// Updated: June 23, 2016
// License: MIT license

var app = angular.module('app',['angular-lineplot']);

app.controller('lineplotCtr',['$scope', function($scope) {
  
  $scope.data = {
    sc: "Audacy1",
    dataType: "x",	
	dataStream: [],
  };
  
  $scope.btns = [{state: false,
                  label: "PAN"}];
		
  $scope.pauseResume = "PAUSE";
		
  $scope.getPosition = function (){
	   
	var output=[]; 
	var d_type = $scope.data.dataType;//$scope.datatype;
    var num_data = $scope.numdata;
    var sc = $scope.data.sc;//$scope.sc;  
    var x = 'http://'+platform+':'+dbPort+'/services/v1/position/'+sc+'/'+num_data;
    	
	$.ajax({
        url: x
    }).then(function(data) {
	   switch(d_type){
		 case "x":
		   for(i=0; i < num_data; i++){
		     output.push([data.data[i].timestamp, data.data[i].x]);				 
		   };
		   break;
		 case "y": 
		   for(i=0; i < num_data; i++){
		     output.push([data.data[i].timestamp, data.data[i].y]);			 
		   };
		   break;
		 case "z": 
		   for(i=0; i < num_data; i++){
		     output.push([data.data[i].timestamp, data.data[i].z]);			 
		   };
	       break;	   
	   };
       
       $("#dataPlot").text(output);
    });
	

  };
	
	
}]);
