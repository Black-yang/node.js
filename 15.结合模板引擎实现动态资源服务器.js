//导入模块
const http = require('http');
const fs = require('fs');
const path = require('path');
//第一步：导入模板 模块
const template=require('art-template');

const server = http.createServer();

server.on('request', function (request, response) {

    const option={
        name:'black-yang',
        hobby:'eat',
        age:18
    }


    const html=template(path.join(__dirname,'/views/template.html'),option);
    response.end(html)

})

server.listen(3000,()=>{
    console.log('http://127.0.0.1:3000');
})
