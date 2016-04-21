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
        var optionTag = '<option value="' + val + '">' + val + '</option>';
        $('#project-filter').append(optionTag);
      }
    });
  };

  projectView.handleFilter = function() {
    console.log('handleFilter running');
    $('#project-filter').on('change', function() {
      console.log('change registered');
      if ($(this).val()) {
        $('article').hide();
        $('article[data-category="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
    });
  };
  projectView.handleFilter();

  projectView.initIndexPage = function () {
    Post.all.forEach(function(a){
      $('#projects').append(a.toHtml());
    });
  };

  projectView.handleMainNav();

  module.projectView = projectView;

})(window);
