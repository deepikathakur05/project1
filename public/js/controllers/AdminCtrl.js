sampleApp.controller('AdminController',function($scope,$http,$filter,AdminCRUDServices))

$scope.tagline = 'book your movies here!';
 var collection =['city','thrt','stim','movi','asmv','asst'];

 var datRefresh = function (collection){
 	collection.forEach(function(collection)){
 		    var promise = AdminCRUDServices.getData(collection);
 		    promise.then(function(data){
 		    	$scope['${collection}List'] = data;
 		    	$scope[collection] = "";
 		    })
 	});

 };

      dataRefresh(collection);

$scope.addData = function(model){
	var serviceName = (Object.keys(model)[0].substring(0,4);
	var promise = AdminCRUDServices.addData(model, 'serviceName');
	promise.then(function(data){
		dataRefresh([serviceName]);
	})
} 

$scope.deleteData =function(model){
	var serviceName = (Object.keys(model)[1].substring0,4);
	var promise = AdminCRUDServices.deleteData(model,serviceName);
	promise.then(function(data){
		dataRefresh([serviceName]);
	})
} 

$scope.editData =function(model){
	var serviceName = (Object.keys(model)[1].substring(0,4);
	var promise = AdminCRUDServices.editData(model, 'serviceName');
	promise.then(function(data){
		dataRefresh([serviceName] = data[0];
	})
} 






