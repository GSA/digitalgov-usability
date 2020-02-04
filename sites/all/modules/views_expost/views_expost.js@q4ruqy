(function($) {

Drupal.behaviors.viewsExPost = {
  attach: function(context, settings) {
    for (var formID in settings.viewsExPost.exPostForms) {
      var theView = $(settings.viewsExPost.exPostForms[formID], context);

      $('.pager a', theView).click(function(event) {
        event.preventDefault();

        var newPageNum = 1;
        // Get the page number from the URL of the link
        newPageNum = decodeURIComponent(this.href.substring(this.href.indexOf('&page=') + 6));
        $('#' + formID).attr('action', $('#' + formID).attr('action') + '?page=' + newPageNum);

        //$('.expost-pager', theView).val(newPageNum);
        jQuery('.form-submit', $('#' + formID)).click();
      });
    }
  }
};

})(jQuery);

/**
 *  TODO:
 *  1- Multiple views (with ExPost) on same page
 *  2- pager id (with multiple pagers)
 */