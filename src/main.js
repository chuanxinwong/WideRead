
import website from "./website/index.js"

const origin = location.origin;

console.log(origin)
console.log(website)

for (let index = 0; index < website.length; index++) {
  const item = website[index];
  if (origin.indexOf(item.host) > -1) {
    console.log(item)
    genStyle(item);
  }
}


function genStyle(item) {
  let tag = document.createElement("style");
  tag.innerText = item.style;
  document.querySelector("head").appendChild(tag);
}
