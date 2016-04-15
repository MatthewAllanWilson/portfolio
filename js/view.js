var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(){
    console.log($(this).data('content'));
    $('#about').hide();
    $('#main-page').hide();
    $("#" + $(this).data('content')).fadeIn();
  });
};

projectView.handleMainNav();
