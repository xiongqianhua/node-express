/*
 * @Author: qianhua.xiong
 */
const express = require("express");
const bodyParser = require('body-parser')
const router = require('./router')
const app = express()
app.get('/',(req,res)=>{
    res.send('hello')
})
app.post('/first/:id',(req,res)=>{
    let {method,query,body,params,headers} = req
    res.status(200).send({method,query,body,params,headers})
    res.status(401).send('请登录')
})
var myLogger = function(req,res,next){
    console.log('logged')
    next()
}
app.use(myLogger)
app.use('/v1',router)
app.use(bodyParser.json())
app.listen(9000,()=>console.log("启动成功"))
