// var posts = [];
(function(module){

  function Post (obj){
    this.title = obj.title;
    this.date = obj.date;
    this.description = obj.description;
    this.link = obj.link;
    this.image = obj.image;
  }

  Post.all = [];

  Post.prototype.toHtml = function() {
    var $source = $('#project-template').html();
    var template = Handlebars.compile($source);

    return template(this);
  };

  Post.loadAll = function(dataPassedIn) {
    dataPassedIn.forEach(function(ele) {
      Post.all.push(new Post(ele));
    });
  };

  Post.fetchAll = function (){
    if (localStorage.projects){
      $.ajax({
        type: 'HEAD',
        url: '../data/projects.json'
      }).done(function(xhr, message, data) {
        var eTag = xhr.getResponseHeaders('etag');
        if(eTag = localStorage.eTag) {
          projectView.initIndexPage();
        } else {
          Post.loadAll(JSON.parse(localStorage.postRawData));
        }
      });
    } else {
      $.getJSON('../data/projects.json', function(data){
        Post.loadAll(data);
        localStorage.setItem('postRawData', JSON.stringify(data));
        projectView.initIndexPage();
      });
    }
  };

  module.Post = Post;

})(window);
