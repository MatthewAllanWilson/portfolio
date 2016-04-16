var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(){
    // $('#about').hide();
    $('.whole-page').hide();
    $('#' + $(this).data('content')).fadeIn();
    console.log($(this).data('content'));
  });
};

projectView.handleMainNav();
