(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16fd6c39"],{"0240":function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"e",(function(){return g})),e.d(n,"b",(function(){return j})),e.d(n,"d",(function(){return h})),e.d(n,"c",(function(){return S}));var r=e("53ca");e("ac1f"),e("5319"),e("d3b7"),e("466d"),e("b0c0");function a(t){return t.replace(/(^\s*)|(\s*$)/g,"")}function o(t){return"[object Array]"===Object.prototype.toString.call(t)}function s(t){return t.substr(0,1).toUpperCase()+t.substr(1)}function i(t){return t}function c(t){return t?(t=i(t),t[0].toUpperCase()+t.substr(1)):""}function l(t){var n=t.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);return null!=n}function u(t){var n=t.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);return null!=n}function f(t){var n=/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/,e=t.match(n);return null!=e}function p(t){return"string"===typeof t&&(l(t)||u(t)||f(t))}function d(t){return t%1===0}function v(){return(new Date).getFullYear()}function m(){var t=new Date,n="-",e=":",r=t.getMonth()+1,a=t.getDate();r>=1&&r<=9&&(r="0"+r),a>=0&&a<=9&&(a="0"+a);var o=t.getFullYear()+n+r+n+a+" "+t.getHours()+e+t.getMinutes()+e+t.getSeconds();return o}var b={Date:"java.util.Date",List:"java.util.List"};function g(t,n){var e=t.val,r=t.name,a="",o="",c="",l={},u=!1,f="    public void setA(T a) {\n         this.a = a;\n     }\n     public T getA() {\n         return a;\n     }\n\n",p=function(t){var n=i(t);n!==t&&(o+='    @JsonProperty("'+t+'")\n',u=!0),o+="    private "+e[t]+" "+n+";\n";var r=e[t];r.indexOf("List<")>-1&&(r=e[t].replace("List<",""),r=r.replace(">",""),l["List"]="true"),l[r]="true";var a={a:n,A:s(n),T:e[t]};c+=f.replace(/a|A|T/g,(function(t){return a[t]}))};for(var d in e)p(d);for(var g in l)b[g]&&(a+="import "+b[g]+";\n");return u&&(a+="import org.codehaus.jackson.annotate.JsonIgnoreProperties;\nimport org.codehaus.jackson.annotate.JsonProperty;"),n&&(a="/**\n  * Copyright "+v()+" xxx.com \n  */\npackage "+n+";\n"+a),a+"\n/**\n * Auto-generated: "+m()+"\n *\n * @author xxx\n */\npublic class "+r+" {\n\n"+o+c+"}"}function j(t,n,e,r){var o=null;t=a(t),"["===t[0]&&"]"===t[t.length-1]?(t='{ "list": '+t+"}",o=JSON.parse(t).list[0]):o=JSON.parse(t);var s={},i=[];for(var c in o){var l=o[c],u=c;switch(e){case"1":u=h(c);break;case"2":u=S(c),r&&("2"===r?u=u.toUpperCase():"1"===r&&(u=u.toLowerCase()));break;default:break}s[u]=y(l,u,i,e,r)}return n||(n="AtoolBean"),{name:n,val:s}}function h(t){var n=t.replace(/\_(\w)/g,(function(t,n){return n.toUpperCase()}));return n}function S(t){return t.replace(/([A-Z])/g,"_$1").toLowerCase()}function y(t,n,e,s,i){t&&t.replace&&(t=a(t));var l=Object(r["a"])(t);if("number"===l)return d(t)?t<65536?"int":"long":"double";if("boolean"===l)return l;if(p(t))return"Date";if(t){if("string"===l)return"String";if(o(t)){var u=y(t[0],n,e);return"int"===u?u="Integer":"long"===u?u="Long":"float"===u?u="Float":"double"===u&&(u="Double"),"List<"+u+">"}var f=c(n),v={};for(n in t){var m=t[n],b=n;switch(s){case"1":b=h(n);break;case"2":b=S(n),i&&("2"===i?b=b.toUpperCase():"1"===i&&(b=b.toLowerCase()));break;default:break}v[b]=y(m,b,e,s,i)}return e.push({name:f,val:v}),f}return"String"}},3591:function(t,n,e){},"5a02":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"idx-json-content"},[e("div",{staticClass:"json-handle"},[e("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.compressJson}},[t._v("JSON压缩")]),e("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.transformLineJson}},[t._v("key驼峰转下划线")]),e("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.transformHumpJson}},[t._v("key下划线转驼峰")]),e("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){t.dialogVisible=!0}}},[t._v("JSON转JAVA实体")]),e("el-dialog",{attrs:{title:"填写相关信息",visible:t.dialogVisible},on:{"update:visible":function(n){t.dialogVisible=n}}},[e("el-form",[e("el-form-item",{attrs:{label:"类名","label-width":"10rem"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.className,callback:function(n){t.className=n},expression:"className"}})],1),e("el-form-item",{attrs:{label:"包名","label-width":"10rem"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.packageName,callback:function(n){t.packageName=n},expression:"packageName"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(n){t.dialogVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(n){t.dialogVisible=!1,t.transformJavaBean()}}},[t._v("确 定")])],1)],1)],1),e("div",{staticClass:"json-content"},[e("json-editor",{staticClass:"json-editor",attrs:{showBtns:!1,mode:"code",lang:"zh",expandedOnStart:!0},on:{"json-change":t.onJsonChange,"json-save":t.onJsonSave,"has-error":t.onError},model:{value:t.json,callback:function(n){t.json=n},expression:"json"}}),e("el-input",{staticClass:"json-str",attrs:{type:"textarea",readonly:""},model:{value:t.jsonStr,callback:function(n){t.jsonStr=n},expression:"jsonStr"}})],1)])},a=[],o=(e("e9c4"),e("45a3"));e("ac1f"),e("5319"),e("d3b7"),e("159b"),e("b64b");function s(t){return t.replace(/_(\w)/g,(function(t,n){return n.toUpperCase()}))}function i(t){return t.replace(/([A-Z])/g,"_$1").toLowerCase()}function c(t){t instanceof Array?t.forEach((function(t,n){c(t)})):t instanceof Object&&Object.keys(t).forEach((function(n){var e=s(n);e!==n&&(t[e]=t[n],delete t[n]),c(t[e])}))}function l(t){t instanceof Array?t.forEach((function(t,n){l(t)})):t instanceof Object&&Object.keys(t).forEach((function(n){var e=i(n);e!==n&&(t[e]=t[n],delete t[n]),l(t[e])}))}var u=e("0240"),f={components:{jsonEditor:o["a"]},data:function(){return{jsonStr:"",json:{},className:"MyJavaBean",packageName:"com.xxx.entity",dialogVisible:!1}},mounted:function(){var t=localStorage.getItem("idx-json-str");null!==t&&void 0!==t?(this.json=JSON.parse(t),this.jsonStr=t):this.json={}},methods:{compressJson:function(){this.jsonStr=JSON.stringify(this.json)},transformLineJson:function(){var t=JSON.parse(JSON.stringify(this.json));l(t),this.jsonStr=JSON.stringify(t,null,2)},transformHumpJson:function(){var t=JSON.parse(JSON.stringify(this.json));c(t),this.jsonStr=JSON.stringify(t,null,2)},transformJavaBean:function(){var t=Object(u["b"])(this.jsonStr,this.className,void 0,void 0);this.jsonStr=Object(u["e"])(t,this.packageName)},onJsonChange:function(t){this.jsonStr=JSON.stringify(t,null,2),localStorage.setItem("idx-json-str",this.jsonStr)},onJsonSave:function(t){},onError:function(t){this.jsonStr=t.message}}},p=f,d=(e("e08b"),e("2877")),v=Object(d["a"])(p,r,a,!1,null,null,null);n["default"]=v.exports},e08b:function(t,n,e){"use strict";e("3591")}}]);