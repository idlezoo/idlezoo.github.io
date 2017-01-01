idlezoo.controller('topincome', function($rootScope, $http, $state) {
	var self = this;
	$http.get('https://idlezoo.herokuapp.com/top/income').then(function(response) {
		self.top = response.data;
	});
});

idlezoo.controller('toptime', function($rootScope, $http, $state) {
	var self = this;
	$http.get('https://idlezoo.herokuapp.com/top/championTime').then(function(response) {
		self.top = response.data;
	});
});

idlezoo.controller('topwins', function($rootScope, $http, $state) {
	var self = this;
	$http.get('https://idlezoo.herokuapp.com/top/wins').then(function(response) {
		self.top = response.data;
	});
});

idlezoo.controller('toplosses', function($rootScope, $http, $state) {
	var self = this;
	$http.get('https://idlezoo.herokuapp.com/top/losses').then(function(response) {
		self.top = response.data;
	});
});
