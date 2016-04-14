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

portfolioData.forEach(function(ele) {
  posts.push(new Post(ele));
});

posts.forEach(function(a){
  $('#projects').append(a.toHtml());
});
