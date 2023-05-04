const { error } = require('console');
var express = require('express');
var router = express.Router();
var fs=require("fs")
var data=[]

/* GET home page. */
router.get('/', function(req, res,) {
  fs.readdir("./uploads",{withFileTypes:true},function(err,files){
    res.render("index",{files})
  })
});


router.get('/createfiles', function(req, res,) {
  fs.writeFile(`./uploads/${req.query.filename}`,"",function(err){
    if(err) throw error;
    else{
    

      res.redirect("/",)
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
});

router.get("/files/:filename",function(req,res){
  fs.readdir("./uploads",{withFileTypes:true},function(err,files){
    fs.readFile(`./uploads/${req.params.filename}`,"utf-8",function(err,data){
      res.render("filesopend",{files:files,filename:req.params.filename,filedata:data})
  
    })
  })
 
});

router.get("/delete/:dname",function(req,res){
  fs.rmdir(`./uploads/${req.params.dname}`,function(err,data){
    if(err) throw error
    else{
  res.redirect("/")

    }

  })


})
router.get("/deletefile/:fname",function(req,res){
  fs.unlink(`./uploads/${req.params.fname}`,function(err,data){
    if (err)throw error
    else{
      res.redirect("/")
    }
  })

})


module.exports = router;
