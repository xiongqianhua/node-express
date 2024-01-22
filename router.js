/*
 * @Author: qianhua.xiong
 */
var express = require('express')
var router = express.Router()
router.post('/test',(req,res)=>{
    res.send('test路由')
})
module.exports = router