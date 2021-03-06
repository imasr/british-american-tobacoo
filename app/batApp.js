'use strict'

angular.module('batApp', ['ui.router', 'ngResource', 'ngStorage', 'ngMaterial', 'angularMoment'])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login')
  $stateProvider
.state('menuTemplate', {
  templateUrl: 'components/template/menuTemplate.html',
  controller: 'TemplateController as template'
})
.state('login', {
  url: '/login',
  templateUrl: 'components/login/login.html',
  controller: 'LoginController as login'
})
.state('menuTemplate.outletViewTable', {
  url: '/outletViewTable',
  templateUrl: 'components/outlets/outletView.html',
  controller: 'viewOutletController as batCtrl'
})
.state('menuTemplate.addOutlet', {
  url: '/addOutlet',
  templateUrl: 'components/addOutlet/addOutlet.html',
  controller: 'addOutletController as addOutletCtrl'
})
.state('menuTemplate.editOutlet', {
  url: '/editOutlet',
  templateUrl: 'components/editOutlet/editOutlet.html',
  controller: 'EditOutletController as editOutletCtrl'
})
.state('menuTemplate.tmeViewTable', {
  url: '/tmeViewTable',
  templateUrl: 'components/tme/tmeView.html',
  controller: 'viewTmeController as viewTmeCtrl'
})
.state('menuTemplate.addTme', {
  url: '/addTme',
  templateUrl: 'components/addTme/addTme.html',
  controller: 'addTmeController as addTmeCtrl'
})
.state('menuTemplate.TmeEdit', {
  url: '/TmeEdit',
  templateUrl: 'components/tmeEdit/tmeEdit.html',
  controller: 'TmeEditController as tmeEditCtrl'
})
.state('menuTemplate.skuViewTable', {
  url: '/skuViewTable',
  templateUrl: 'components/sku/skuView.html',
  controller: 'viewSkuController as viewSkuCtrl'
})
.state('menuTemplate.viewMembership', {
  url: '/viewMembership',
  templateUrl: 'components/membership/viewMembership/membershipView.html',
  controller: 'viewMembershipController as viewMembershipCtrl'
})
.state('menuTemplate.brandViewTable', {
  url: '/brandViewTable',
  templateUrl: 'components/brands/brandView.html',
  controller: 'viewBrandController as viewBrandCtrl'
})
.state('menuTemplate.addBrand', {
  url: '/addBrand',
  templateUrl: 'components/addBrand/addBrand.html',
  controller: 'addBrandController as addBrandCtrl'
})
.state('menuTemplate.editBrand', {
  url: '/editBrand',
  templateUrl: 'components/editBrand/editBrand.html',
  controller: 'EditBrandController as editBrandCtrl'
})
.state('menuTemplate.addSku', {
  url: '/addSku',
  templateUrl: 'components/addSku/addSku.html',
  controller: 'addSkuController as addSkuCtrl'
})
.state('menuTemplate.editSku', {
  url: '/editSku',
  templateUrl: 'components/editSku/editSku.html',
  controller: 'EditSkuController as editSkuCtrl'
})
})
