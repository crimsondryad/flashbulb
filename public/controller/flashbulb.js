var app = angular.module("flashbulb",[]);
app.controller("flashbulbCtrl",function($scope, $http) {
	$scope.messages = 
	[
		{
			category: "fire",
			sender: {
				name: "Sansa Stark",
				avartar: "media/imgs/avata-woman.png"
			},
			time: "14:30 7/1",
			content: "Hello, Cindy. I have an emergency. Call me when you have time."
		},
		{
			category: "fire",
			sender: {
				name: "Rob Stark",
				avartar: "media/imgs/avata-man.png"
			},
			time: "13:30 7/1",
			content: "Hello, Cindy. Here is the emergency. I really need your response shortly."
		},
		{
			category: "goodNews",
			sender: {
				name: "Arya Stark",
				avartar: "media/imgs/avata-woman.png"
			},
			time: "8:30 7/3",
			content:"Hello, Cindy. Here is the good news for you. We made great progress in the project.  Here is the good news."
   },
		{
			category: "info",
			sender: {
				name: "Bryan Stark",
				avartar: "media/imgs/avata-woman.png"
			},
			time: "9:30 7/3",
			content: "here is the information"
		}
	];

	$scope.getCategoryImg = function (category) {
		switch(category) {
			case "fire":
				return "media/imgs/fire.png";
			case "blocker":
				return "media/imgs/blocker.png";
			case "goodNews":
				return "media/imgs/goodnews.png";
			case "info":
				return "media/imgs/info.png";
		}
	};

	$scope.getMessages = function (category) {
		if ($scope.filterCategory && $scope.filterCategory == category) {
			$scope.filterCategory = ""
		} else {
			$scope.filterCategory = category
		}
	};

	$scope.getActive = function (category) {
		return category == $scope.filterCategory
	}

	$scope.compose=function() {
		location.replace("https://flashbulb-dev.azurewebsites.net/send.html");
	}
	//below are for send page
	$scope.selectedCategory = "fire";
	$scope.placeholderMessage = "What's the emergency?"
	$scope.setCategory = function(category) {
		$scope.selectedCategory = category;
		$scope.placeholderMessage = "What's the emergency?"
		switch(category) {
			case "fire":
				$scope.placeholderMessage = "What's the emergency?"
				break;
			case "blocker":
				$scope.placeholderMessage = "What's the blocker?"
				break;
			case "goodNews":
				$scope.placeholderMessage = "What's the good news you want to share?"
				break;
			case "info":
				$scope.placeholderMessage = "What's the infomation you want to share?"
		}
		
	};
	$scope.isActiveForSend = function(category) {
		return category == $scope.selectedCategory
	};
	$scope.gotoIndex = function() {
		location.replace("https://flashbulb-dev.azurewebsites.net/index.html")
	}

	$scope.sendMessage = function() {
		$scope.sendingMessage.time = new Date()
		$http.post('/sendMessage', $scope.sendingMessage)
		.success(function(res) {
			console.log(res);
			location.replace("https://flashbulb-dev.azurewebsites.net/index.html");
		})
	}
})