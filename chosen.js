(function($) {
  Drupal.behaviors.chosen = {
    attach: function(context, settings) {
      var minWidth = settings.chosen.minimum_width;
      var minOptions = settings.chosen.minimum;
      //define options
      var options = {};
      options.search_contains = settings.chosen.search_contains;
      options.placeholder_text_multiple = settings.chosen.placeholder_text_multiple;
      options.placeholder_text_single = settings.chosen.placeholder_text_single;
      options.no_results_text = settings.chosen.no_results_text;
      options.inherit_select_classes = true;

      $(settings.chosen.selector, context)
        .not('#field-ui-field-overview-form select, #field-ui-display-overview-form select') //disable chosen on field ui
        .each(function() {
          if ($(this).find('option').size() >= minOptions || minOptions == 'Always Apply') {
            options = $.extend(options, {
              width: (($(this).width() < minWidth) ? minWidth : $(this).width()) + 'px'
            });
            $(this).chosen(options);
          }
      });

      //enable Chosen for widgets
      $('select.chosen-widget', context).each(function() {
        options = $.extend(options, {
          width: (($(this).width() < minWidth) ? minWidth : $(this).width()) + 'px'
        });
        $(this).chosen(options);
      });
    }
  };
})(jQuery);
