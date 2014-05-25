if (AsciiViewer == null || typeof(AsciiViewer)!= "object"){
  var AsciiViewer = {}
}

//constructor of viewer object
AsciiViewer.Viewer = function(){

}

AsciiViewer.displayJSONP = function (data) {
  alert (data["content"]);
}

AsciiViewer.init = function(){
  Freelog.ResourceUtil.retrive_resource_jsonp('a54128a2b4b5553eb9d872741c0f5c745b8c07747ddec6e42e9323549c20809b', AsciiViewer.displayJSONP);
}
