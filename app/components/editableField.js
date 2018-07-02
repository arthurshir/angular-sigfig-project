function EditableFieldController($scope, $element, $attrs) {
  var ctrl = this;

  ctrl.handleModeChange = handleModeChange;
  ctrl.$onInit = $onInit;

  ////////////

  function handleModeChange() {
    if (ctrl.editMode) {
      ctrl.onUpdate({value: ctrl.fieldValue});
      ctrl.fieldValueCopy = ctrl.fieldValue;
    }
  };

  function $onInit() {
    if (!ctrl.fieldType) {
      ctrl.fieldType = 'text';
    }
  };
}

angular.module('sigfigRFTApp').component('editableField', {
  templateUrl: 'app/components/editableField.html',
  controller: EditableFieldController,
  bindings: {
    fieldValue: '=',
    field: '<',
    fieldType: '@?',
    editMode: '<',
  }
});