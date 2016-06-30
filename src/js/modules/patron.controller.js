/**=========================================================
 * Module: PatrongController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .controller('PatronController', PatronController);

    function PatronController($rootScope) {
      $rootScope.showUsername = true;
      $rootScope.sessionText = 'Salir';

      var vm = this;

      vm.year = 0;

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

      vm.setYear = function (year) {
        vm.year = year;
      }

      vm.accordion = {
        patron: true,
        employee: false
      };
	  vm.step = 1;

	  vm.nextStep = function (step) {
		  vm.step = step;
		  if (step == 1) {
			  vm.accordion.patron = true;
			  vm.accordion.employer = false;
		  }
		  else if (step == 2) {
			  vm.accordion.patron = false;
			  vm.accordion.employer = true;
		  }
		//   return vm.step;
	  }
    }

})();
