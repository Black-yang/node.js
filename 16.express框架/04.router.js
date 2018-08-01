const express=require('express');
const router=express.Router();

const person = {
    name: 'black',
    nickname: '小黑',
    age: '18',
    gender: '仙女',
    hobby: ['吃饭', '睡觉', '玩']
  }

  router.get('/black',(req,res)=>{
res.render('black.ejs',person)
  })

  module.exports=router;