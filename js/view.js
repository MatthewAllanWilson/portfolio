(function(module){

  var projectView = {};

  projectView.handleMainNav = function() {
    $('.main-nav').on('click', '.tab', function(){
      $('section').hide();
      $('#' + $(this).data('content')).fadeIn();
      console.log($(this).data('content'));
    });
  };

  projectView.initIndexPage = function () {
    Post.all.forEach(function(a){
      $('#projects').append(a.toHtml());
    });
  };

  projectView.handleMainNav();

  module.projectView = projectView;

})(window);
