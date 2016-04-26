(function(module) {
  var projectsController = {};

  projectsController.index = function () {
    Post.fetchAll(projectView.initIndexPage);

    $('section').hide();
    $('#projects').fadeIn();
  };
  module.projectsController = projectsController;
})(window);
