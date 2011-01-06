/*!
 * jQuery Suggest
 *
 * Copyright 2010 Kevin Sylvestre
 */

(function ($) {

  $.fn.suggest = function(data, options) {
    
    var settings = {
      delay: 400,
      maximum: 5,
    };
    
    if (options) ($.extend(settings, options));
    
    var $input = $(this);
    var $suggestions = $('<div class="suggestions"></div>');
    
    $input.attr("autocomplete", "off");
    
    for (var i = 0; i < data.length; i++) {
      var value = data[i];
      var $suggestion = $('<div class="suggestion">' + value + '</div>');
      $suggestions.append($suggestion);
    }
    
    $input.after($suggestions);
    
    $suggestions.hide();
    
    $input.focus(function () {
      $suggestions.show();
    });
    
    $input.blur(function () {
      $suggestions.hide();
    });
    
    $input.keypress(function (event) {
      switch(event.keyCode || event.which) {
        case 13: // return
          break;
        case 38: // down
          break;
        case 40: // up
          break;
      }
    });
    
  };
    
}) (jQuery);