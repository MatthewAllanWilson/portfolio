//repoController.index;
(function(module) {
  var repoController = {};

  repoController.index = function () {

    repos.requestRepos(repoView.index);
    $('section').hide();
    $('#repos').fadeIn();
  };
  module.repoController = repoController;
})(window);
