function CompanyListController($scope, $element, $attrs, $http) {
  var ctrl = this;
}

angular.module('sigfigRFTApp').component('companyList', {
  templateUrl: 'app/company/companyList.html',
  controller: CompanyListController,
  bindings: {
    companies: '=',
  }
});