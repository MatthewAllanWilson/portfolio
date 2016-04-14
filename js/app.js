var posts = [];

function Post (obj){
  this.title = obj.title;
  this.date = obj.date;
  this.description = obj.description;
  this.link = obj.link;
}

Post.prototype.toHtml = function() {
  var $source = $('#project-template').html();
  var template = Handlebars.compile($source);
  return template(this);
};

// Post.prototype.toHtml = function() {
//   var $newPortfolioPiece = $('article.template').clone();
//   $newPortfolioPiece.removeClass('template');
//   $newPortfolioPiece.find('.title').html(this.title);
//   $newPortfolioPiece.find('.date').html(this.date);
//   $newPortfolioPiece.find('.description').html(this.description);
//   $newPortfolioPiece.find('.link').html(this.link);
//   $newPortfolioPiece.append('<hr>');
//
//   return $newPortfolioPiece;
// };

portfolioData.forEach(function(ele) {
  posts.push(new Post(ele));
});

posts.forEach(function(a){
  $('#projects').append(a.toHtml());
});
