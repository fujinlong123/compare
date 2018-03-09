(function ($) {

    var JqueryTree = function (el, options) {
      this.options = options;
      this.$el = $(el);
      this.$el_ = this.$el.clone();
      this.timeoutId_ = 0;
      this.timeoutFooter_ = 0;
      this.init();
    };


    JqueryTree.prototype.init = function () {
      this.$el.find('li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');

      this.$el.find('li.parent_li > span').on('click', function (e) {

        var children = $(this).parent('li.parent_li').find(' > ul > li');

        if (children.is(":visible")) {

          children.hide('fast');
          $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');

        } else {
          children.show('fast');

          $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');

        }
        e.stopPropagation();

      });
    }

    JqueryTree.DEFAULTS = {};

    $.fn.jqueryTree = function (option) {
      var value,
        args = Array.prototype.slice.call(arguments, 1);

      this.each(function () {
        var $this = $(this),
          data = $this.data('jqueryTree'),
          options = $.extend({}, JqueryTree.DEFAULTS, $this.data(),
            typeof option === 'object' && option);

        if (typeof option === 'string') {
          if ($.inArray(option, allowedMethods) < 0) {
            throw new Error("Unknown method: " + option);
          }

          if (!data) {
            return;
          }

          value = data[option].apply(data, args);

          if (option === 'destroy') {
            $this.removeData('jqueryTree');
          }
        }

        if (!data) {
          $this.data('jqueryTree', (data = new JqueryTree(this, options)));
        }
      });

      return typeof value === 'undefined' ? this : value;
    };
  })(jQuery);