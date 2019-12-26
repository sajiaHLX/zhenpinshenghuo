var express = require('express');
var router = express.Router();
var fs = require('fs');

var yan = function () {  
  return Math.floor(Math.random()*9000+1000);
}
var num = 0;
var phone = 0;
router.get('/data',function(req,res,next){
  phone = req.query.phone;
  if(phone){
    var a = yan();
    num = a;
    res.send({
      data : num
    })
  }
})

router.get('/check',function(req,res,next){
  var phoneNum = req.query.phoneNum;
  var verification= req.query.verification;
  var success={
    state:200,
    message:"登录成功"
  }
  var fail={
    state:500,
    message:"登录失败"
  }
  if(verification==num&&phone==phoneNum){
    res.send({
      data:success
    })
  }else{
    res.send({
      data:fail
    })
  }
})


module.exports=router