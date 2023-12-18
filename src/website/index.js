import openai from "./chat.openai.com/index.js"
import zhihu from "./zhihu.com/index.js"

let arr = [];

arr.push(openai);
arr.push(zhihu);


let obj = {};

arr.forEach(item => {
  obj[item.host] = item;
})


console.log(obj)

export default obj;
