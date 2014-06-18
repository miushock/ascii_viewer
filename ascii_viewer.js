if (AsciiViewer == null || typeof(AsciiViewer)!= "object"){
  var AsciiViewer = {}
}

//the viewer object
AsciiViewer.viewer = null;

//constructor of viewer object
AsciiViewer.Viewer = function(){
  this.articles = [];
  this.current_article = 0;
  this.total_articles = 0;
  this.bind_controls();
}

AsciiViewer.Viewer.prototype.loadNext = function () {
  if (this.current_article < this.articles.length-1) {
    this.current_article ++;
    this.refresh();
  }
}

AsciiViewer.Viewer.prototype.loadPrev = function () {
  if (this.current_article > 0) {
    this.current_article --;
    this.refresh();
  }
}

AsciiViewer.Viewer.prototype.refresh = function () {
  alert (this.current_article);
  if (this.articles.length > 0){
    var ascii_source = this.articles[this.current_article].content;
    var html_target = Opal.Asciidoctor.$render(ascii_source, Opal.hash2(['attributes'], {"attributes":['showtitle']}));
    $('#view-port', '#AsciiViewer').html(html_target);
  }
}

AsciiViewer.Viewer.ControlFunctions = {
  nextArticle:function(viewer){
    viewer.loadNext();
  },

  prevArticle:function(viewer){
    viewer.loadPrev();
  }
}
AsciiViewer.Viewer.prototype.bind_controls = function(){
  controlFunctions = AsciiViewer.Viewer.ControlFunctions;
  viewer = this;
  $('#next-button', '#AsciiViewer').click (function(e) {
    controlFunctions.nextArticle(viewer);
  });

  $('#prev-button', '#AsciiViewer').click (function(e) {
    controlFunctions.prevArticle(viewer);
  });
}

AsciiViewer.Viewer.loadArticles = function (data){
  for (i = 0; i < data.length; i++) {
    AsciiViewer.viewer.articles.push(data[i]);
  }

  AsciiViewer.viewer.refresh();
}

AsciiViewer.init = function(){
  AsciiViewer.viewer = new AsciiViewer.Viewer();
  var options = {
    "resource_type":"asciidoc",
    "limit":10,
    "callback":AsciiViewer.Viewer.loadArticles
  }
  Freelog.ResourceUtil.retrive_resources_info_jsonp(options);

}
