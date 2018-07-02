function addCompanyFormController() {
  var ctrl = this;

  ctrl.cancel = cancel
  ctrl.company = {}
  ctrl.create = create

  ////////////

  function cancel() {
    ctrl.onCancel();
  };

  function create() {
    ctrl.onCreate({'company': ctrl.company});
    ctrl.company = {}
    ctrl.onCancel();
  };
}

angular.module('sigfigRFTApp').component('addCompanyForm', {
  templateUrl: 'app/company/addCompanyForm.html',
  controller: addCompanyFormController,
  bindings: {
    onCancel: '&',
    onCreate: '&'
  }
});