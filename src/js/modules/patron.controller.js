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
        patron: false,
        employee: false
      };
    }

})();
