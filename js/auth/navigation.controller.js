idlezoo.controller('navigation',

function($rootScope, $http, $state, apiUrl) {
	
	var self = this;

	self.tab = function(route) {
		console.log('route', route);
	};

	var authenticate = function(callback) {
		$http.get(apiUrl + '/user', {withCredentials: true}).then(function(response) {
			if (response.data.name) {
				$rootScope.authenticated = true;
			} else {
				$rootScope.authenticated = false;
			}
			callback && callback();
		}, function() {
			$rootScope.authenticated = false;
			callback && callback();
		});

	}

	authenticate();

	self.credentials = {};
	self.login = function() {
		$http.post(apiUrl + '/login', $.param(self.credentials), {
			headers : {
				"content-type" : "application/x-www-form-urlencoded"
			},
 			withCredentials: true
		}).then(function() {
			authenticate(function() {
				if ($rootScope.authenticated) {
					console.log("Login succeeded")
					$state.go('app');
					self.error = false;
					$rootScope.authenticated = true;
				} else {
					console.log("Login failed with redirect")
					$state.go('login');
					self.error = true;
					$rootScope.authenticated = false;
				}
			});
		}, function() {
			console.log("Login failed")
			$state.go('login');
			self.error = true;
			$rootScope.authenticated = false;
		})
	};
	
	self.signup = function() {
		$http.post(apiUrl + '/createuser', $.param(self.credentials), {
			headers : {
				"content-type" : "application/x-www-form-urlencoded"
			},
 			withCredentials: true
		}).then(function() {
			self.login();
		}, function() {
			console.log("Signup failed")
			$state.go('signup');
			self.error = true;
			$rootScope.authenticated = false;
		});
	};

	self.logout = function() {
		$http.post(apiUrl + '/logout', {withCredentials: true}).finally(function() {
			$rootScope.authenticated = false;
			$state.go('app');
		});
	}
		
});
