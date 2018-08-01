// const fs=require('fs');
// fs.appendFile('./file/a.txt','number 1',()=>function(err){
// if(err)return console.log('追加失败'+err.message)
// console.log('追加成功')
// })


// console.log(__dirname);//当前文件所在的目录
// console.log(__filename);//当前文件所在完整路径
const path=require('path');
const result=path.join(__dirname+'/file/a.txt');
console.log(result);