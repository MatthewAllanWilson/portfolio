//repoController.index;
(function(module) {
  var repoController = {};

  repoController.index = function () {
    $('section').hide();

    repos.requestRepos(repoView.index);
    // $('#about').fadeIn();
  };
  module.repoController = repoController;
})(window);
