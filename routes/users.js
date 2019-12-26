var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/data', function(req, res, next) {
  var phone= req.query.phone;
  resd={
    data:"1",
    person:"shabi"
  }
  if(phone==1){
    // res.send(result1)
    res.send({
      data:resd
    })
  }else if(phone==2){
    // res.send(result2)
    res.send({
      data:'1112'
    })
  }else if(phone==3){
    // res.send(result3)
    res.send({
      data:'1113'
    })
  }
});

module.exports = router;
