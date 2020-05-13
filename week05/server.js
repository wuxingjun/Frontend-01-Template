var http=require("http");

const server=http.createServer((req,res)=>{
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    console.log(req.headers);
    res.setHeader('Content-Type','text/html');
    res.setHeader('X-Foo','bar');
    res.writeHead(200,{'Content-Type':'text-plain'});
    res.end('Hello awu');
})
server.listen(9090);
console.log(server);