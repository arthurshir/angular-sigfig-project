function CompanyItemController($http) {
  var ctrl = this;

  ctrl.editMode = false;
  ctrl.handleModeChange = handleModeChange;
  ctrl.$onInit = $onInit;
  ctrl.reset = reset;
  ctrl.showPersonList = false;
  ctrl.toggleShowPersonList = toggleShowPersonList;
  ctrl.update = update;

  ////////////
  
  function handleModeChange() {
    ctrl.editMode = !ctrl.editMode;
  };

  function $onInit() {
    ctrl.companyCopy = angular.copy(ctrl.company);
  };

  function reset() {
    ctrl.company = angular.copy(ctrl.companyCopy);
    ctrl.handleModeChange();
  };

  function toggleShowPersonList() {
    ctrl.showPersonList = !ctrl.showPersonList;
  };

  function update() {
    var data = {
      'name': ctrl.company.name,
      'address': ctrl.company.address,
      'revenue': ctrl.company.revenue,
      'phone': ctrl.company.phone
    }
    $http({
      method: 'PUT',
      url: '/companies/' + ctrl.company._id,
      data: data
    }).then(function (response){
      ctrl.companyCopy = angular.copy(ctrl.company);
      ctrl.handleModeChange();
    },function (error){
      console.log(error);
    });
  };
}

angular.module('sigfigRFTApp').component('companyItem', {
  templateUrl: 'app/company/companyItem.html',
  controller: CompanyItemController,
  bindings: {
    company: '<',
    onUpdate: '&'
  }
});