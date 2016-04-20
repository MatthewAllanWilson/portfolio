(function(module){

  var projectView = {};

  projectView.handleMainNav = function() {
    $('.main-nav').on('click', '.tab', function(){
      //I want this to hide everything on the page initially, then display only the sections that have been selected, including a home papge option that has the entire page selected.  However, I can only get it to work when I turn off all the individual sections.
      // $('#whole-page').hide();
      $('#main-page').hide();
      $('#about').hide();
      $('#projects').hide();
      $('#' + $(this).data('content')).fadeIn();
      console.log($(this).data('content'));
    });
  };

  projectView.handleMainNav();

  module.projectView = projectView;

})(window);
