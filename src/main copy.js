// ==UserScript==
// @name         阅读加宽
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      *.zhihu.com/*
// @include      *.segmentfault.com/*
// @include      *.stackoverflow.com/*
// @include      *.juejin.im/*
// @include      *.jianshu.com/*
// @include      *.changkun.de/*
// @match        *chat.openai.com/*
// @run-at document-start
// @grant        none
// ==/UserScript==

(function () {
  var style_zhihu = `
  .Question-main { width: 80%;  max-width:1800px; }
  
  .Question-mainColumn { width: calc(100% - 320px); }
  .Post-RichTextContainer {width: 80% !important ; max-width:1800px;}
  .Post-SideActions { left: 10px !important;  }
  `;

  var style_segmentfault = `
  #sf-article { width: calc(98% - 80px); max-width: 100% !important; margin-left: 80px; }`;

  var style_stackoverflow = `
  .container { max-width: calc(98% - 80px) !important; }
  #content { max-width: 100% !important; }
  `

  var style_juejin = `
  .container { max-width: calc(100% - 150px);margin-left: 100px; }
  .main-area { width: calc(100% - 260px) !important; }
  .article-suspended-panel { margin-left: -5rem !important; }
  `

  var style_jianshu = `
#__next div[role='main'] {
  width: calc(100% - 100px) !important;
  margin-left: 50px !important;
}
#__next div[role='main'] > div{
  flex: 1;
}
#__next >div:nth-of-type(2) {
  left: 10px !important;
}
#__next >div:last-child {
  left: 10px !important;
}
  `
  // https://changkun.de/
  var style_changkun = `
#main > .content {
  margin-left: 350px !important;
  max-width: 5000px !important;
}
`

  var chartgpt = `
.p-4 {
    max-width: 75rem !important;
}
`



  console.log("插件开始加载样式...")
  console.log(location.host);
  var head = document.querySelector("head");
  var style = document.createElement("style");

  var host = location.host;
  console.log(host)
  if (host.indexOf("segmentfault.com") > -1) {
    style.innerHTML = style_segmentfault;
  } else if (host.indexOf("zhihu.com") > -1) {
    style.innerHTML = style_zhihu;
  } else if (host.indexOf("stackoverflow.com") > -1) {
    style.innerHTML = style_stackoverflow;
  } else if (host.indexOf("juejin.im") > -1) {
    style.innerHTML = style_juejin;
  } else if (host.indexOf("www.jianshu.com") > -1) {
    style.innerHTML = style_jianshu;
  } else if (host.indexOf("changkun.de") > -1) {
    style.innerHTML = style_changkun;
  } else if (host.indexOf("chat.openai.com") > -1) {
    style.innerHTML = chartgpt;
  }
  console.log(style)

  head.appendChild(style)
})();



function getAllJSFilePaths(folderPath) {
  const files = fs.readdirSync(folderPath);
  const jsFiles = files.filter(file => file.endsWith('.js'));
  return jsFiles.map(jsFile => path.resolve(folderPath, jsFile));
}


