'use strict'
angular.module('batApp')
.controller('LoginController', function ($localStorage, getDataFactory, $state) {
	this.submit = function (data) {
	  var url = '/admin/login'
	  getDataFactory.sendData(url).save(data).$promise
	  .then((response) => {
		  if (!response.error) {
			  $localStorage.token = response.token
			  $state.go('template')
		  }
	  })
  }
})