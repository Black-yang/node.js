//导入模块
const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer();

server.on('request', function (request, response) {


    const url = request.url;
    const method = request.method.toLowerCase();

    if (method === 'get' && url === '/views/index.html') {
        readHtmlFile(response, url)

    } else if (method === 'get' && url === '/views/aboult.html') {
        readHtmlFile(response, url)
    }

})

server.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})

function readHtmlFile(response, url) {
    fs.readFile(path.join(__dirname, url), (err, data) => {
        if (err) return response.end('404')
        response.end(data);
    })
}