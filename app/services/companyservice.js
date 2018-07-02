angular
  .module('sigfigRFTApp')
  .factory('companyservice', companyservice);

function companyservice($http) {
  var service = {
      create: create,
      get: get,
      update: update
  };

  return service;

  ////////////

  function create(company) {
    return $http({
      method: 'POST',
      url: '/companies',
      data: company
    }).then(createComplete);

    function createComplete(response) {
      return response.data;
    };
  };

  function get() {
    return $http({
      method: 'GET',
      url: '/companies'
    }).then(getComplete);

    function getComplete(response) {
      return response.data;
    };
  };

  function update(data, company_id) {
    return $http({
      method: 'PUT',
      url: '/companies/' + ctrl.company._id,
      data: data
    }).then(updateComplete);

    function updateComplete(response) {
      return response.data.result;
    };
  };
};