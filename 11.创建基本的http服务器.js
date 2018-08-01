// 1、导入模块
const http=require('http');
///2、创建服务器
const server=http.createServer()
//3、绑定事件 回调函数
server.on('request',function(request,response){
    // console.log('request.url');
    
    //返回的内容 以html的格式
    response.writeHeader(200,{'Content-Type':'text/html;charset=utf-8'})
    
    response.end('请求数据类型：'+request.method+' 请求URL地址：'+request.url)


})



// 4、启动服务器
server.listen(3000,function(){
    console.log('启动了服务器');
})