var express=require("express")
// 加密
var crypto=require("crypto");
// 引入bodyParser模块
var bodyParser=require("body-parser")
// 引入token模块
var jwt=require("jsonwebtoken");
var vE=bodyParser.urlencoded({ extended: false });
// 连接数据库
var mongoose=require("mongoose")
// 定义集合
var dbcollection=mongoose.model("vipkhs",{
    uemail:String,
    upwd:String,
    uname:String,  
})
var app=express()
app.use(function(req,res,next){
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next()
})
app.post("/reg",vE,function(req,res){
    var uname=req.body.name
    var upwd=req.body.pwd
    var uemail=req.body.email
    var mdPwd=crypto.createHash('md5').update(upwd).digest('hex');
    console.log(uname+"---"+upwd+"---"+uemail+"----"+mdPwd)
    mongoose.connect("mongodb://localhost:27017/vip",{useNewUrlParser:true},function(err){
        if(err){
            console.log("数据库连接失败")
        }else{
            console.log("数据库连接成功")
            dbcollection.find({uname:uname}).then((ok)=>{
                if(ok.length>0){
                    res.send({mes:"用户名已存在",status:200})
                }else if(ok.length==0){
                      // 6-2.设置存入数据
                        var newkh=new dbcollection({
                        uemail:uemail,
                        uname:uname,
                        upwd:mdPwd
                   })
                   newkh.save().then(
                    (ok)=>{res.send({mes:"注册成功",status:200,linkid:1})},
                    (err)=>{res.send({mes:"注册失败",status:400,linkid:0})},)
                }
            },
            )
        }
    })
})
app.post("/login",vE,function(req,res){
    var upwd=req.body.pwd
    var uemail=req.body.email 
    var mdPwd=crypto.createHash('md5').update(upwd).digest('hex');
    console.log(upwd+"---"+uemail+"----"+mdPwd)
    mongoose.connect("mongodb://localhost:27017/vip",{useNewUrlParser:true},function(err){
        if(err){
            console.log("数据库连接失败")
        }else{
            console.log("数据库连接成功")
            dbcollection.find({ uemail:uemail,upwd:mdPwd}).then(
                (ok)=>{
                 // 在查询的时候成功可能有两种结果 第一种查出来值了 第二种没有查出来但是反悔了一个空数组  
                 if(ok.length>0){
               //   8-2创建token:jwt.sign(（要加密的数据）,私钥（一堆乱码）)
               var obj={
                   loginok:true,
                   uemail:uemail
               }
               var mi="snjdejimvfnjn"
               // 8-3保存token
               var token=jwt.sign(obj,mi);
               // 8-4把保存的token值返回给前端   
                res.send({mes:"登录成功",status:200,token})
                // console.log(token)
                 }else if(ok.length==0){
                   res.send({mes:"登录失败",status:400,})
                 }
                },)
        }
    })
})
app.listen(4000)