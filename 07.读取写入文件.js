const fs=require('fs');//使用require来导入模块
// 读取文件
// fs.readFile('./file/a.txt','utf-8',(err,data)=>{
// if(err)return console.log(err.message)
// console.log(data);
// })

// 写入文件
fs.writeFile('./file/b.txt','传智播客',(err)=>{
    if(err)return '写入文件失败'+err.message
    console.log('成功写人文件');
    
})