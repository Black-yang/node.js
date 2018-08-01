//引入模块
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();

server.on('request', function (request, response) {
    //请求的URL
    const url = request.url;
    //请求的类型 get/post
    const method = request.method.toLowerCase();

    if (method === 'get' && url === '/views/index.html') {
        fs.readFile(path.join(__dirname, 'views/index.html'), (err, data) => {
            if (err) return response.end('404')
            response.end(data);

        })
    } else if (method === 'get' && url === '/views/aboult.html') {

        readHtmlFile(response, url)

    }

})

server.listen(3000, function () {
    console.log('http://127.0.0.1:3000')
})

function readHtmlFile(response, url) {
    fs.readFile(path.join(__dirname, url), (err, data) => {
        if (err) return response.end('404')
        response.end(data);
    })
}