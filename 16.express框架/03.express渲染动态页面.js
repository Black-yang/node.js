const express=require('express');
const path=require('path');
const app=express();
//1、安装模板引擎 运行 npm i ejs -S
//2、配置模板引擎
app.set('views engine','ejs')

//3、配置模板存放的路径 第一个参数是固定写法 第二个参数是模板页面存放的路径
app.set('views','./views')
//导入路由模块
const router=require('./04.router.js');
app.user(router);

app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000')
})

