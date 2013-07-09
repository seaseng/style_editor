$(document).ready(function () {

  function updateCSS(selector, property, value) {
    var $element = $(document).find(selector);
    $element.css(property, value);

    // debugger
  };

  $('form#style_editor').on('submit', function(e) {
    e.preventDefault();

    var self = this;
    var selector = $('form#' + self.id + ' input[name=selector]').val();
    var property = $('form#' + self.id + ' input[name=property]').val();
    var value = $('form#' + self.id + ' input[name=value]').val();
    updateCSS(selector, property, value);

    var inputs = $('#style_editor').find('input').not(":last");
    inputs.val('');


  });

});