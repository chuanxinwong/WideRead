import fs from 'fs'
import path from "path"


// 获取文件夹下的所有 JavaScript 文件路径
function getAllJSFilePaths(folderPath) {
  const files = fs.readdirSync(folderPath);
  return files.map(jsFile => {
    console.log(jsFile)
    var aa =  path.join(folderPath, jsFile)
    console.log(aa)
    return jsFile;
  });
}


getAllJSFilePaths("src/website")
