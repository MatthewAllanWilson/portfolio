(function(module) {
  var projectsController = {};

  projectsController.index = function (ctx, next) {
    // Post.fetchAll(projectView.initIndexPage);
    projectView.index(ctx.projects);

    $('section').hide();
    $('#projects').fadeIn();
  };

  projectsController.loadByTitle = function(ctx, next) {
    var projectData = function(projectByTitle) {
      ctx.projects = projectByTitle;
      next();
    };
//STILL NEED TO CHANGE 'AUTHOR'
    Post.findWhere('author', ctx.params.projectTitle.replace('+', ' '), projectData);
  };




  module.projectsController = projectsController;
})(window);
