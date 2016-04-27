(function(module) {
  var repoView = {};

  var render = function(repo) {
    var template = Handlebars.compile($('#repo-template').text());
    return template(repo);
  };

  repoView.index = function() {
    $('#repos-display').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
