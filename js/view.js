(function(module){

  var projectView = {};

  projectView.handleMainNav = function() {
    $('.main-nav').on('click', '.tab', function(){
      $('section').hide();
      $('#' + $(this).data('content')).fadeIn();
      // console.log($(this).data('content'));
    });
  };

  projectView.populateFilter = function() {
    $('article').each(function() {
      if (!$(this).hasClass('template')) {
        var val = $(this).attr('data-category');
        console.log('the val variable is ' + val);
        var optionTag = '<option value="' + val + '">' + val + '</option>';
        $('#project-filter').append(optionTag);
        console.log('the optionTag is ' + optionTag);
      }
    });
  };
  // projectView.populateFilter();

  // articleView.handleAuthorFilter = function() {
  //   $('#author-filter').on('change', function() {
  //     if ($(this).val()) {
  //       $('article').hide();
  //       $('article[data-author="' + $(this).val() + '"]').fadeIn();
  //     } else {
  //       $('article').fadeIn();
  //       $('article.template').hide();
  //     }
  //     $('#category-filter').val('');
  //   });
  // };

  projectView.initIndexPage = function () {
    Post.all.forEach(function(a){
      $('#projects').append(a.toHtml());
    });
  };

  projectView.handleMainNav();

  module.projectView = projectView;

})(window);
