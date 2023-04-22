const { error } = require('console');
var express = require('express');
var router = express.Router();
var fs=require("fs")

/* GET home page. */
router.get('/', function(req, res,) {
  fs.readdir("./uploads",{withFileTypes:true},function(err,file){
    res.render("index",{data:file})
  })
});


router.get('/createfiles', function(req, res,) {
  fs.writeFile(`./uploads/${req.query.filename}`," ",function(err){
    if(err) throw error;
    else{
      res.redirect("/")
    }
  })
});

router.get('/createfolder',function(req,res){
  fs.mkdir(`./uploads/${  req.query.foldername}`,function(err){
    if(err) throw error;
    else{
      res.redirect("/")
    }
  })
})
router.get("/files/file/:data",function(req,res){
  // fs.readdir(`./uploads/${data}`,function(err,data){
  //   res.send(req.params['${data}'])
  // })
  res.send(req.params)
})

module.exports = router;
