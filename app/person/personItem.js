function PersonItemController($http, personservice) {
  var ctrl = this;

  ctrl._delete = _delete;
  ctrl.editMode = false;
  ctrl.handleModeChange = handleModeChange;
  ctrl.$onInit = $onInit;
  ctrl.reset = reset;
  ctrl.update = update;

  ////////////

  function _delete() {
    ctrl.onDelete({'person': ctrl.person});
  };

  function handleModeChange() {
    ctrl.editMode = !ctrl.editMode;
  };
  
  function $onInit() {
    ctrl.personCopy = angular.copy(ctrl.person);
  };

  function reset() {
    ctrl.person = angular.copy(ctrl.personCopy);
    ctrl.handleModeChange();
  };

  function update() {
    var data = {
      'name': ctrl.person.name,
      'email': ctrl.person.email
    };
    personservice.update(data, ctrl.person._id)
      .then(function(data) {
        ctrl.personCopy = angular.copy(ctrl.person);
        ctrl.handleModeChange();
      });
  };
}

angular.module('sigfigRFTApp').component('personItem', {
  templateUrl: 'app/person/personItem.html',
  controller: PersonItemController,
  bindings: {
    person: '<',
    onDelete: '&'
  }
});