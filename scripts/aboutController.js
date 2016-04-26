(function(module) {
  var aboutController = {};

  aboutController.index = function () {
    Post.fetchAll(projectView.initIndexPage);

    $('section').hide();
    $('#' + $(this).data('content')).fadeIn();
  };
  module.aboutController = aboutController;
})(window);
