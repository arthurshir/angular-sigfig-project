function PersonListController(personservice) {
  var ctrl = this;

  ctrl.deletePerson = deletePerson;
  ctrl.loadData = loadData;
  ctrl.$onInit = $onInit;

  ////////////

  function deletePerson({'person': person}) {
    personservice._delete(person._id)
      .then(function(data) {
        ctrl.loadData();
      });
  };

  function loadData() {
    personservice.get(ctrl.company._id)
      .then(function(data) {
        ctrl.people = data;
      });
  };

  function $onInit() {
    ctrl.loadData();
  };
}

angular
  .module('sigfigRFTApp')
  .component('personList', {
    templateUrl: 'app/person/personList.html',
    controller: PersonListController,
    bindings: {
      company: '='
    }});