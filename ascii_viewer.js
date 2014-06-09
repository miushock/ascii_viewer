if (AsciiViewer == null || typeof(AsciiViewer)!= "object"){
  var AsciiViewer = {}
}

//constructor of viewer object
AsciiViewer.wiewer = function(){

}

AsciiViewer.displayJSONP = function (data) {
  alert (data);
}

AsciiViewer.init = function(){
  var options = {
    "resource_type":"asciidoc",
    "limit":10,
    "callback":AsciiViewer.displayJSONP
  }
  Freelog.ResourceUtil.retrive_resources_info_jsonp(options);
}
