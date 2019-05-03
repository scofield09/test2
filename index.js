var mysql = require("mysql");
var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'hao13795296861',
    database:'my_blog'
});

conn.connect(function(err){
    if(err){
        console.log("连接失败");
    }else{
        console.log("连接成功");
    }
});