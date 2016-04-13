var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(){
    console.log($(this).data('content'));
    $('.tab-content').hide();
    $("#" + $(this).data('content')).show();
  });
};
projectView.handleMainNav();
