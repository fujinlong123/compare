import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
var $=require('jquery')
$("#compareBtn").click(function(){
    var json=JSON.parse($("#json").val());
    var path=$("#path").val();
    var paths=path.split("\n");
    for(var i=0;i<paths.length;i++){
        paths[i]=paths[i].trim();
    }
    var pathSet = {};
    extractPath("", pathSet, json);
    var paths2=[];
    for(var key in pathSet){
       
        if(key.endsWith("[]")){
            key= key.substring(0,key.lastIndexOf("[]"));
        }
        
        paths2.push(key);
    }
    
    console.log(paths2);

    var e=[];
    var l=[];
    var r=[];


    outer: for(var i=0;i<paths2.length;i++){
        for(var j=0;j<paths.length;j++){
            if(paths2[i]==paths[j]){
                e.push(paths2[i]);
                continue outer;
            }
        }
        l.push(paths2[i]);
    }

   outer1: for(var i=0;i<paths.length;i++){
        for(var j=0;j<paths2.length;j++){
            if(paths[i]==paths2[j]){
                continue outer1;
            }
        }
        r.push(paths[i]);
    }

    var html="";

   
    for(var i=0;i<l.length;i++){
        html+="<tr><td><span style='color:red'>"+l[i]+"</span></td><td>&nbsp;</td>&nbsp;<td>&nbsp;</td></tr>"
    }
    for(var i=0;i<r.length;i++){
        html+="<tr><td>&nbsp;</td><td>&nbsp;</td>&nbsp;<td><span style='color:red'>"+r[i]+"</span></td></tr>"
    }
    for(var i=0;i<e.length;i++){
        html+="<tr><td>&nbsp;</td><td><span style='color:green'>"+e[i]+"</span></td>&nbsp;<td>&nbsp;</td></tr>"
    }
    $("#result").html(html);
    console.log(e);
    console.log(l);
    console.log(r);



});
$("#compareBtn").click();


function extractPath(parentPath, pathSet, jsonObj) {
    $.each(jsonObj, function(key, v) {
        if (v instanceof Array) {
            var path = (!parentPath ? "" : (parentPath + ".")) + key + "[]";
            pathSet[path] = 'array';
            for (var i = 0; i < v.length; i++) {
                if(v[i] instanceof Object){
                    extractPath(path, pathSet, v[i]);
                }
            }
        } else if (v instanceof Object) {
            var path = (!parentPath ? "" : (parentPath + ".")) + key;
            pathSet[path] = 'object';
            extractPath(path, pathSet, v);
        } else {
            var path = (!parentPath ? "" : (parentPath + ".")) + key;
            pathSet[path] = (v != null ? typeof v : '');
        }

    });

}

