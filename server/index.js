const express = require('express')
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const qs = require('querystring');
const crypto = require('crypto');
const md5 = crypto.createHash("md5");
const http = require('http');
const httprequest = require('request');
const app = express();
const port = 7777;
const sys=require('./sys2db');
const HC=require('./HttpCommunication');
app.listen(port, () => {
  console.log('server running at 7777');
})
/* login */
app.post('/login',function (req,res,next) {
  let recData='';
   req.on('data',function (chunk) {
     recData+=chunk;
   });
   req.on('end',function (data) {
     let send_data={
       action:'login',
       s_data:recData
     }
  const resJson = sys.toDB(send_data);
    try {
      let res2json=JSON.parse(resJson);
       res.json({
         code:200,
         status:'success',
         data:'登陆成功'
       });
    } catch (e) {
      res.json({
        code:550,
        status:'fail',
        data:'登录失败'
      });
      console.log('Login_FaiL,Error:'+e);
    }
   });
})
/* end */
/* submit */
app.post('/submit',function (req,res,next) {
  let recData='';
  req.on('data',function (chunk) {
    recData+=chunk;
  });
  req.on('end',function (data) {
    let send_data={
      action:'submit',
      s_data:recData
    }
  const resJson = sys.toDB(send_data);
     try {
       let res2json=JSON.parse(resJson);
       res.json({
         code:200,
         status:'success',
         data:'注册成功'
       });
     } catch (e) {
       res.json({
         code:550,
         status:'fail',
         data:'注册失败'
       });
       console.log('Login_Fail,Error:'+e);
     }
  });
})
/* end */