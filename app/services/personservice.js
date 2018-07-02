angular
  .module('sigfigRFTApp')
  .factory('personservice', personservice);

function personservice($http) {
  var service = {
      create: create,
      _delete: _delete,
      get: get,
      update: update
  };

  return service;

  ////////////

  function create(person) {
    return $http({
      method: 'POST',
      url: '/person',
      data: person
    }).then(createComplete)

    function createComplete(response) {
      return response.data.result;
    };
  };

  function _delete(person_id) {
    return $http({
      method: 'DELETE',
      url: '/person/' + person_id
    }).then(_deleteComplete);

    function _deleteComplete(response) {
      return response.data.result;
    };
  };

  function get(company_id) {
    return $http({
      method: 'GET',
      url: '/companies/' + company_id + '/people'
    }).then(getComplete);

    function getComplete(response) {
      return response.data;
    };
  };

  function update(data, person_id) {
    return $http({
      method: 'PUT',
      url: '/person/' + person_id,
      data: data
    }).then(updateComplete);

    function updateComplete(response) {
      return response.data.result;
    };
  };
};