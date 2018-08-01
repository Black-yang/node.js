const fs=require('fs');
const path=require('path');
fs.readdir(__dirname,(err,filesname)=>{
if(err)console.log('读取失败')
console.log(filesname)
})