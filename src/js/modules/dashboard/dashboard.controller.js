/**=========================================================
 * Module: DashboardController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('DashboardController', DashboardController);

    function DashboardController($rootScope) {
      $rootScope.showUsername = false;
      $rootScope.sessionText = 'Acceder';
      var vm = this;

      //vm.title = 'Naut - Bootstrap + AngularJS (Seed Project)';
      vm.text = 'This project is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.' +
                    'The seed app doesnt do much, just shows how to wire some controllers and views together.';

      vm.hpanel = [true, false, false, false, false];

      vm.views = {
        form: 'form',
        years: 'years'
      };

      vm.currentView = null;

      vm.download = function () {
        window.open('sample.pdf');
      };

      vm.setCurrentView = function (view) {
        vm.currentView = view;
      };

      vm.accordion = {
        patron: true,
        employee: true
      };

	  vm.goToWizard = false;

	  vm.polizas = [
		  {id: 1, pNum: '123456', isCollapsed: true, certifications: [
			  {date: '2013'},
			  {date: '2014'},
			  {date: '2015'},
			  {date: '2016'}
		  ]},
		  {id: 2, pNum: 'x123er', isCollapsed: true, certifications: [
			  {date: '2013'},
			  {date: '2014'},
			  {date: '2015'}
		  ]},
		  {id: 3, pNum: '987654', isCollapsed: true, certifications: [
			  {date: '2012'},
			  {date: '2013'},
			  {date: '2014'}
		  ]}
	  ];

	  vm.patronos = [
		{id: 1, name: 'SSS', polizas: vm.polizas},
		{id: 2, name: 'Wovenware', polizas: vm.polizas},
		{id: 3, name: 'Claro', polizas: vm.polizas}
	  ];
    }

})();
