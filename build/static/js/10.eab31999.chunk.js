webpackJsonp([10],{428:function(e,t,a){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=a(0),m=a.n(c),s=a(20),o=a(485),i=(a.n(o),function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}()),u=function(){return m.a.createElement("div",null,m.a.createElement("ul",null,m.a.createElement("li",null,"\u5148\u5f15\u5165jQuery\u63d2\u4ef6"),m.a.createElement("li",null,"\u518d\u5f15\u5165\u57fa\u7840\u63d2\u4ef6"),m.a.createElement("li",null,"\u6700\u540e\u5f15\u5165RAP jQuery\u63d2\u4ef6")),m.a.createElement("h4",null,"\u793a\u4f8b\u4ee3\u7801"),m.a.createElement("pre",{className:"code-example"},"<script src=\"jquery.min.js\"><\/script>\n<script src=\"http://rap2api.taobao.org/app/plugin/:projectId\"><\/script>\n<script src=\"http://rap2api.taobao.org/libs/jquery.rap.js\"><\/script>\n$.ajax({\n    url : '/example/1501049256513', // \u81ea\u52a8\u62e6\u622a\n    method : 'GET',\n    dataType : 'JSON',\n    success : function(data) {\n      // \u8fd4\u56de\u6839\u636eRAP\u6587\u6863\u53ca\u89c4\u5219\u751f\u6210\u7684mock\u6570\u636e\n      $('#result').html(JSON.stringify(data))\n    }\n})\n"))},E=function(e){function t(e){l(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={showExampleJQuery:!1},a}return r(t,e),i(t,[{key:"render",value:function(){var e=this;return m.a.createElement("section",{className:"APIList"},m.a.createElement("div",{className:"header"},m.a.createElement("span",{className:"title"},"\u7528\u6237\u624b\u518c")),m.a.createElement("div",{className:"body"},m.a.createElement("div",{className:"API"},m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("a",{href:"https://github.com/thx/rap2-delos/wiki"},"https://github.com/thx/rap2-delos/wiki"))))),m.a.createElement("div",{className:"header"},m.a.createElement("span",{className:"title"},"\u5e73\u53f0API\u63a5\u53e3")),m.a.createElement("div",{className:"body"},m.a.createElement("div",{className:"API"},m.a.createElement("div",{className:"title"},"\u83b7\u53d6\u4ed3\u5e93\u7684\u5b8c\u6574\u6570\u636e\uff08JSON\uff09"),m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("code",null,s.c,"/repository/get?id=:repositoryId")))),m.a.createElement("div",{className:"API"},m.a.createElement("div",{className:"title"},"\u83b7\u53d6\u63a5\u53e3\u7684\u5b8c\u6574\u6570\u636e\uff08JSON\uff09"),m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("code",null,s.c,"/interface/get?id=:interfaceId")))),m.a.createElement("div",{className:"API"},m.a.createElement("div",{className:"title"},"\u83b7\u53d6\u4ed3\u5e93\u7684\u524d\u7aef\u63d2\u4ef6\uff08JS\uff09"),m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("span",{className:"label"},"\u57fa\u7840\u63d2\u4ef6"),m.a.createElement("code",null,s.c,"/app/plugin/:repositories")),m.a.createElement("li",null,m.a.createElement("span",{className:"label"},"jQuery \u63d2\u4ef6"),m.a.createElement("code",null,s.c,"/libs/jquery.rap.js"),m.a.createElement("button",{className:"btn btn-secondary btn-sm ml8",onClick:function(t){t.preventDefault(),e.setState(function(e,t){return{showExampleJQuery:!e.showExampleJQuery}})}},"\u7528\u6cd5")),this.state.showExampleJQuery&&m.a.createElement(u,null),m.a.createElement("li",null,m.a.createElement("span",{className:"label"},"Mock.js \u63d2\u4ef6"),m.a.createElement("code",null,s.c,"/libs/mock.rap.js")),m.a.createElement("li",null,m.a.createElement("span",{className:"label"},"fetch \u63d2\u4ef6"),m.a.createElement("code",null,s.c,"/libs/fetch.rap.js")))),m.a.createElement("div",{className:"API"},m.a.createElement("div",{className:"title"},"\u83b7\u53d6\u5355\u4e2a\u63a5\u53e3\u7684\u6570\u636e\uff08JSON\uff09"),m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("code",null,s.c,"/app/mock/data/:interfaceId?scope=response|request"),m.a.createElement("table",{className:"table table-bordered mt12"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",{width:"140"},m.a.createElement("code",null,"scope")),m.a.createElement("th",null,"\u63cf\u8ff0"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null,m.a.createElement("code",null,"response")),m.a.createElement("td",null,"\u83b7\u53d6\u5355\u4e2a\u63a5\u53e3\u7684\u54cd\u5e94\u6570\u636e\uff08JSON\uff09")),m.a.createElement("tr",null,m.a.createElement("td",null,m.a.createElement("code",null,"request")),m.a.createElement("td",null,"\u83b7\u53d6\u5355\u4e2a\u63a5\u53e3\u7684\u8bf7\u6c42\u6570\u636e\uff08JSON\uff09"))))),m.a.createElement("li",null,m.a.createElement("code",null,s.c,"/app/mock/:repositoryId/:method/:url")))),m.a.createElement("div",{className:"API"},m.a.createElement("div",{className:"title"},"\u83b7\u53d6\u5355\u4e2a\u63a5\u53e3\u7684\u6a21\u677f\uff08JSON\uff09"),m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("code",null,s.c,"/app/mock/template/:interfaceId?scope=response|request"),m.a.createElement("table",{className:"table table-bordered mt12"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",{width:"140"},m.a.createElement("code",null,"scope")),m.a.createElement("th",null,"\u63cf\u8ff0"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null,m.a.createElement("code",null,"response")),m.a.createElement("td",null,"\u83b7\u53d6\u5355\u4e2a\u63a5\u53e3\u7684\u54cd\u5e94\u6a21\u677f\uff08JSON\uff09")),m.a.createElement("tr",null,m.a.createElement("td",null,m.a.createElement("code",null,"request")),m.a.createElement("td",null,"\u83b7\u53d6\u5355\u4e2a\u63a5\u53e3\u7684\u8bf7\u6c42\u6a21\u677f\uff08JSON\uff09"))))))),m.a.createElement("div",{className:"API"},m.a.createElement("div",{className:"title"},"\u83b7\u53d6\u5355\u4e2a\u63a5\u53e3\u7684\u6a21\u677f\uff08JSON Schema\uff09"),m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("code",null,s.c,"/app/mock/schema/:interfaceId?scope=response|request"),m.a.createElement("table",{className:"table table-bordered mt12"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",{width:"140"},m.a.createElement("code",null,"scope")),m.a.createElement("th",null,"\u63cf\u8ff0"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null,m.a.createElement("code",null,"response")),m.a.createElement("td",null,"\u83b7\u53d6\u5355\u4e2a\u63a5\u53e3\u7684\u54cd\u5e94\u6a21\u677f\uff08JSON Schema\uff09")),m.a.createElement("tr",null,m.a.createElement("td",null,m.a.createElement("code",null,"request")),m.a.createElement("td",null,"\u83b7\u53d6\u5355\u4e2a\u63a5\u53e3\u7684\u8bf7\u6c42\u6a21\u677f\uff08JSON Schema\uff09")))))))))}}]),t}(m.a.Component);t.default=E},485:function(e,t,a){var l=a(486);"string"===typeof l&&(l=[[e.i,l,""]]);var n={hmr:!1};n.transform=void 0;a(418)(l,n);l.locals&&(e.exports=l.locals)},486:function(e,t,a){t=e.exports=a(417)(!0),t.push([e.i,".APIList{padding:2rem}.APIList>.header{margin-bottom:2rem}.APIList>.header .title{font-size:2rem}.APIList>.body>.API{margin-bottom:2rem}.APIList>.body>.API>.title{font-size:1.6rem;margin-bottom:1rem}.APIList>.body>.API>ul{padding-left:2rem}.APIList>.body>.API>ul li{margin-bottom:.75rem}.APIList>.body>.API>ul li .label{margin-right:.5rem}.APIList>.body>.API code{padding:.5rem}.code-example{padding:2rem;margin:2rem}","",{version:3,sources:["F:/Document/font-end/mock/rap2-dolores-master/src/components/api/API.css"],names:[],mappings:"AAAA,SACE,YAAc,CAAE,AAElB,iBACE,kBAAoB,CAAE,AAExB,wBACE,cAAgB,CAAE,AAEpB,oBACE,kBAAoB,CAAE,AAExB,2BACE,iBAAkB,AAClB,kBAAoB,CAAE,AAExB,uBACE,iBAAmB,CAAE,AAEvB,0BACE,oBAAsB,CAAE,AAE1B,iCACE,kBAAoB,CAAE,AAExB,yBACE,aAAe,CAAE,AAEnB,cACE,aAAc,AACd,WAAa,CAAE",file:"API.css",sourcesContent:[".APIList {\n  padding: 2rem; }\n\n.APIList > .header {\n  margin-bottom: 2rem; }\n\n.APIList > .header .title {\n  font-size: 2rem; }\n\n.APIList > .body > .API {\n  margin-bottom: 2rem; }\n\n.APIList > .body > .API > .title {\n  font-size: 1.6rem;\n  margin-bottom: 1rem; }\n\n.APIList > .body > .API > ul {\n  padding-left: 2rem; }\n\n.APIList > .body > .API > ul li {\n  margin-bottom: .75rem; }\n\n.APIList > .body > .API > ul li .label {\n  margin-right: .5rem; }\n\n.APIList > .body > .API code {\n  padding: .5rem; }\n\n.code-example {\n  padding: 2rem;\n  margin: 2rem; }\n"],sourceRoot:""}])}});
//# sourceMappingURL=10.eab31999.chunk.js.map