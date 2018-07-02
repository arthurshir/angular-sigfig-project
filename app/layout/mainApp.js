function MainAppController($scope, $element, $attrs, $http, companyservice, personservice) {
  var ctrl = this;

  ctrl.createCompany = createCompany;
  ctrl.createPerson = createPerson;
  ctrl.loadData = loadData;
  ctrl.showAddCompany = false;
  ctrl.showAddPerson = false;
  ctrl.toggleShowAddCompany = toggleShowAddCompany;
  ctrl.toggleShowAddPerson = toggleShowAddPerson;

  ////////////

  function createCompany({'company': company}) {
    companyservice.create(company)
      .then(function (result) {
        ctrl.loadData();
      });
  };

  function createPerson({'person': person}) {
    personservice.create(person)
      .then(function (result) {
        ctrl.loadData();
      });
  };

  function loadData() {
    companyservice.get()
      .then( function (data) {
        ctrl.companies = data;
      });
  };

  function toggleShowAddCompany() {
    ctrl.showAddPerson = false;
    ctrl.showAddCompany = !ctrl.showAddCompany;
  };

  function toggleShowAddPerson() {
    ctrl.showAddCompany = false;
    ctrl.showAddPerson = !ctrl.showAddPerson
  };

  ////////////

  ctrl.loadData();
}

angular.module('sigfigRFTApp').component('mainApp', {
  templateUrl: 'app/layout/mainApp.html',
  controller: MainAppController
});