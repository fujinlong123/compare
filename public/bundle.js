!function(I){var c={};function n(t){if(c[t])return c[t].exports;var g=c[t]={i:t,l:!1,exports:{}};return I[t].call(g.exports,g,g.exports,n),g.l=!0,g.exports}n.m=I,n.c=c,n.d=function(I,c,t){n.o(I,c)||Object.defineProperty(I,c,{configurable:!1,enumerable:!0,get:t})},n.r=function(I){Object.defineProperty(I,"__esModule",{value:!0})},n.n=function(I){var c=I&&I.__esModule?function(){return I.default}:function(){return I};return n.d(c,"a",c),c},n.o=function(I,c){return Object.prototype.hasOwnProperty.call(I,c)},n.p="",n(n.s=0)}([function(module,exports){eval('\r\n$("#compareBtn").click(function(){\r\n    var json;\r\n    try{\r\n     json=JSON.parse($("#json").val());\r\n    }catch(e){\r\n        alert("json格式不正确");\r\n    }\r\n    var path=$("#path").val();\r\n    var paths=path.split("\\n");\r\n    for(var i=0;i<paths.length;i++){\r\n        paths[i]=paths[i].trim();\r\n    }\r\n    var pathSet = {};\r\n    extractPath("", pathSet, json);\r\n    var paths2=[];\r\n    for(var key in pathSet){\r\n       \r\n        if(key.endsWith("[]")){\r\n            key= key.substring(0,key.lastIndexOf("[]"));\r\n        }\r\n        \r\n        paths2.push(key);\r\n    }\r\n    \r\n\r\n\r\n    var e=[];\r\n    var l=[];\r\n    var r=[];\r\n\r\n\r\n    outer: for(var i=0;i<paths2.length;i++){\r\n        for(var j=0;j<paths.length;j++){\r\n            if(paths2[i]==paths[j]){\r\n                e.push(paths2[i]);\r\n                continue outer;\r\n            }\r\n        }\r\n        l.push(paths2[i]);\r\n    }\r\n\r\n   outer1: for(var i=0;i<paths.length;i++){\r\n        for(var j=0;j<paths2.length;j++){\r\n            if(paths[i]==paths2[j]){\r\n                continue outer1;\r\n            }\r\n        }\r\n        r.push(paths[i]);\r\n    }\r\n\r\n    var html="";\r\n\r\n   \r\n    for(var i=0;i<l.length;i++){\r\n        html+="<tr><td><span style=\'color:red\'>"+l[i]+"</span></td><td>&nbsp;</td>&nbsp;<td>&nbsp;</td></tr>"\r\n    }\r\n    for(var i=0;i<r.length;i++){\r\n        html+="<tr><td>&nbsp;</td><td>&nbsp;</td>&nbsp;<td><span style=\'color:red\'>"+r[i]+"</span></td></tr>"\r\n    }\r\n    for(var i=0;i<e.length;i++){\r\n        html+="<tr><td>&nbsp;</td><td><span style=\'color:green\'>"+e[i]+"</span></td>&nbsp;<td>&nbsp;</td></tr>"\r\n    }\r\n    $("#result").html(html);\r\n   \r\n\r\n\r\n\r\n});\r\n$("#compareBtn").click();\r\n\r\n\r\nfunction extractPath(jsonObjectPath, pathSet, jsonObj) {\r\n\r\n    if (jsonObj instanceof Array) {\r\n        var path =jsonObjectPath+  "[]";\r\n        pathSet[path] = \'array\';\r\n        for (var i = 0; i < jsonObj.length; i++) {\r\n            if(jsonObj[i] instanceof Object){\r\n                extractPath(path, pathSet, jsonObj[i]);\r\n            }\r\n        }\r\n    } else if (jsonObj instanceof Object) {\r\n        var path = jsonObjectPath;\r\n        pathSet[path] = \'object\';\r\n        $.each(jsonObj, function(key, v) {\r\n            extractPath((!path ? "" : (path + "."))+key, pathSet, v);\r\n        });\r\n    } else {\r\n        var path =jsonObjectPath;\r\n        pathSet[path] = (jsonObj != null ? typeof jsonObj : \'\');\r\n    }\r\n\r\n  \r\n\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWFpbi5qcz9mMTYxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR0EsdUJBQXVCLGdCQUFnQjtBQUN2QyxvQkFBb0IsZUFBZTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsZUFBZTtBQUN0QyxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsZ0JBQWdCLFdBQVc7QUFDM0IsNkVBQTZFLFdBQVcsVUFBVTtBQUNsRztBQUNBLGdCQUFnQixXQUFXO0FBQzNCLDZCQUE2QixlQUFlLFdBQVc7QUFDdkQ7QUFDQSxnQkFBZ0IsV0FBVztBQUMzQiw2QkFBNkIsNkRBQTZELFVBQVU7QUFDcEc7QUFDQTs7Ozs7QUFLQSxDQUFDO0FBQ0Q7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTs7OztBQUlBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJChcIiNjb21wYXJlQnRuXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIganNvbjtcclxuICAgIHRyeXtcclxuICAgICBqc29uPUpTT04ucGFyc2UoJChcIiNqc29uXCIpLnZhbCgpKTtcclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgICBhbGVydChcImpzb27moLzlvI/kuI3mraPnoa5cIik7XHJcbiAgICB9XHJcbiAgICB2YXIgcGF0aD0kKFwiI3BhdGhcIikudmFsKCk7XHJcbiAgICB2YXIgcGF0aHM9cGF0aC5zcGxpdChcIlxcblwiKTtcclxuICAgIGZvcih2YXIgaT0wO2k8cGF0aHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgcGF0aHNbaV09cGF0aHNbaV0udHJpbSgpO1xyXG4gICAgfVxyXG4gICAgdmFyIHBhdGhTZXQgPSB7fTtcclxuICAgIGV4dHJhY3RQYXRoKFwiXCIsIHBhdGhTZXQsIGpzb24pO1xyXG4gICAgdmFyIHBhdGhzMj1bXTtcclxuICAgIGZvcih2YXIga2V5IGluIHBhdGhTZXQpe1xyXG4gICAgICAgXHJcbiAgICAgICAgaWYoa2V5LmVuZHNXaXRoKFwiW11cIikpe1xyXG4gICAgICAgICAgICBrZXk9IGtleS5zdWJzdHJpbmcoMCxrZXkubGFzdEluZGV4T2YoXCJbXVwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHBhdGhzMi5wdXNoKGtleSk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG4gICAgdmFyIGU9W107XHJcbiAgICB2YXIgbD1bXTtcclxuICAgIHZhciByPVtdO1xyXG5cclxuXHJcbiAgICBvdXRlcjogZm9yKHZhciBpPTA7aTxwYXRoczIubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgZm9yKHZhciBqPTA7ajxwYXRocy5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgaWYocGF0aHMyW2ldPT1wYXRoc1tqXSl7XHJcbiAgICAgICAgICAgICAgICBlLnB1c2gocGF0aHMyW2ldKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGwucHVzaChwYXRoczJbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgb3V0ZXIxOiBmb3IodmFyIGk9MDtpPHBhdGhzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIGZvcih2YXIgaj0wO2o8cGF0aHMyLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICBpZihwYXRoc1tpXT09cGF0aHMyW2pdKXtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlIG91dGVyMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByLnB1c2gocGF0aHNbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBodG1sPVwiXCI7XHJcblxyXG4gICBcclxuICAgIGZvcih2YXIgaT0wO2k8bC5sZW5ndGg7aSsrKXtcclxuICAgICAgICBodG1sKz1cIjx0cj48dGQ+PHNwYW4gc3R5bGU9J2NvbG9yOnJlZCc+XCIrbFtpXStcIjwvc3Bhbj48L3RkPjx0ZD4mbmJzcDs8L3RkPiZuYnNwOzx0ZD4mbmJzcDs8L3RkPjwvdHI+XCJcclxuICAgIH1cclxuICAgIGZvcih2YXIgaT0wO2k8ci5sZW5ndGg7aSsrKXtcclxuICAgICAgICBodG1sKz1cIjx0cj48dGQ+Jm5ic3A7PC90ZD48dGQ+Jm5ic3A7PC90ZD4mbmJzcDs8dGQ+PHNwYW4gc3R5bGU9J2NvbG9yOnJlZCc+XCIrcltpXStcIjwvc3Bhbj48L3RkPjwvdHI+XCJcclxuICAgIH1cclxuICAgIGZvcih2YXIgaT0wO2k8ZS5sZW5ndGg7aSsrKXtcclxuICAgICAgICBodG1sKz1cIjx0cj48dGQ+Jm5ic3A7PC90ZD48dGQ+PHNwYW4gc3R5bGU9J2NvbG9yOmdyZWVuJz5cIitlW2ldK1wiPC9zcGFuPjwvdGQ+Jm5ic3A7PHRkPiZuYnNwOzwvdGQ+PC90cj5cIlxyXG4gICAgfVxyXG4gICAgJChcIiNyZXN1bHRcIikuaHRtbChodG1sKTtcclxuICAgXHJcblxyXG5cclxuXHJcbn0pO1xyXG4kKFwiI2NvbXBhcmVCdG5cIikuY2xpY2soKTtcclxuXHJcblxyXG5mdW5jdGlvbiBleHRyYWN0UGF0aChqc29uT2JqZWN0UGF0aCwgcGF0aFNldCwganNvbk9iaikge1xyXG5cclxuICAgIGlmIChqc29uT2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICB2YXIgcGF0aCA9anNvbk9iamVjdFBhdGgrICBcIltdXCI7XHJcbiAgICAgICAgcGF0aFNldFtwYXRoXSA9ICdhcnJheSc7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBqc29uT2JqLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKGpzb25PYmpbaV0gaW5zdGFuY2VvZiBPYmplY3Qpe1xyXG4gICAgICAgICAgICAgICAgZXh0cmFjdFBhdGgocGF0aCwgcGF0aFNldCwganNvbk9ialtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGpzb25PYmogaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgICB2YXIgcGF0aCA9IGpzb25PYmplY3RQYXRoO1xyXG4gICAgICAgIHBhdGhTZXRbcGF0aF0gPSAnb2JqZWN0JztcclxuICAgICAgICAkLmVhY2goanNvbk9iaiwgZnVuY3Rpb24oa2V5LCB2KSB7XHJcbiAgICAgICAgICAgIGV4dHJhY3RQYXRoKCghcGF0aCA/IFwiXCIgOiAocGF0aCArIFwiLlwiKSkra2V5LCBwYXRoU2V0LCB2KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHBhdGggPWpzb25PYmplY3RQYXRoO1xyXG4gICAgICAgIHBhdGhTZXRbcGF0aF0gPSAoanNvbk9iaiAhPSBudWxsID8gdHlwZW9mIGpzb25PYmogOiAnJyk7XHJcbiAgICB9XHJcblxyXG4gIFxyXG5cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n')}]);