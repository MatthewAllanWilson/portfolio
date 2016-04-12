var posts = [];

function Post (obj){
  this.title = obj.title;
  this.date = obj.date;
  this.description = obj.description;
  this.link = obj.link;
}

Post.prototype.toHtml = function() {
  var $newPortfolioPiece = $('article.template').clone();
  $newPortfolioPiece.find('.title', this.title);
  $newPortfolioPiece.find('.date', this.date);
  $newPortfolioPiece.find('.description', this.description);
  $newPortfolioPiece.find('.link', this.link);

  $newPortfolioPiece.removeClass('template');
  return $newPortfolioPiece;
};

portfolioData.forEach(function(ele) {
  posts.push(new Post(ele));
});

posts.forEach(function(a){
  $('#projects').append(a.toHtml());
});
