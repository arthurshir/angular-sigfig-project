function addPersonFormController() {
  var ctrl = this;

  ctrl.cancel = cancel;
  ctrl.create = create;
  ctrl.person = {};

  ////////////

  function create() {
    ctrl.onCreate({'person': ctrl.person});
    ctrl.person = {};
    ctrl.onCancel();
  };

  function cancel() {
    ctrl.onCancel();
  }; 
}

angular.module('sigfigRFTApp').component('addPersonForm', {
  templateUrl: 'app/person/addPersonForm.html',
  controller: addPersonFormController,
  bindings: {
    onCancel: '&',
    onCreate: '&',
    companies: '<'
  }
});