(function(module) {
  var homeController = {};

  homeController.index = function () {
    Post.fetchAll(projectView.initIndexPage);

    $('section').hide();
    $('#whole-page').children().fadeIn();
  };
  module.homeController = homeController;
})(window);
