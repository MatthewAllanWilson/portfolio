(function(module) {
  var homeController = {};

  homeController.index = function () {
    Post.fetchAll(projectView.initIndexPage);

    $('section').hide();
    $('#' + $(this).data('content')).fadeIn();
  };
  module.homeController = homeController;
})(window);
