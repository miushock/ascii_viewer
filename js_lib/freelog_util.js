if (Freelog == null || typeof(Freelog)!= "object"){
  var Freelog = {}
}

Freelog.resource_bucket_url = "http://"+ENV["host_address"]+":"+ENV["port"]+"/"+ENV["bucket_path"];
Freelog.resource_info_path = "http://"+ENV["host_address"]+":"+ENV["port"]+"/resources";
Freelog.node_name = ENV["node"];

//Namespace for resource related tools
Freelog.ResourceUtil = {}

//Retrive a single resource by id from resource bucket
Freelog.ResourceUtil.retrive_resource = function (resource_id, callback){
  //todo: returned result shall be in json format with one extra field of "content:<data>"
  var url = '/resources/'+resource_id;
  $.getJSON(url, callback);
}

//Retrive single resource in JSONP
Freelog.ResourceUtil.retrive_resource_jsonp = function (resource_id, callback){
  var url = Freelog.resource_info_path + "/" + resource_id + ".jsonp?callback=?";
  $.getJSON(url, callback);
}

//Rerive metadata of resources as specified by options
//options are all optional, can be empty object
//options are:
//{
//  "resource_type":
//  "limit":
//  "callback":
//}
Freelog.ResourceUtil.retrive_resources_info = function (options){
  //construct url paramter object
  var params = { "node":Freelog.node_name }
  if (typeof options == "object" && options != null){
    if (options["resource_type"] != null){
      params["resource_type"] = options["resource_type"];
    }
    if (options["limit"] != null){
      params["limit"] = options["limit"];
    }
  }

  //ajax call to get resources info in json
  $.getJSON(Freelog.resource_info_path, params, options["callback"])
}

//jsonp version
Freelog.ResourceUtil.retrive_resources_info_jsonp = function (options){
  var params = { "node":Freelog.node_name }
  if (typeof options == "object" && options != null){
    if (options["resource_type"] != null){
      params["resource_type"] = options["resource_type"];
    }
    if (options["limit"] != null){
      params["limit"] = options["limit"];
    }
  }

  $.getJSON(Freelog.resource_info_path+".jsonp?callback=?", params, options["callback"])
}

