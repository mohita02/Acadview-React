var fs=require('fs');
var http=require('http');

var server=http.createServer((req,res)=>{

var file=fs.createReadStream('readme.txt','utf8');
file.on('data',function(chunk){
    console.log(chunk);
});
});

server.on("connection",(socket)=>{
    console.log("hi!");
});
server.listen(3000);
console.log("working!!!");
