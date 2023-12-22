
// ==UserScript==
// @name         阅读加宽
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include *
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  var style$1 = ".p-4 {\r\n  max-width: 75rem !important;\r\n}";

  var openai = {
    host: "chat.openai.com",
    include: "*chat.openai.com/*",
    style: style$1,
  };

  var style = "\r\n.Question-main { width: 80%;  max-width:1800px; }\r\n.Question-mainColumn { width: calc(100% - 320px); }\r\n.Post-RichTextContainer {width: 80% !important ; max-width:1800px;}\r\n.Post-SideActions { left: 10px !important;  }";

  var zhihu = {
    host: "zhihu.com",
    include: "*.zhihu.com/*",
    style: style,
  };

  let arr = [];
  arr.push(openai);
  arr.push(zhihu);

  const origin = location.origin;

  console.log(origin);
  console.log(arr);

  for (let index = 0; index < arr.length; index++) {
    const item = arr[index];
    if (origin.indexOf(item.host) > -1) {
      console.log(item);
      genStyle(item);
    }
  }


  function genStyle(item) {
    let tag = document.createElement("style");
    tag.innerText = item.style;
    document.querySelector("head").appendChild(tag);
  }

})();
//# sourceMappingURL=bundle.js.map
