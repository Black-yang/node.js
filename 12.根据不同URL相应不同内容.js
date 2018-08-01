const http = require('http');
const server=http.createServer();

server.on('request',(request,response)=>{
const url=response.url;
const method=request.method;

    response.writeHeader(200,{
'Content-Type':'text/html;charset=utf-8'
    })

if(url==='/index.html'){
    response.end('<h3>首页</h3>')
}else if(url==='/aboult.htm'){
    reponse.end('<h3>关于</h3>')
}
else{
    response.end('服务器开小差了')
}
})

server.listen(3000,function(){
    console.log('running');
})