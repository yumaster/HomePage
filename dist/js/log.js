"use strict";!function(){var e,t,a;window.console&&window.console.log&&((e=function(){for(var e,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return setTimeout((e=console.log).bind.apply(e,[console].concat(a)))})("\n %c 大雨科技 %c http://yumaster.net \n","color:#FFFFFB;background:#ffa628;padding:5px 0;border-radius:.5rem 0 0 .5rem;","background: #efefef;padding:5px 0 5px;border-radius:0 .5rem .5rem 0;"),e("%c页面加载消耗了 ".concat((Math.round(100*performance.now())/100/1e3).toFixed(2),"s"),"background: #fff;color: #333;text-shadow: 0 0 2px #eee, 0 0 3px #eee, 0 0 3px #eee, 0 0 2px #eee, 0 0 3px #eee;"),localStorage.getItem("access")||localStorage.setItem("access",(new Date).getTime()),a=new Date(Number.parseInt(localStorage.getItem("access"))),t="".concat(a.getFullYear(),"年").concat(a.getMonth()+1,"月").concat(a.getDate(),"日"),a=0,localStorage.getItem("hit")?a=Number.parseInt(localStorage.getItem("hit")):localStorage.setItem("hit",0),localStorage.setItem("hit",++a),e("这是你自 ".concat(t," 以来第 ").concat(a," 次在本站打开控制台，你想知道什么秘密嘛~")),e("%c ","\n  background:url(".concat("https://secure.gravatar.com/avatar/58c102a9a5c9c9da08ba2341a3df8528?s=200",") no-repeat center;\n  background-size:200px;\n  margin:5px 0;\n  padding:0 0 162px 200px;\n  border-radius:10px;\n  overflow:hidden;\n  ")))}();