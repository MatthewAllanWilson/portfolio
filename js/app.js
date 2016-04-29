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

  Post.fetchAll = function (next){
    if (localStorage.postRawData){
      $.ajax({
        type: 'HEAD',
        url: '/data/projects.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if(!localStorage.eTag || eTag !== localStorage.eTag) {
            localStorage.eTag = eTag;
            Post.loadAll(JSON.parse(localStorage.postRawData));
            next();
          } else {
            Post.loadAll(JSON.parse(localStorage.postRawData));
            next();
          }
        }
      });
    } else {
      $.getJSON('/data/projects.json', function(data){
        Post.loadAll(data);
        localStorage.setItem('postRawData', JSON.stringify(data));
        next();
      });
    }
  };

  Post.findWhere = function () {
    //need to find the project title
  }

  module.Post = Post;

})(window);
