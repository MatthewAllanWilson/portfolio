var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(){
    $('#about').hide();
    $('#main-page').hide();
    $("#" + $(this).data('content')).fadeIn();
  });
};

projectView.handleMainNav();
