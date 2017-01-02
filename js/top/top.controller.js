idlezoo.controller('topincome', function($rootScope, $http, $state, apiUrl) {
	var self = this;
	$http.get(apiUrl + '/top/income').then(function(response) {
		self.top = response.data;
	});
});

idlezoo.controller('toptime', function($rootScope, $http, $state, apiUrl) {
	var self = this;
	$http.get(apiUrl + '/top/championTime').then(function(response) {
		self.top = response.data;
	});
});

idlezoo.controller('topwins', function($rootScope, $http, $state, apiUrl) {
	var self = this;
	$http.get(apiUrl + '/top/wins').then(function(response) {
		self.top = response.data;
	});
});

idlezoo.controller('toplosses', function($rootScope, $http, $state, apiUrl) {
	var self = this;
	$http.get(apiUrl + '/top/losses').then(function(response) {
		self.top = response.data;
	});
});
