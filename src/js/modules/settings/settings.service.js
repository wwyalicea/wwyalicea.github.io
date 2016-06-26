/**=========================================================
 * Module: SettingsService
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('naut')
        .service('settings', settings);

    settings.$inject = ['$rootScope', '$localStorage', '$translate', '$timeout'];

    function settings($rootScope, $localStorage, $translate, $timeout) {
      /*jshint validthis:true*/
      var self = this;

      self.init = init;
      self.availableThemes = availableThemes;
      self.setTheme = setTheme;

      /////////////////

      self.themes = [
        {name: 'primary',   sidebar: 'bg-white',   sidebarHeader: 'bg-primary bg-light',   brand: 'bg-primary',   topbar:  'bg-primary'},
        {name: 'purple',    sidebar: 'bg-white',   sidebarHeader: 'bg-purple bg-light',    brand: 'bg-purple',    topbar:  'bg-purple'},
        {name: 'success',   sidebar: 'bg-white',   sidebarHeader: 'bg-success bg-light',   brand: 'bg-success',   topbar:  'bg-success'},
        {name: 'warning',   sidebar: 'bg-white',   sidebarHeader: 'bg-warning bg-light',   brand: 'bg-warning',   topbar:  'bg-warning'},
        {name: 'info',      sidebar: 'bg-white',   sidebarHeader: 'bg-info bg-light',      brand: 'bg-info',      topbar:  'bg-info'},
        {name: 'danger',    sidebar: 'bg-white',   sidebarHeader: 'bg-danger bg-light',    brand: 'bg-danger',    topbar:  'bg-danger'},
        {name: 'pink',      sidebar: 'bg-white',   sidebarHeader: 'bg-pink bg-light',      brand: 'bg-pink',      topbar:  'bg-pink'},
        { name: 'amber', sidebar: 'bg-white', sidebarHeader: 'bg-amber bg-light', brand: 'bg-amber', topbar: 'bg-amber' },
        { name: 'cfse', sidebar: 'bg-white', sidebarHeader: 'bg-cfse bg-light', brand: 'bg-cfse', topbar: 'bg-cfse' },
        { name: 'cream', sidebar: 'bg-white', sidebarHeader: 'bg-cream bg-light', brand: 'bg-cream', topbar: 'bg-cream' },
        { name: 'neutral', sidebar: 'bg-white', sidebarHeader: 'bg-neutral bg-light', brand: 'bg-neutral', topbar: 'bg-neutral' },
        { name: 'gray', sidebar: 'bg-white', sidebarHeader: 'bg-gray bg-light', brand: 'bg-gray', topbar: 'bg-gray' },
      ];

      function init() {
        // Global settings
        $rootScope.app = {
          name:          'CFSE',
          description:   'Portal de Transacciones',
          year:          new Date().getFullYear(),
          views: {
            animation: 'ng-fadeInLeft2'
          },
          layout: {
            isFixed: false,
            isBoxed: false,
            isDocked: false
          },
          sidebar: {
            isOffscreen: true,
            isMini: false,
            isRight: false
          },
          footer: {
            hidden: false
          },
          themeId: 0,
          // default theme
          theme: {
            name:          'primary',
            sidebar:       'bg-white',
            sidebarHeader: 'bg-primary bg-light',
            brand:         'bg-primary',
            topbar:        'bg-primary'
		  },
		  isLoggedIn: false,
		  displayHistory: false,
        };

        $rootScope.treeCtrl = {};

        $rootScope.transactions = [
          {label: 'Certificación de Deuda'},
          {label: 'Certificación de Sistema de Experiencia'},
          {label: 'Certificación de Sistema de Mérito'},
          {label: 'Certificación de Vigencia'},
          {label: 'Declaración de Nómina'}
        ];

        var debtCert = $rootScope.transactions[0];
        debtCert.children = [];

        var policyEx = {label: 'Póliza 123456'};
        policyEx.children = ['2008', '2009', '2010'];

        debtCert.children.push(policyEx);

		$rootScope.createNewCase = [{
			label: 'Creación de Caso Nuevo',
			onSelect: function (branch) {
				$rootScope.app.displayCreateNewCasePanels = !$rootScope.app.displayCreateNewCasePanels;
			}
		}];
      }

      function availableThemes() {
        return self.themes;
      }

      function setTheme(idx) {
        $rootScope.app.theme = this.themes[idx];
      }

    }


})();
