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

	  vm.historial = [
		{doc_id: '2016082E', patrono: 'SSS', date_created: '2016' },
		{doc_id: '2015032E', patrono: 'SSS', date_created: '2015'},
		{doc_id: '2016022E', patrono: 'Wovenware', date_created: '2016'},
		{doc_id: '2014082E', patrono: 'MMM', date_created: '2014'},
		{doc_id: '2013082E', patrono: 'Claro', date_created: '2013'},
	  ];

	  vm.sort_patrono = 0;
	  vm.sort_date= 0;
	  vm.sort_doc = 0;

	  vm.changeSort = function (currentState, id) {
		  switch (currentState) {
			  case -1:
			  	currentState += 2;
				break;
			  case 0:
			   	currentState++;
				break;
			  case 1:
			  	currentState -= 2;
				break;
			  default: currentState = 0;
		  }
		  if (id == 1) {
			  vm.sort_patrono = currentState;
			  vm.sortBy(id, currentState);
		  }
		  else if (id == 2) {
			  vm.sort_date = currentState;
			  vm.sortBy(id, currentState);
		  }
		  else {
			  vm.sort_doc = currentState;
			  vm.sortBy(id, currentState);
		  }
	  }

	  vm.property = null;

	  vm.sortBy = function (id, currentState) {
		  var order = currentState >= 0 ? '' : '-';
		  switch (id) {
			  case 1:
				vm.property = order + 'patrono';
				break;
			  case 2:
			  	vm.property = order + 'date_created';
				break;
			  case 3:
			  	vm.property = order + 'doc_id'
		  }
	  };
	//   vm.polizas = [
	// 	  {id: 1, pNum: '123456', isCollapsed: true, certifications: [
	// 		  {date: '2013'},
	// 		  {date: '2014'},
	// 		  {date: '2015'},
	// 		  {date: '2016'}
	// 	  ]},
	// 	  {id: 2, pNum: 'x123er', isCollapsed: true, certifications: [
	// 		  {date: '2013'},
	// 		  {date: '2014'},
	// 		  {date: '2015'}
	// 	  ]},
	// 	  {id: 3, pNum: '987654', isCollapsed: true, certifications: [
	// 		  {date: '2012'},
	// 		  {date: '2013'},
	// 		  {date: '2014'}
	// 	  ]}
	//   ];
	  //
	//   vm.patronos = [
	// 	{id: 1, name: 'SSS', isCollapsed: true, polizas: vm.polizas},
	// 	{id: 2, name: 'Wovenware', isCollapsed: true, polizas: vm.polizas},
	// 	{id: 3, name: 'Claro', isCollapsed: true, polizas: vm.polizas}
	//   ];
    }

})();
