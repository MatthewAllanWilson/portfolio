(function(module) {
  var projectsController = {};

  projectsController.index = function () {
    Post.fetchAll(projectView.initIndexPage);

    $('section').hide();
    $('#' + $(this).data('content')).fadeIn();
  };
  module.projectsController = projectsController;
})(window);
