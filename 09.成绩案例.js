const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, "./file/成绩.txt"), "utf-8", (err, data) => {
    if (err) return console.log('读取文件失败' + err.message)
    const score = data.split(' ');
    let str='';
    // console.log(score);
    score.forEach((item, index) => {
       
        if (item.length > 0) {
            const result = item.split('=');
            // console.log(result)
            const newScore = result[0] + ":" + result[1]+"\n";
            str += newScore;

        }
    })
    console.log(str.trim())



    fs.writeFile(path.join(__dirname,"./file/成绩01.txt"),str.trim(),(err)=>{
        if(err)console.log('写入失败')
        console.log('写入成功');
        })
})