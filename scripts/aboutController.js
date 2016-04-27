(function(module) {
  var aboutController = {};

  aboutController.index = function () {
    // Post.fetchAll(projectView.initIndexPage);

    $('section').hide();
    $('#about').fadeIn();
  };
  module.aboutController = aboutController;
})(window);
